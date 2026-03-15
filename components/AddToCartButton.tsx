'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { Check, ShoppingBag } from 'lucide-react';
import type { Product } from '@/lib/data';

interface AddToCartButtonProps {
  product: Product;
  className?: string;
  fullWidth?: boolean;
}

export default function AddToCartButton({ product, className = '', fullWidth = false }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAdd}
      className={`group relative inline-flex items-center justify-center gap-3 overflow-hidden border transition-all duration-500 cursor-pointer ${
        added
          ? 'border-emerald-500/60 bg-emerald-500/10 text-emerald-400'
          : 'border-gold-500 bg-transparent text-gold-400 hover:bg-gold-500 hover:text-carbon-950'
      } px-12 py-4 text-xs font-medium uppercase tracking-[0.2em] ${
        fullWidth ? 'w-full lg:w-auto' : ''
      } ${className}`}
     
      disabled={added}
    >
      <span className="relative z-10">
        {added ? 'Added to Bag' : 'Add to Bag'}
      </span>
      {added ? (
        <Check size={16} className="relative z-10" />
      ) : (
        <ShoppingBag size={16} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
      )}
    </button>
  );
}
