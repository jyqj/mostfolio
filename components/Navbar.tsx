'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import SearchOverlay from '@/components/SearchOverlay';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Collections', href: '/collections' },
  { label: 'Our Story', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, setCartOpen } = useCart();

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass shadow-lg shadow-black/30' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <span
              className="text-2xl font-semibold tracking-[0.25em] text-silver-200 transition-colors group-hover:text-gold-400"
             
            >
              MOSTFOLIO
            </span>
            <span
              className="hidden text-xs font-light tracking-[0.15em] text-silver-500 sm:inline"
             
            >
              LLC
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-light tracking-[0.12em] uppercase transition-colors duration-300 ${
                    active
                      ? 'text-gold-400'
                      : 'text-silver-400 hover:text-silver-100'
                  }`}
                 
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-gold-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Icons + Mobile toggle */}
          <div className="flex items-center gap-5">
            {/* Search */}
            <button
              aria-label="Search"
              className="text-silver-400 transition-colors hover:text-silver-100"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={20} strokeWidth={1.5} />
            </button>

            {/* Cart */}
            <button
              aria-label="Cart"
              className="relative text-silver-400 transition-colors hover:text-silver-100"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold-500 text-[10px] font-medium text-carbon-950">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Hamburger */}
            <button
              aria-label="Menu"
              className="md:hidden text-silver-300 transition-colors hover:text-silver-100"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`overflow-hidden transition-all duration-500 md:hidden ${
            mobileOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="glass flex flex-col gap-4 px-6 pb-6 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-light tracking-[0.12em] uppercase text-silver-300 transition-colors hover:text-gold-400"
               
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  );
}
