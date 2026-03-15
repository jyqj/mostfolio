'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Instagram } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Collections', href: '/collections' },
  { label: 'Our Story', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Shipping & Returns', href: '/shipping' },
  { label: 'FAQ', href: '/faq' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 4000);
      }
    } catch { /* fail silently */ }
  };

  return (
    <footer className="relative border-t border-carbon-700/50 bg-carbon-900">
      {/* Subtle top gradient line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3
              className="text-xl font-semibold tracking-[0.25em] text-silver-200"
             
            >
              MOSTFOLIO LLC
            </h3>
            <p
              className="max-w-xs text-sm leading-relaxed text-silver-500"
             
            >
              Premium men&apos;s jewelry forged with intent. Uncompromising
              craftsmanship meets bold, modern design.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-carbon-600 text-silver-500 transition-all hover:border-gold-500/50 hover:text-gold-400">
                <Instagram size={14} />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-carbon-600 text-silver-500 transition-all hover:border-gold-500/50 hover:text-gold-400">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-carbon-600 text-silver-500 transition-all hover:border-gold-500/50 hover:text-gold-400">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.11V9a6.33 6.33 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.17A8.26 8.26 0 0019.59 10V6.69z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4
              className="text-xs font-medium uppercase tracking-[0.2em] text-silver-400"
             
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver-500 transition-colors duration-300 hover:text-gold-400"
                   
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4
              className="text-xs font-medium uppercase tracking-[0.2em] text-silver-400"
             
            >
              Information
            </h4>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver-500 transition-colors duration-300 hover:text-gold-400"
                   
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Address */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4
                className="text-xs font-medium uppercase tracking-[0.2em] text-silver-400"
               
              >
                Stay Updated
              </h4>
              <form
                className="flex overflow-hidden rounded-md border border-carbon-600 bg-carbon-800 focus-within:border-gold-500/50"
                onSubmit={handleNewsletter}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Newsletter email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm text-silver-200 placeholder:text-silver-500/60"
                 
                />
                <button
                  type="submit"
                  className="bg-gold-500 px-5 text-xs font-medium uppercase tracking-wider text-carbon-950 transition-colors hover:bg-gold-400"
                 
                >
                  {subscribed ? '✓' : 'Join'}
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-emerald-400">
                  Thank you for subscribing!
                </p>
              )}
            </div>

            <address
              className="not-italic text-sm leading-relaxed text-silver-500"
             
            >
              130 DAIRY FARM RD
              <br />
              MOORESVILLE, NC 28115
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center gap-3 border-t border-carbon-700/40 pt-6 sm:flex-row sm:justify-between">
          <p
            className="text-xs text-silver-500/60"
           
          >
            &copy; {new Date().getFullYear()} MOSTFOLIO LLC. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-silver-500/40 hover:text-silver-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-silver-500/40 hover:text-silver-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
