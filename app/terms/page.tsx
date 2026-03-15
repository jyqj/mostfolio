export const metadata = {
  title: 'Terms of Service — MOSTFOLIO LLC',
  description: 'Terms and conditions governing the use of the MOSTFOLIO LLC website and the purchase of products.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-carbon-950 pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1
          className="text-3xl font-light text-silver-100 tracking-wide mb-2"
         
        >
          Terms of Service
        </h1>
        <p className="text-xs text-silver-500 mb-12">
          Last updated: March 1, 2025
        </p>

        <article className="space-y-8 text-sm text-silver-400 leading-relaxed">
          <section>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-silver-200 mb-3">1. Overview</h2>
            <p>This website is operated by MOSTFOLIO LLC. Throughout the site, the terms &quot;we,&quot; &quot;us,&quot; and &quot;our&quot; refer to MOSTFOLIO LLC. We offer this website, including all information, tools, and services available from this site, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.</p>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-silver-200 mb-3">2. Online Store Terms</h2>
            <p>You may not use our products for any illegal or unauthorized purpose. You must not, in the use of the service, violate any laws in your jurisdiction. A breach or violation of any of the terms will result in an immediate termination of your services.</p>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-silver-200 mb-3">3. General Conditions</h2>
            <p>We reserve the right to refuse service to anyone for any reason at any time. Your content (not including credit card information) may be transferred unencrypted and involve transmissions over various networks and changes to conform and adapt to the technical requirements of connecting networks or devices.</p>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-silver-200 mb-3">4. Accuracy of Information</h2>
            <p>We are not responsible if information made available on this site is not accurate, complete, or current. The material on this site is provided for general information only. We reserve the right to modify the contents of this site at any time without obligation to update.</p>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-silver-200 mb-3">5. Products and Pricing</h2>
            <p>Certain products may be available exclusively online. These products may have limited quantities and are subject to return or exchange only according to our return policy. We have made every effort to display the colors and images of our products accurately, but we cannot guarantee that your monitor&apos;s display will be accurate. We reserve the right to limit quantities and to revise prices at any time without notice.</p>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-silver-200 mb-3">6. Contact Information</h2>
            <p>Questions about the Terms of Service should be sent to <a href="mailto:legal@mostfoliousa.com" className="text-gold-400 hover:text-gold-500 transition-colors">legal@mostfoliousa.com</a>.</p>
          </section>
        </article>
      </div>
    </div>
  );
}
