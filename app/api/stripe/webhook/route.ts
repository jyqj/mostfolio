import { NextRequest, NextResponse } from 'next/server';
import stripe from '@/lib/stripe';
import { updateOrder, getOrderById } from '@/lib/db';
import { createPayment } from '@/lib/db';
import Stripe from 'stripe';

// Disable body parsing — Stripe needs the raw body to verify signature
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  const sig = request.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header or webhook secret' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    const rawBody = await request.text();
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Webhook verification failed';
    console.error('[Stripe Webhook] Signature verification failed:', message);
    return NextResponse.json({ error: `Webhook Error: ${message}` }, { status: 400 });
  }

  // ─── Handle events ──────────────────────────────────────────────────
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      const orderId = session.metadata?.orderId;

      if (!orderId) {
        console.warn('[Stripe Webhook] No orderId in session metadata');
        break;
      }

      const order = await getOrderById(orderId);
      if (!order) {
        console.warn(`[Stripe Webhook] Order not found: ${orderId}`);
        break;
      }

      // Update order status
      await updateOrder(orderId, { status: 'processing' });

      // Create payment record
      await createPayment({
        orderId,
        method: 'stripe',
        amount: (session.amount_total || 0) / 100, // Convert from cents
        status: 'completed',
        transactionId: session.payment_intent as string || session.id,
      });

      console.log(`[Stripe Webhook] Order ${orderId} marked as processing, payment recorded.`);
      break;
    }

    case 'checkout.session.expired': {
      const session = event.data.object as Stripe.Checkout.Session;
      const orderId = session.metadata?.orderId;

      if (orderId) {
        await updateOrder(orderId, { status: 'cancelled' });
        console.log(`[Stripe Webhook] Order ${orderId} cancelled (session expired).`);
      }
      break;
    }

    default:
      // Unhandled event type — silently acknowledge
      break;
  }

  return NextResponse.json({ received: true });
}
