'use client';

import { useState, useRef, useEffect } from 'react';
import { products } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { X, Search } from 'lucide-react';

interface SearchOverlayProps {
  onClose: () => void;
}

export default function SearchOverlay({ onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const results = query.length >= 2
    ? products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : [];

  return (
    <div className="fixed inset-0 z-[300] bg-carbon-950/95 backdrop-blur-md">
      <div className="mx-auto max-w-2xl px-6 pt-24">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-silver-400 hover:text-silver-100 transition-colors"
          aria-label="Close search"
        >
          <X size={24} />
        </button>

        {/* Search input */}
        <div className="relative mb-8">
          <Search size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-silver-500" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search collections…"
            className="w-full bg-transparent border-b border-carbon-600 pb-3 pl-8 text-xl text-silver-100 placeholder:text-silver-500/50 outline-none focus:border-gold-500/50 transition-colors"
           
          />
        </div>

        {/* Results */}
        {query.length >= 2 && (
          <div className="space-y-1">
            {results.length === 0 ? (
              <p className="text-silver-500 text-sm py-8 text-center">
                No results for &ldquo;{query}&rdquo;
              </p>
            ) : (
              results.map(product => (
                <Link
                  key={product.id}
                  href={`/collections/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-4 p-3 rounded-sm hover:bg-carbon-800/50 transition-colors group"
                >
                  <div className="relative h-14 w-12 flex-shrink-0 overflow-hidden bg-carbon-800">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-silver-200 truncate group-hover:text-gold-400 transition-colors">
                      {product.name}
                    </p>
                    <p className="text-xs text-silver-500">{product.category} — ${product.price}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        )}

        {query.length < 2 && (
          <p className="text-silver-500/50 text-xs text-center">
            Type at least 2 characters to search
          </p>
        )}
      </div>
    </div>
  );
}
