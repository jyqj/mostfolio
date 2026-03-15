'use client';

import { useState, useMemo, useCallback } from 'react';
import { products, getAllCategories, type Product, type Category } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

const ITEMS_PER_PAGE = 12;
const categories = getAllCategories();

export default function CollectionsPage() {
  const [currentCategory, setCurrentCategory] = useState<Category | 'All'>('All');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filtered = useMemo(() => {
    if (currentCategory === 'All') return products;
    return products.filter(p => p.category === currentCategory);
  }, [currentCategory]);

  const visible = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const hasMore = visibleCount < filtered.length;

  const handleCategoryChange = useCallback((cat: Category | 'All') => {
    setCurrentCategory(cat);
    setVisibleCount(ITEMS_PER_PAGE);
  }, []);

  const loadMore = useCallback(() => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  }, []);

  return (
    <div className="min-h-screen bg-carbon-950 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-silver-100 tracking-wide mb-6">
            The Collection
          </h1>
          <p className="text-silver-400 max-w-2xl text-sm leading-relaxed">
            Explore our definitive selection of men&apos;s jewelry. Each piece is forged from premium materials like aerospace-grade titanium, 925 sterling silver, and forged carbon fiber, designed to withstand the test of time and define your personal legacy.
          </p>
        </div>

        {/* Filters — client-side, no navigation */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button
            onClick={() => handleCategoryChange('All')}
            className={`px-5 py-2 text-xs uppercase tracking-[0.15em] border transition-colors cursor-pointer ${
              currentCategory === 'All'
                ? 'border-gold-500 text-gold-400 bg-gold-900/10'
                : 'border-carbon-700 text-silver-400 hover:border-gold-500/50 hover:text-silver-200'
            }`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-[0.15em] border transition-colors cursor-pointer ${
                currentCategory === cat
                  ? 'border-gold-500 text-gold-400 bg-gold-900/10'
                  : 'border-carbon-700 text-silver-400 hover:border-gold-500/50 hover:text-silver-200'
              }`}
            >
              {cat}
            </button>
          ))}

          {/* Count indicator */}
          <span className="ml-auto self-center text-xs text-silver-500 tracking-wider">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Product Grid with animation */}
        {visible.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-silver-400">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="mt-16 text-center">
            <button
              onClick={loadMore}
              className="group inline-flex items-center gap-3 border border-carbon-700 px-10 py-4 text-xs uppercase tracking-[0.2em] text-silver-400 transition-all duration-300 hover:border-gold-500/50 hover:text-gold-400 hover:bg-gold-900/5 cursor-pointer"
            >
              Load More
              <span className="text-[10px] text-silver-500 group-hover:text-gold-500/60 transition-colors">
                ({visible.length} / {filtered.length})
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Product Card — extracted for per-card animation ─── */
function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <Link
      href={`/collections/${product.slug}`}
      className="group block animate-fade-in-up"
      style={{ animationDelay: `${(index % ITEMS_PER_PAGE) * 50}ms`, animationFillMode: 'both' }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-carbon-900 border border-white/5 group-hover:border-gold-500/30 transition-colors duration-500">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          loading={index < 6 ? 'eager' : 'lazy'}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-900 via-transparent to-transparent opacity-80" />

        <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
          <span className="text-silver-400 text-xs tracking-widest uppercase mb-2">
            {product.category}
          </span>
          <h3 className="text-2xl text-white mb-1 group-hover:text-gold-400 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-silver-300 text-sm">
            ${product.price.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}
