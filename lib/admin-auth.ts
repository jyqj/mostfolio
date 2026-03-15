import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const COOKIE_NAME = 'mostfolio_admin_session';
const SECRET = process.env.ADMIN_SESSION_SECRET || '__dev_fallback_change_in_prod__';
const TOKEN_MAX_AGE_SEC = 24 * 60 * 60;

interface TokenPayload {
  iat: number;
  exp: number;
}

function hmac(data: string): string {
  return crypto.createHmac('sha256', SECRET).update(data).digest('base64url');
}

export function createSessionToken(): string {
  const now = Math.floor(Date.now() / 1000);
  const payload: TokenPayload = { iat: now, exp: now + TOKEN_MAX_AGE_SEC };
  const data = Buffer.from(JSON.stringify(payload)).toString('base64url');
  return `${data}.${hmac(data)}`;
}

export function verifySessionToken(token: string): boolean {
  const parts = token.split('.');
  if (parts.length !== 2) return false;

  const [data, sig] = parts;
  if (!data || !sig) return false;

  const expected = hmac(data);
  if (sig.length !== expected.length) return false;
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return false;

  try {
    const payload = JSON.parse(Buffer.from(data, 'base64url').toString()) as TokenPayload;
    if (typeof payload.exp !== 'number') return false;
    return Date.now() / 1000 <= payload.exp;
  } catch {
    return false;
  }
}

export const ADMIN_COOKIE_NAME = COOKIE_NAME;
export const ADMIN_TOKEN_MAX_AGE = TOKEN_MAX_AGE_SEC;

export function requireAdminAuth(request: NextRequest): NextResponse | null {
  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token || !verifySessionToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return null;
}
