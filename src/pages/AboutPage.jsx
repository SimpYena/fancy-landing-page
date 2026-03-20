import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Hero */}
      <section className="relative bg-forest-900 section-padding pt-40 pb-24" aria-labelledby="about-heading">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=60&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/90 to-forest-900" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-w-3xl">
          <p className="inline-flex items-center gap-2 text-sage-400 text-sm font-semibold tracking-[0.15em] uppercase mb-5">
            Our Story
          </p>
          <h1
            id="about-heading"
            className="font-display font-light text-offwhite mb-6"
            style={{ fontSize: 'var(--font-size-fluid-5xl)' }}
          >
            Rooted in the Pacific Northwest Since 2007
          </h1>
          <p
            className="text-stone-300 leading-relaxed"
            style={{ fontSize: 'var(--font-size-fluid-lg)' }}
          >
            TerraForma was born from a simple belief: that functional beauty and ecological integrity are never in conflict — they're inseparable.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display font-light text-forest-900" style={{ fontSize: 'var(--font-size-fluid-3xl)' }}>
              Why We Do This
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Founder <strong>Elena Vasquez</strong>, a licensed landscape architect and certified ecological
              designer, started TerraForma after a decade in conventional landscaping left her frustrated
              with high-maintenance monocultures and unsustainable practices.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Today our 30-person team includes landscape architects, horticulturalists, stone masons, and
              ecologists — all united by a commitment to creating spaces that are alive in every sense.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-forest-700 text-offwhite font-medium text-sm hover:bg-forest-600 transition-colors"
              aria-label="Work with TerraForma Landscapes"
            >
              Work With Us
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop"
              alt="TerraForma team working on a native garden design"
              loading="lazy"
              decoding="async"
              className="rounded-3xl shadow-hero w-full object-cover h-80 lg:h-96"
            />
            <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-3xl bg-terra-400/20 border border-terra-400/30" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-forest-50 section-padding" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="values-heading"
            className="font-display font-light text-forest-900 text-center mb-12"
            style={{ fontSize: 'var(--font-size-fluid-3xl)' }}
          >
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Ecological Integrity', icon: '🌿', body: 'Every design decision is filtered through the question: does this make the land healthier?' },
              { title: 'Client Partnership', icon: '🤝', body: 'We listen deeply. Your vision guides our creativity — we merely translate it into growing form.' },
              { title: 'Honest Craft', icon: '🪨', body: 'Quality materials, skilled labour, and no shortcuts. Work that outlasts trends and fashions.' },
              { title: 'Community Roots', icon: '🌱', body: 'We hire locally, support regional nurseries, and donate 1% of revenue to urban forestry.' },
              { title: 'Measurable Impact', icon: '📊', body: 'We quantify the environmental benefits of every project — carbon, water, and biodiversity.' },
              { title: 'Lifelong Learning', icon: '📚', body: 'Ecology evolves. Our team maintains certifications and attends conferences to stay at the frontier.' },
            ].map(({ title, icon, body }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-card space-y-3">
                <span className="text-3xl" role="img" aria-label={title}>{icon}</span>
                <h3 className="font-display text-lg text-forest-800">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
