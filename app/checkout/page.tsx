'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Lock, AlertCircle, CreditCard } from 'lucide-react';

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', state: '', zip: '', country: 'US',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: `${form.firstName} ${form.lastName}`,
          customerEmail: form.email,
          shippingAddress: `${form.address}, ${form.city}, ${form.state} ${form.zip}`,
          items: items.map(i => ({
            productId: i.product.id,
            quantity: i.quantity,
          })),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || `Checkout failed (${res.status})`);
      }

      if (data.sessionUrl) {
        // Redirect to Stripe Checkout
        window.location.href = data.sessionUrl;
      } else {
        throw new Error('No payment session URL returned');
      }
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
      setSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-carbon-950 pt-32 pb-24">
        <div className="max-w-lg mx-auto px-6 text-center">
          <h1 className="text-3xl font-light text-silver-100 tracking-wide mb-4">
            Your Bag is Empty
          </h1>
          <p className="text-silver-400 text-sm mb-8">
            Add some items to your bag before checking out.
          </p>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-gold-400 hover:text-gold-500 transition-colors"
          >
            <ArrowLeft size={14} />
            Browse Collections
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-carbon-950 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-silver-500 hover:text-silver-200 transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Back to shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-8">
            <h1 className="text-3xl font-light text-silver-100 tracking-wide">
              Checkout
            </h1>

            {submitError && (
              <div className="flex items-start gap-3 border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                <AlertCircle size={18} className="mt-0.5 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            <fieldset className="space-y-4">
              <legend className="text-xs font-medium uppercase tracking-[0.15em] text-silver-400 mb-4">
                Contact Information
              </legend>
              <div className="grid grid-cols-2 gap-4">
                <input
                  required value={form.firstName}
                  onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))}
                  placeholder="First name"
                  className="w-full rounded-sm border border-carbon-600 bg-carbon-800 px-4 py-3 text-sm text-silver-200 placeholder:text-silver-500/50 transition-colors"
                />
                <input
                  required value={form.lastName}
                  onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))}
                  placeholder="Last name"
                  className="w-full rounded-sm border border-carbon-600 bg-carbon-800 px-4 py-3 text-sm text-silver-200 placeholder:text-silver-500/50 transition-colors"
                />
              </div>
              <input
                required type="email" value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="Email address"
                className="w-full rounded-sm border border-carbon-600 bg-carbon-800 px-4 py-3 text-sm text-silver-200 placeholder:text-silver-500/50 transition-colors"
              />
              <input
                type="tel" value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                placeholder="Phone (optional)"
                className="w-full rounded-sm border border-carbon-600 bg-carbon-800 px-4 py-3 text-sm text-silver-200 placeholder:text-silver-500/50 transition-colors"
              />
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="text-xs font-medium uppercase tracking-[0.15em] text-silver-400 mb-4">
                Shipping Address
              </legend>
              <input
                required value={form.address}
                onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
                placeholder="Street address"
                className="w-full rounded-sm border border-carbon-600 bg-carbon-800 px-4 py-3 text-sm text-silver-200 placeholder:text-silver-500/50 transition-colors"
              />
              <div className="grid grid-cols-3 gap-4">
                <input
                  required value={form.city}
                  onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                  placeholder="City"
                  className="w-full rounded-sm border border-carbon-600 bg-carbon-800 px-4 py-3 text-sm text-silver-200 placeholder:text-silver-500/50 transition-colors"
                />
                <input
                  required value={form.state}
                  onChange={e => setForm(f => ({ ...f, state: e.target.value }))}
                  placeholder="State"
                  className="w-full rounded-sm border border-carbon-600 bg-carbon-800 px-4 py-3 text-sm text-silver-200 placeholder:text-silver-500/50 transition-colors"
                />
                <input
                  required value={form.zip}
                  onChange={e => setForm(f => ({ ...f, zip: e.target.value }))}
                  placeholder="ZIP code"
                  className="w-full rounded-sm border border-carbon-600 bg-carbon-800 px-4 py-3 text-sm text-silver-200 placeholder:text-silver-500/50 transition-colors"
                />
              </div>
            </fieldset>

            <div className="flex items-center gap-3 border border-carbon-700/40 bg-carbon-900/30 px-5 py-4 text-xs text-silver-500 leading-relaxed">
              <CreditCard size={16} className="shrink-0 text-silver-400" />
              <span>You will be redirected to Stripe&apos;s secure checkout to complete your payment.</span>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-3 border border-gold-500 bg-gold-500 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-carbon-950 transition-all duration-500 hover:bg-gold-400 hover:border-gold-400 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Lock size={14} />
              {submitting ? 'Redirecting to Payment…' : `Proceed to Payment — $${totalPrice.toLocaleString()}`}
            </button>

            <p className="text-[11px] text-silver-500/60 text-center">
              By proceeding, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>

          <aside className="lg:col-span-2">
            <div className="sticky top-28 border border-carbon-700/40 bg-carbon-900/50 p-6 space-y-4">
              <h2 className="text-sm uppercase tracking-[0.15em] text-silver-400 pb-4 border-b border-carbon-700/30">
                Order Summary
              </h2>

              <ul className="space-y-4">
                {items.map(({ product, quantity }) => (
                  <li key={product.id} className="flex gap-4">
                    <div className="relative h-16 w-14 flex-shrink-0 overflow-hidden bg-carbon-800">
                      <Image src={product.image} alt={product.name} fill sizes="56px" className="object-cover" />
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-carbon-600 text-[10px] text-silver-200">
                        {quantity}
                      </span>
                    </div>
                    <div className="flex-1 flex justify-between items-start">
                      <div>
                        <p className="text-sm text-silver-200 truncate">{product.name}</p>
                        <p className="text-xs text-silver-500">{product.category}</p>
                      </div>
                      <p className="text-sm text-silver-300">${(product.price * quantity).toLocaleString()}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-carbon-700/30 space-y-2">
                <div className="flex justify-between text-xs text-silver-400">
                  <span>Subtotal</span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs text-silver-400">
                  <span>Shipping</span>
                  <span className="text-emerald-400">Free</span>
                </div>
                <div className="flex justify-between text-sm text-silver-100 pt-2 border-t border-carbon-700/30 mt-2">
                  <span>Total</span>
                  <span className="text-lg">${totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
