import { NextRequest, NextResponse } from 'next/server';
import { getOrders, createOrder } from '@/lib/db';
import { requireAdminAuth } from '@/lib/admin-auth';
import { products } from '@/lib/data';

export async function GET(request: NextRequest) {
  const authError = requireAdminAuth(request);
  if (authError) return authError;

  const orders = await getOrders();
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');

  if (status && status !== 'all') {
    return NextResponse.json(orders.filter(o => o.status === status));
  }
  return NextResponse.json(orders);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY_LENGTH = 10_000;

export async function POST(request: NextRequest) {
  try {
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > MAX_BODY_LENGTH) {
      return NextResponse.json({ error: 'Request body too large' }, { status: 413 });
    }

    const body = await request.json();

    const { customerName, customerEmail, shippingAddress, items } = body;

    if (
      typeof customerName !== 'string' || customerName.trim().length < 2 ||
      typeof customerEmail !== 'string' || !EMAIL_RE.test(customerEmail) ||
      typeof shippingAddress !== 'string' || shippingAddress.trim().length < 5 ||
      !Array.isArray(items) || items.length === 0 || items.length > 50
    ) {
      return NextResponse.json({ error: 'Missing or invalid required fields' }, { status: 400 });
    }

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
      };
    });

    const totalAmount = validatedItems.reduce(
      (sum: number, i: { price: number; quantity: number }) => sum + i.price * i.quantity,
      0
    );

    const order = await createOrder({
      customerName: customerName.trim(),
      customerEmail: customerEmail.trim().toLowerCase(),
      shippingAddress: shippingAddress.trim(),
      status: 'pending',
      items: validatedItems,
      totalAmount,
    });

    return NextResponse.json(order, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid request body';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
