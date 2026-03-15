import { NextRequest, NextResponse } from 'next/server';
import { getPaymentById, updatePayment, deletePayment } from '@/lib/db';
import { requireAdminAuth } from '@/lib/admin-auth';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = requireAdminAuth(request);
  if (authError) return authError;

  const { id } = await params;
  const payment = await getPaymentById(id);
  if (!payment) {
    return NextResponse.json({ error: 'Payment not found' }, { status: 404 });
  }
  return NextResponse.json(payment);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = requireAdminAuth(request);
  if (authError) return authError;

  const { id } = await params;
  try {
    const body = await request.json();
    const payment = await updatePayment(id, body);
    if (!payment) {
      return NextResponse.json({ error: 'Payment not found' }, { status: 404 });
    }
    return NextResponse.json(payment);
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = requireAdminAuth(request);
  if (authError) return authError;

  const { id } = await params;
  const deleted = await deletePayment(id);
  if (!deleted) {
    return NextResponse.json({ error: 'Payment not found' }, { status: 404 });
  }
  return NextResponse.json({ success: true });
}
