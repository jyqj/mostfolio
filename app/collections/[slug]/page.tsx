import { products, getProductBySlug, getProductsByCategory } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import AddToCartButton from '@/components/AddToCartButton';

/* ─── Static Generation ────────────────── */
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — MOSTFOLIO LLC`,
    description: product.shortDescription,
  };
}

/* ─── Page Component ───────────────────── */
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  // Related products: same category, excluding current
  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const specs = Object.entries(product.specifications).filter(
    ([, v]) => v !== undefined
  );

  return (
    <div className="min-h-screen bg-carbon-950 pt-20">
      {/* ── Breadcrumb ───────────────────────── */}
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <ol className="flex items-center gap-2 text-xs tracking-widest uppercase text-silver-500">
          <li>
            <Link href="/collections" className="hover:text-silver-200 transition-colors">
              Collections
            </Link>
          </li>
          <li aria-hidden="true">
            <svg className="h-3 w-3 text-carbon-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li>
            <Link
              href={`/collections?category=${product.category}`}
              className="hover:text-silver-200 transition-colors"
            >
              {product.category}
            </Link>
          </li>
          <li aria-hidden="true">
            <svg className="h-3 w-3 text-carbon-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li className="text-silver-300">{product.name}</li>
        </ol>
      </nav>

      {/* ── Editorial Layout ───────────────────── */}
      <section className="max-w-[90rem] mx-auto px-6 lg:px-12 pb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Image Panel (Sticky) */}
          <div className="product-image-enter relative w-full lg:w-[55%] flex-shrink-0">
            <div className="sticky top-24 aspect-[3/4] w-full overflow-hidden bg-carbon-900 border border-white/5 shadow-2xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                quality={90}
              />
              {/* Subtle lighting / glare */}
              <div className="absolute inset-0 bg-gradient-to-tr from-carbon-950/60 via-transparent to-white/5 mix-blend-overlay pointer-events-none" />
              
              {/* Editorial Plate Number */}
              <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-[0.3em] text-silver-500/70">
                  Reference
                </span>
                <span className="text-xs font-mono tracking-widest text-silver-400">
                  {product.id.toUpperCase()}
                </span>
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div className="product-details-enter w-full lg:w-[45%] lg:pt-32 pt-10">
            {/* Category label */}
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-silver-500 mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-silver-600 block" />
              {product.category}
            </h2>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl font-light text-silver-100 tracking-wide leading-[1.1]">
              {product.name}
            </h1>

            {/* Price */}
            <p className="mt-8 text-2xl font-light text-silver-300">
              ${product.price.toLocaleString()}
            </p>

            {/* Short description */}
            <p className="mt-10 text-silver-400 text-sm leading-[1.8] max-w-md">
              {product.shortDescription}
            </p>

            {/* Specs quick list (Minimalist) */}
            <div className="mt-12 flex flex-col gap-4 border-l border-carbon-800 pl-6">
              {specs.slice(0, 3).map(([key, value]) => (
                <div key={key} className="flex flex-col gap-1">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-silver-500">
                    {key}
                  </span>
                  <span className="text-sm text-silver-200">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-14 max-w-sm">
              <AddToCartButton product={product} fullWidth />
            </div>

            {/* Trust signals */}
            <div className="mt-10 pt-10 border-t border-carbon-800 flex flex-wrap gap-x-8 gap-y-4 text-[10px] uppercase tracking-[0.15em] text-silver-500">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-silver-500" />
                Lifetime Warranty
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-silver-500" />
                Free Shipping
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Storytelling Section ──────────────── */}
      <section className="relative bg-carbon-900/50 py-32 lg:py-48 border-y border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-silver-500 mb-12 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-silver-600 block" />
            Object Notes
            <span className="h-px w-8 bg-silver-600 block" />
          </p>

          <div className="space-y-10">
            {product.storytelling.map((paragraph, i) => (
              <p
                key={i}
                className="text-xl md:text-2xl font-light leading-relaxed tracking-wide text-silver-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specifications ────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-silver-500 mb-16 flex items-center justify-center gap-4">
          <span className="h-px w-8 bg-silver-600 block" />
          Technical Data
          <span className="h-px w-8 bg-silver-600 block" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {specs.map(([key, value]) => (
            <div
              key={key}
              className="flex flex-col py-6 border-b border-carbon-800"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-silver-500 mb-2">
                {key}
              </span>
              <span className="text-base font-light text-silver-200">
                {value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Related Products ──────────────────── */}
      {related.length > 0 && (
        <section className="border-t border-white/5 bg-carbon-950 py-24">
          <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
            <h2 className="text-2xl font-light text-silver-100 tracking-wide mb-12">
              Similar Artifacts
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/collections/${item.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-carbon-950 border border-white/5 group-hover:border-gold-500/30 transition-colors duration-500">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-silver-500 mb-2">
                        {item.category}
                      </span>
                      <h3 className="font-display text-lg text-white mb-1 group-hover:text-silver-300 transition-colors duration-300 leading-tight">
                        {item.name}
                      </h3>
                      <p className="font-body text-silver-400 text-sm mt-2">
                        ${item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Back to Collection ────────────────── */}
      <section className="py-12 pb-24 text-center">
        <Link
          href={`/collections?category=${product.category}`}
          className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-silver-500 hover:text-white transition-colors duration-300"
        >
          <svg
            className="h-3 w-3 transition-transform duration-300 hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Return to {product.category}
        </Link>
      </section>
    </div>
  );
}
