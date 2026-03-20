import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'

const PortfolioGallery = lazy(() => import('../components/PortfolioGallery'))

export default function PortfolioPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Page hero */}
      <section className="relative bg-forest-900 section-padding pt-40 pb-20" aria-labelledby="portfolio-page-heading">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1603912699214-92627f304eb6?w=1600&q=60&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/90 to-forest-900" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-flex items-center gap-2 text-sage-400 text-sm font-semibold tracking-[0.15em] uppercase mb-5">
            Our Portfolio
          </p>
          <h1
            id="portfolio-page-heading"
            className="font-display font-light text-offwhite mb-5"
            style={{ fontSize: 'var(--font-size-fluid-5xl)' }}
          >
            350+ Transformations &amp; Counting
          </h1>
          <p className="text-stone-300 max-w-xl mx-auto" style={{ fontSize: 'var(--font-size-fluid-lg)' }}>
            Browse our project gallery and use the Before &amp; After sliders to see the full transformation.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 section-padding"
        aria-labelledby="gallery-heading"
      >
        <h2 id="gallery-heading" className="sr-only">Portfolio project gallery</h2>
        <Suspense
          fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" aria-busy="true" aria-label="Loading portfolio gallery">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 rounded-3xl bg-stone-100 animate-pulse" aria-hidden="true" />
              ))}
            </div>
          }
        >
          <PortfolioGallery />
        </Suspense>
      </section>

      {/* CTA */}
      <section className="bg-forest-50 py-20 text-center" aria-label="Start your project">
        <p className="font-display text-forest-900 mb-4" style={{ fontSize: 'var(--font-size-fluid-2xl)' }}>
          Ready to start your own transformation?
        </p>
        <Link
          to="/quote"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest-700 text-offwhite font-semibold hover:bg-forest-600 active:scale-95 transition-all duration-200"
          aria-label="Request a free landscape design quote"
        >
          Request Free Quote
        </Link>
      </section>
    </main>
  )
}
