import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-carbon-950 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p
          className="text-8xl font-light text-carbon-600 mb-6"
         
        >
          404
        </p>
        <h1
          className="text-2xl font-light text-silver-100 tracking-wide mb-4"
         
        >
          Page Not Found
        </h1>
        <p
          className="text-sm text-silver-500 leading-relaxed mb-8"
         
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/collections"
            className="border border-gold-500 bg-gold-500 px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-carbon-950 transition-all duration-500 hover:bg-gold-400"
           
          >
            Browse Collections
          </Link>
          <Link
            href="/"
            className="border border-carbon-600 px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-silver-400 transition-all duration-500 hover:border-silver-400 hover:text-silver-100"
           
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
