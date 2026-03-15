'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

/* ─── Product & Category Data ──────────────── */
const SIGNATURE_PRODUCTS = [
  {
    name: 'The Obsidian Forge',
    material: 'Forged Carbon & Solid 925 Silver',
    price: '$280',
    image: '/images/forged_carbon_ring.png',
    href: '/collections',
  },
  {
    name: 'Tungsten Hex Link',
    material: 'Black Tungsten & Industrial Steel',
    price: '$450',
    image: '/images/tungsten_steel_bracelet.png',
    href: '/collections',
  },
  {
    name: 'Heavyweight Cuban',
    material: 'Architectural Grade 925 Silver',
    price: '$620',
    image: '/images/heavyweight_cuban_chain.png',
    href: '/collections',
  },
];

const CATEGORIES = [
  {
    name: 'Rings',
    image: '/images/rings_dark_exhibit.png',
    href: '/collections?category=Rings',
    tagline: 'Forged statements',
  },
  {
    name: 'Chains',
    image: '/images/chains_dark_exhibit.png',
    href: '/collections?category=Chains',
    tagline: 'Woven strength',
  },
  {
    name: 'Bracelets',
    image: '/images/bracelets_dark_exhibit.png',
    href: '/collections?category=Bracelets',
    tagline: 'Bound precision',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero_cuban_chain.png"
          alt="Premium silver cuban link chain"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-950/70 via-carbon-950/40 to-carbon-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon-950/60 to-transparent" />

        {/* Content */}
        <div className="stagger relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="animate-fade-in-up mb-4 text-xs font-medium uppercase tracking-[0.35em] text-silver-400 opacity-0">
            Object Library // Vol. 01
          </p>
          <h1 className="animate-fade-in-up text-5xl font-light leading-tight tracking-wide text-silver-100 opacity-0 sm:text-6xl md:text-7xl lg:text-8xl">
            Heavy Metals.<br/>Quiet Confidence.
          </h1>
          <h2 className="animate-fade-in-up mt-5 text-base font-light leading-relaxed tracking-wide text-silver-400 opacity-0 sm:text-lg md:text-xl max-w-2xl mx-auto">
            Architectural jewelry cast in solid sterling, tungsten, and forged carbon. Engineered for permanence.
          </h2>
          <div className="animate-fade-in-up mt-10 opacity-0">
            <Link
              href="/collections"
              className="group relative inline-flex items-center gap-3 overflow-hidden border border-gold-500 bg-transparent px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-400 transition-all duration-500 hover:bg-gold-500 hover:text-carbon-950"
            >
              <span className="relative z-10">Shop the Collection</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-silver-500">
              Scroll
            </span>
            <div className="h-8 w-px bg-gradient-to-b from-silver-500 to-transparent" />
          </div>
        </div>
      </section>

      {/* ─── Featured Categories ──────────────── */}
      <section id="collections" className="relative bg-carbon-950 py-24 lg:py-32">
        {/* Section heading — LEFT-ALIGNED for visual variety */}
        <ScrollReveal variant="left" className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
          <div className="flex items-start gap-6">
            <div className="mt-4 h-px w-16 shrink-0 bg-silver-500/50" />
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-silver-400 mb-3">
                Index
              </p>
              <h2 className="text-3xl font-light tracking-wide text-silver-100 sm:text-4xl md:text-5xl">
                Industrial grade.<br className="hidden sm:block" /> Editorial execution.
              </h2>
            </div>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {CATEGORIES.map((cat, i) => (
            <ScrollReveal key={cat.name} variant="scale" delay={i * 120}>
              <Link
                href={cat.href}
                className="group relative block aspect-[4/5] overflow-hidden"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={85}
                />
                {/* dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/90 via-carbon-950/30 to-transparent transition-opacity duration-500 group-hover:from-carbon-950/80" />
                {/* label */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-silver-500 mb-2">
                    {cat.tagline}
                  </span>
                  <h3 className="text-2xl font-light tracking-[0.15em] text-silver-100">
                    {cat.name}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-gold-400 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1">
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
                {/* gold border accent on hover */}
                <div className="absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-gold-500/30" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── Signature Artifacts ──────────────── */}
      <section className="relative bg-carbon-900 py-24 lg:py-32">
        <ScrollReveal variant="up" className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold-500 mb-3">
            Core Requisites
          </p>
          <h2 className="text-3xl font-light tracking-wide text-silver-100 sm:text-4xl md:text-5xl">
            Signature Artifacts
          </h2>
        </ScrollReveal>

        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {SIGNATURE_PRODUCTS.map((product, i) => (
            <ScrollReveal key={product.name} variant="scale" delay={i * 150}>
              <Link href={product.href} className="group block">
                <div className="relative aspect-square overflow-hidden bg-carbon-950">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    quality={90}
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-carbon-950/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="mt-6 flex flex-col items-center text-center">
                  <h3 className="text-lg font-light tracking-widest text-silver-100 uppercase">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs tracking-wider text-silver-500">
                    {product.material}
                  </p>
                  <p className="mt-3 text-sm font-medium tracking-widest text-gold-400">
                    {product.price}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/collections"
            className="group relative inline-flex items-center gap-3 overflow-hidden border border-silver-600 bg-transparent px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-silver-300 transition-all duration-500 hover:border-silver-200 hover:text-carbon-950 hover:bg-silver-200"
          >
            <span className="relative z-10">View Full Archive</span>
          </Link>
        </div>
      </section>

      {/* ─── Materials & Engineering ──────────── */}
      <section className="relative overflow-hidden bg-carbon-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <ScrollReveal variant="left" className="order-2 lg:order-1">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-silver-500 mb-4">
                Raw Materials
              </p>
              <h2 className="text-3xl font-light leading-tight tracking-wide text-silver-100 sm:text-4xl md:text-5xl mb-8">
                Uncompromising <br className="hidden sm:block" />
                Metallurgy.
              </h2>
              <div className="space-y-6 text-sm leading-relaxed tracking-wide text-silver-400">
                <p>
                  We source our solid 925 sterling silver, medical-grade titanium, and forged carbon from the same foundries that supply aerospace engineering firms. Every gram of metal serves a structural purpose.
                </p>
                <p>
                  No plating. No hollow cores. Just heavy, dense artifacts that will patinate and tell the story of the wearer over a lifetime of use.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-carbon-800 pt-8">
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-silver-200 mb-2">Forged Carbon</h4>
                  <p className="text-xs text-silver-500 leading-relaxed">High tensile strength, striking marbled finish.</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-silver-200 mb-2">Tungsten Carbide</h4>
                  <p className="text-xs text-silver-500 leading-relaxed">Supreme density, scratch-resistant resilience.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="right" className="order-1 lg:order-2">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-carbon-800">
                <Image
                  src="/images/brushed_metal_texture.png"
                  alt="Raw brushed tungsten and silver texture"
                  fill
                  className="object-cover"
                  quality={95}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Brand Vision & Foundry ───────────── */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-32">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
             src="/images/brutalist_jewelry_foundry.png"
             alt="Brutalist jewelry foundry"
             fill
             className="object-cover object-center"
             quality={90}
          />
          <div className="absolute inset-0 bg-carbon-950/80 mix-blend-multiply" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-carbon-950 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-carbon-950 to-transparent" />
        </div>

        <ScrollReveal className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="relative">
            <span className="quote-mark -top-12 left-0 text-carbon-700/50">&ldquo;</span>
            <blockquote className="text-2xl font-light italic leading-relaxed tracking-wide text-silver-200 sm:text-3xl md:text-4xl">
              We don&apos;t make accessories. We engineer artifacts that outlast their owners. 
              Every piece is a study in tension between raw materials and precise execution.
            </blockquote>
          </div>
          <p className="mt-12 text-[11px] uppercase tracking-[0.2em] text-silver-500">
            — The Foundry Notes, Vol. 01
          </p>
        </ScrollReveal>
      </section>

      {/* ─── Newsletter ───────────────────────── */}
      <section className="relative border-t border-carbon-800 bg-carbon-950 py-24 lg:py-32">
        <ScrollReveal variant="up" className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-light tracking-wide text-silver-100 sm:text-3xl mb-4">
            Join The Foundry
          </h2>
          <p className="text-sm tracking-wide text-silver-400 mb-10">
            Insider access to limited casts, private drops, and editorial insights.
          </p>
          <form className="relative flex w-full max-w-md mx-auto items-center" onSubmit={(e) => { e.preventDefault(); }}>
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              required
              className="w-full border-b border-silver-600 bg-transparent px-4 py-3 pb-4 text-sm tracking-widest text-silver-200 placeholder:text-silver-600 focus:border-gold-500 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 -translate-y-1/2 px-4 text-xs font-medium uppercase tracking-[0.2em] text-gold-500 transition-colors hover:text-silver-100"
            >
              Subscribe
            </button>
          </form>
        </ScrollReveal>
      </section>
    </>
  );
}
