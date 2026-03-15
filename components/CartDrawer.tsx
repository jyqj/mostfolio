'use client';

import { useCart } from '@/lib/cart-context';
import Image from 'next/image';
import Link from 'next/link';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, isCartOpen, setCartOpen } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[201] h-full w-full max-w-md bg-carbon-900 border-l border-carbon-700/50 shadow-2xl shadow-black/50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-carbon-700/40">
            <div className="flex items-center gap-3">
              <ShoppingBag size={18} className="text-gold-400" />
              <h2
                className="text-lg font-light tracking-[0.15em] text-silver-100"
               
              >
                Your Bag
              </h2>
              {totalItems > 0 && (
                <span className="text-xs text-silver-500">({totalItems})</span>
              )}
            </div>
            <button
              onClick={() => setCartOpen(false)}
              className="p-1.5 text-silver-400 hover:text-silver-100 transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                <ShoppingBag size={40} className="text-carbon-600" />
                <p className="text-silver-500 text-sm">
                  Your bag is empty
                </p>
                <button
                  onClick={() => setCartOpen(false)}
                  className="text-xs uppercase tracking-[0.15em] text-gold-400 hover:text-gold-500 transition-colors"
                 
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map(({ product, quantity }) => (
                  <li key={product.id} className="flex gap-4 py-4 border-b border-carbon-700/30 last:border-0">
                    {/* Image */}
                    <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-carbon-800">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-sm text-silver-200 truncate"
                       
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-silver-500 mt-0.5">{product.category}</p>
                      <p className="text-sm text-silver-300 mt-2">
                        ${product.price.toLocaleString()}
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="p-1 text-silver-500 hover:text-silver-200 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-xs text-silver-300 w-5 text-center">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="p-1 text-silver-500 hover:text-silver-200 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(product.id)}
                      className="self-start p-1 text-silver-500/40 hover:text-red-400 transition-colors"
                      aria-label="Remove item"
                    >
                      <X size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-carbon-700/40 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.15em] text-silver-400">
                  Subtotal
                </span>
                <span className="text-lg text-silver-100">
                  ${totalPrice.toLocaleString()}
                </span>
              </div>
              <p className="text-[11px] text-silver-500">
                Shipping & taxes calculated at checkout
              </p>
              <Link
                href="/checkout"
                onClick={() => setCartOpen(false)}
                className="block w-full text-center border border-gold-500 bg-gold-500 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-carbon-950 transition-all duration-500 hover:bg-gold-400 hover:border-gold-400"
               
              >
                Proceed to Checkout
              </Link>
              <button
                onClick={() => setCartOpen(false)}
                className="block w-full text-center text-xs uppercase tracking-[0.15em] text-silver-400 hover:text-silver-200 transition-colors py-2"
               
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
