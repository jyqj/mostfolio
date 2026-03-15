export const metadata = {
  title: 'Privacy Policy — MOSTFOLIO LLC',
  description: 'MOSTFOLIO LLC privacy policy detailing how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-carbon-950 pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1
          className="text-3xl font-light text-silver-100 tracking-wide mb-2"
        >
          Privacy Policy
        </h1>
        <p className="text-xs text-silver-500 mb-12">
          Last updated: March 15, 2026
        </p>

        <article className="prose-policy space-y-8 text-sm text-silver-400 leading-relaxed">
          <section>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-silver-200 mb-3">
              1. Information We Collect
            </h2>
            <p>When you visit our site, we collect certain information about your device, including your web browser, IP address, time zone, and some of the cookies installed on your device. We refer to this as &quot;Device Information.&quot;</p>
            <p className="mt-3">When you place an order, we collect your name, shipping address, email address, and phone number. We refer to this as &quot;Order Information.&quot; We do not currently collect or store payment card information directly; when a payment integration is active, card data is handled entirely by the third-party payment processor and never touches our servers.</p>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-silver-200 mb-3">
              2. How We Use Your Information
            </h2>
            <p>We use the Order Information to fulfill orders, arrange shipping, and communicate with you about your purchase. We use Device Information to help us optimize our site and improve the overall user experience.</p>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-silver-200 mb-3">
              3. Sharing Your Information
            </h2>
            <p>We do not sell or rent your personal information to third parties. In the future, we may share limited information with logistics partners to ship orders and with payment processors to handle transactions. Any such sharing will be strictly limited to what is necessary for order fulfillment.</p>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-silver-200 mb-3">
              4. Data Retention
            </h2>
            <p>When you place an order, we maintain your Order Information for our records unless and until you ask us to delete this information. Device Information is retained for analytic purposes for up to 24 months.</p>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-silver-200 mb-3">
              5. Your Rights
            </h2>
            <p>If you are a European resident, you have the right to access, correct, update, or request deletion of your personal information. You can exercise these rights by contacting us at the address below.</p>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-silver-200 mb-3">
              6. Contact Us
            </h2>
            <p>For questions about this privacy policy, or to exercise your rights, please contact us at <a href="mailto:privacy@mostfoliousa.com" className="text-gold-400 hover:text-gold-500 transition-colors">privacy@mostfoliousa.com</a> or by mail to: 130 Dairy Farm Rd, Mooresville, NC 28115, United States.</p>
          </section>
        </article>
      </div>
    </div>
  );
}
