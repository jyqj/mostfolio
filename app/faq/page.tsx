'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What sizes are available for rings?',
    a: 'Most of our rings are available in US sizes 7 through 13 in full and half sizes. If you need a size outside this range, contact us for a custom order. We recommend visiting a local jeweler for an accurate measurement, or using our printable ring sizer available on each product page.',
  },
  {
    q: 'What materials do you use?',
    a: 'We work with 925 sterling silver, Grade 5 titanium (Ti-6Al-4V), 316L marine-grade stainless steel, tungsten carbide, forged carbon fiber, and select natural gemstones. Each product page lists the exact materials and specifications.',
  },
  {
    q: 'How should I care for my jewelry?',
    a: 'Sterling silver should be stored in the included microfiber pouch when not worn to minimize tarnish. For cleaning, use a soft polishing cloth. Titanium, tungsten, and stainless steel require minimal maintenance — mild soap and warm water is all you need. Avoid exposing plated items to harsh chemicals.',
  },
  {
    q: 'Do you offer engraving?',
    a: 'Select pieces are available for custom engraving. Look for the "Engravable" badge on product pages. Engraving is limited to 20 characters and is done by hand by our artisan team. Please note that engraved items are final sale.',
  },
  {
    q: 'How long does shipping take?',
    a: 'Standard US shipping takes 3–7 business days and is free on all orders. Express shipping (1–3 business days) is available for $14.99. International shipping averages 7–21 business days with rates calculated at checkout. All orders include tracking.',
  },
  {
    q: 'What is your return policy?',
    a: 'We offer a 30-day return policy on unworn items in original condition with tags attached. Custom and engraved pieces are final sale. Exchanges within the US are free. Visit our Shipping & Returns page for full details.',
  },
  {
    q: 'Are your products hypoallergenic?',
    a: 'Titanium and stainless steel are naturally hypoallergenic and safe for sensitive skin. Sterling silver may cause reactions in individuals with silver sensitivity. Our product descriptions note any potential allergens.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Yes, we ship to most countries worldwide. International shipping rates and delivery times are calculated at checkout. Please note that customs duties and import taxes are the responsibility of the buyer.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-carbon-950 pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1
          className="text-3xl font-light text-silver-100 tracking-wide mb-4"
         
        >
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-silver-500 mb-12">
          Everything you need to know about our products, shipping, and policies.
        </p>

        <div className="divide-y divide-carbon-700/40">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left transition-colors group cursor-pointer"
                >
                  <span
                    className={`text-sm font-medium pr-4 transition-colors ${isOpen ? 'text-gold-400' : 'text-silver-200 group-hover:text-silver-100'}`}
                   
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-silver-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm text-silver-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center border-t border-carbon-700/30 pt-10">
          <p className="text-sm text-silver-500 mb-3">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-block border border-gold-500 px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-gold-400 transition-all duration-500 hover:bg-gold-500 hover:text-carbon-950"
           
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
