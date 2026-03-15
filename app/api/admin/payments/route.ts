import { NextRequest, NextResponse } from 'next/server';
import { getPayments, createPayment } from '@/lib/db';
import { requireAdminAuth } from '@/lib/admin-auth';

export async function GET(request: NextRequest) {
  const authError = requireAdminAuth(request);
  if (authError) return authError;

  const payments = await getPayments();
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');

  if (status && status !== 'all') {
    return NextResponse.json(payments.filter(p => p.status === status));
  }
  return NextResponse.json(payments);
}

export async function POST(request: NextRequest) {
  const authError = requireAdminAuth(request);
  if (authError) return authError;

  try {
    const body = await request.json();
    const payment = await createPayment(body);
    return NextResponse.json(payment, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
