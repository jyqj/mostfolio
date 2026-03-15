import { NextRequest, NextResponse } from 'next/server';
import stripe from '@/lib/stripe';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.json({ error: 'Missing session_id' }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return NextResponse.json({
      orderId: session.metadata?.orderId || null,
      customerEmail: session.customer_email || session.customer_details?.email || null,
      amountTotal: session.amount_total ? session.amount_total / 100 : null,
      paymentStatus: session.payment_status,
    });
  } catch {
    return NextResponse.json({ error: 'Session not found' }, { status: 404 });
  }
}
