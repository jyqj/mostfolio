'use client';

import Link from 'next/link';
import { ArrowLeft, XCircle, ShoppingBag } from 'lucide-react';

export default function CheckoutCancelPage() {
  return (
    <div className="min-h-screen bg-carbon-950 pt-32 pb-24">
      <div className="max-w-lg mx-auto px-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 mb-8">
          <XCircle size={28} className="text-amber-400" />
        </div>

        <h1 className="text-3xl font-light text-silver-100 tracking-wide mb-4">
          Payment Cancelled
        </h1>

        <p className="text-silver-400 text-sm leading-relaxed mb-8">
          Your payment was not completed. No charges have been made. Your items are still in your bag — you can try again whenever you&apos;re ready.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 border border-gold-500 bg-gold-500 px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-carbon-950 transition-all duration-500 hover:bg-gold-400 hover:border-gold-400"
          >
            <ShoppingBag size={14} />
            Return to Bag
          </Link>

          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-silver-400 hover:text-silver-200 transition-colors"
          >
            <ArrowLeft size={14} />
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
