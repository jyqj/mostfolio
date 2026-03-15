import { getAllCategories, getProductsByCategory } from '@/lib/data';
import ProductGrid from '@/components/ProductGrid';
import Link from 'next/link';

export default async function CollectionsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const categories = getAllCategories();
  const currentCategory = category || 'All';
  
  const isValidCategory = currentCategory === 'All' || (categories as readonly string[]).includes(currentCategory);
  const validCategory = isValidCategory ? (currentCategory as Parameters<typeof getProductsByCategory>[0]) : 'All';
  const products = getProductsByCategory(validCategory);

  return (
    <div className="min-h-screen bg-carbon-950 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 
            className="text-4xl md:text-5xl font-light text-silver-100 tracking-wide mb-6"
           
          >
            The Collection
          </h1>
          <p 
            className="text-silver-400 max-w-2xl text-sm leading-relaxed"
           
          >
            Explore our definitive selection of men&apos;s jewelry. Each piece is forged from premium materials like aerospace-grade titanium, 925 sterling silver, and forged carbon fiber, designed to withstand the test of time and define your personal legacy.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          <Link
            href="/collections"
            className={`px-5 py-2 text-xs uppercase tracking-[0.15em] border transition-colors ${
              currentCategory === 'All' 
                ? 'border-gold-500 text-gold-400 bg-gold-900/10' 
                : 'border-carbon-700 text-silver-400 hover:border-gold-500/50 hover:text-silver-200'
            }`}
           
          >
            All
          </Link>
          {categories.map(cat => (
            <Link
              key={cat}
              href={`/collections?category=${cat}`}
              className={`px-5 py-2 text-xs uppercase tracking-[0.15em] border transition-colors ${
                currentCategory === cat 
                  ? 'border-gold-500 text-gold-400 bg-gold-900/10' 
                  : 'border-carbon-700 text-silver-400 hover:border-gold-500/50 hover:text-silver-200'
              }`}
             
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
