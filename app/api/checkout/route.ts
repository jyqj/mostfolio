import { NextRequest, NextResponse } from 'next/server';
import stripe from '@/lib/stripe';
import { createOrder } from '@/lib/db';
import { products } from '@/lib/data';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_xxx') {
      return NextResponse.json(
        { error: 'Stripe is not configured. Please add your Stripe secret key to .env.local.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { customerName, customerEmail, shippingAddress, items } = body;

    // ─── Validate input ──────────────────────────────────────────────
    if (
      typeof customerName !== 'string' || customerName.trim().length < 2 ||
      typeof customerEmail !== 'string' || !EMAIL_RE.test(customerEmail) ||
      typeof shippingAddress !== 'string' || shippingAddress.trim().length < 5 ||
      !Array.isArray(items) || items.length === 0 || items.length > 50
    ) {
      return NextResponse.json({ error: 'Missing or invalid required fields' }, { status: 400 });
    }

    // ─── Validate items against catalog (prevent price tampering) ───
    const catalogMap = new Map(products.map(p => [p.id, p]));
    const validatedItems = items.map((item: Record<string, unknown>) => {
      const catalogProduct = catalogMap.get(item.productId as string);
      if (!catalogProduct) throw new Error(`Unknown product: ${item.productId}`);
      const qty = Number(item.quantity);
      if (!Number.isInteger(qty) || qty < 1 || qty > 99) {
        throw new Error(`Invalid quantity for ${item.productId}`);
      }
      return {
        productId: catalogProduct.id,
        productName: catalogProduct.name,
        quantity: qty,
        price: catalogProduct.price,
        image: catalogProduct.image,
      };
    });

    const totalAmount = validatedItems.reduce(
      (sum: number, i: { price: number; quantity: number }) => sum + i.price * i.quantity,
      0
    );

    // ─── Create local order (pending) ────────────────────────────────
    const order = await createOrder({
      customerName: customerName.trim(),
      customerEmail: customerEmail.trim().toLowerCase(),
      shippingAddress: shippingAddress.trim(),
      status: 'pending',
      items: validatedItems.map(({ productId, productName, quantity, price }) => ({
        productId, productName, quantity, price,
      })),
      totalAmount,
    });

    // ─── Create Stripe Checkout Session ──────────────────────────────
    const origin = request.headers.get('origin') || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: customerEmail.trim().toLowerCase(),
      line_items: validatedItems.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.productName,
            images: item.image ? [`${origin}${item.image}`] : [],
          },
          unit_amount: Math.round(item.price * 100), // Stripe uses cents
        },
        quantity: item.quantity,
      })),
      metadata: {
        orderId: order.id,
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 0, currency: 'usd' },
            display_name: 'Free Shipping',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 5 },
              maximum: { unit: 'business_day', value: 10 },
            },
          },
        },
      ],
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
    });

    return NextResponse.json({ sessionUrl: session.url, orderId: order.id });
  } catch (err) {
    console.error('[Checkout]', err);
    const message = err instanceof Error ? err.message : 'Checkout failed';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
