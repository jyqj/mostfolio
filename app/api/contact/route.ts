import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // In production, integrate with an email service (SendGrid, Resend, etc.)
    // For now, log the submission and return success
    console.log('[Contact Form]', { name, email, message, timestamp: new Date().toISOString() });

    return NextResponse.json({ success: true, message: 'Message received. We will respond within 24 hours.' });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
