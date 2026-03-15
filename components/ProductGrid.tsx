import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/data";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (!products.length) {
    return (
      <div className="text-center py-20">
        <p className="text-silver-400">No products found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <Link href={`/collections/${product.slug}`} key={product.id} className="group block">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-carbon-900 border border-white/5 group-hover:border-gold-500/30 transition-colors duration-500">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient overlay at bottom for better text readability */}
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
      ))}
    </div>
  );
}
