export const metadata = {
  title: 'Shipping & Returns — MOSTFOLIO LLC',
  description: 'Shipping information, delivery times, and return policy for MOSTFOLIO LLC products.',
};

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-carbon-950 pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1
          className="text-3xl font-light text-silver-100 tracking-wide mb-12"
         
        >
          Shipping & Returns
        </h1>

        <article className="space-y-10 text-sm text-silver-400 leading-relaxed">
          {/* Shipping */}
          <section>
            <h2 className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.12em] text-silver-200 mb-4">
              Shipping Information
            </h2>
            <div className="overflow-hidden border border-carbon-700/40 divide-y divide-carbon-700/30">
              <div className="flex justify-between px-5 py-3.5 bg-carbon-800/30">
                <span className="text-silver-300 font-medium">Domestic (US)</span>
                <span>Free Standard Shipping on all orders</span>
              </div>
              <div className="flex justify-between px-5 py-3.5">
                <span className="text-silver-300">Standard (3–7 business days)</span>
                <span className="text-emerald-400">Free</span>
              </div>
              <div className="flex justify-between px-5 py-3.5">
                <span className="text-silver-300">Express (1–3 business days)</span>
                <span>$14.99</span>
              </div>
              <div className="flex justify-between px-5 py-3.5">
                <span className="text-silver-300">International (7–21 business days)</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            <p className="mt-4 text-silver-500 text-xs">
              All orders are processed within 1–2 business days. Once your order has shipped, we will reach out via the email you provided at checkout with tracking details.
            </p>
          </section>

          <div className="h-px bg-carbon-700/30" />

          {/* Packaging */}
          <section>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-silver-200 mb-4">
              Packaging
            </h2>
            <p>Every piece ships in our signature matte-black box with a microfiber pouch, certificate of authenticity, and a care card. Gift wrapping is available at checkout for $5.00.</p>
          </section>

          <div className="h-px bg-carbon-700/30" />

          {/* Returns */}
          <section>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-silver-200 mb-4">
              Return Policy
            </h2>
            <p>We want you to be completely satisfied with your purchase. If for any reason you are not, you may return unworn items within <strong className="text-silver-200">30 days</strong> of delivery for a full refund or exchange.</p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-silver-400">
              <li>Items must be in original, unworn condition with all tags attached</li>
              <li>Items must be returned in the original packaging</li>
              <li>Custom or engraved pieces are final sale and cannot be returned</li>
              <li>Return shipping costs are the responsibility of the customer</li>
            </ul>
          </section>

          <div className="h-px bg-carbon-700/30" />

          {/* Exchanges */}
          <section>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-silver-200 mb-4">
              Exchanges
            </h2>
            <p>Need a different size? We offer free exchanges within the US. Contact us at <a href="mailto:support@mostfoliousa.com" className="text-gold-400 hover:text-gold-500 transition-colors">support@mostfoliousa.com</a> to initiate an exchange.</p>
          </section>
        </article>
      </div>
    </div>
  );
}
