'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Check, ArrowLeft, Package, Loader2 } from 'lucide-react';

interface SessionInfo {
  orderId: string | null;
  customerEmail: string | null;
  amountTotal: number | null;
}

export default function CheckoutSuccessPage() {
  const [info, setInfo] = useState<SessionInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get('session_id');

    if (sessionId) {
      fetch(`/api/checkout/session?session_id=${sessionId}`)
        .then(r => r.ok ? r.json() : null)
        .then(data => {
          if (data) {
            setInfo({
              orderId: data.orderId,
              customerEmail: data.customerEmail,
              amountTotal: data.amountTotal,
            });
          }
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-carbon-950 pt-32 pb-24">
      <div className="max-w-lg mx-auto px-6 text-center">
        {loading ? (
          <Loader2 size={32} className="mx-auto text-silver-400 animate-spin" />
        ) : (
          <>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-8">
              <Check size={28} className="text-emerald-400" />
            </div>

            <h1 className="text-3xl font-light text-silver-100 tracking-wide mb-4">
              Payment Successful
            </h1>

            <p className="text-silver-400 text-sm leading-relaxed mb-2">
              Thank you for your purchase. Your payment has been processed and your order is being prepared.
            </p>

            {info?.orderId && (
              <p className="text-silver-500 text-xs mb-2">
                Order ID: <span className="text-silver-300 font-mono">{info.orderId.toUpperCase()}</span>
              </p>
            )}

            {info?.amountTotal != null && (
              <p className="text-silver-500 text-xs mb-2">
                Amount Paid: <span className="text-silver-300">${info.amountTotal.toLocaleString()}</span>
              </p>
            )}

            {info?.customerEmail && (
              <p className="text-silver-500/60 text-xs mb-6">
                A confirmation email will be sent to{' '}
                <span className="text-gold-400">{info.customerEmail}</span>.
              </p>
            )}

            <div className="flex items-center justify-center gap-3 border border-carbon-700/40 bg-carbon-900/30 px-5 py-4 text-xs text-silver-500 leading-relaxed mb-10">
              <Package size={16} className="shrink-0 text-silver-400" />
              <span>
                Estimated delivery: 5–10 business days. Contact{' '}
                <a href="mailto:support@mostfoliousa.com" className="text-gold-400 hover:text-gold-500 transition-colors">
                  support@mostfoliousa.com
                </a>{' '}
                with your order ID for any questions.
              </span>
            </div>

            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-gold-400 hover:text-gold-500 transition-colors"
            >
              <ArrowLeft size={14} />
              Continue Shopping
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
