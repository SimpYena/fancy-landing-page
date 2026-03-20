import QuoteForm from '../components/QuoteForm'

export default function QuotePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <div className="min-h-screen bg-gradient-to-br from-forest-50 via-offwhite to-sage-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-20 items-start">

            {/* Left column — value props */}
            <aside className="lg:col-span-2 space-y-8" aria-label="Why choose TerraForma">
              <div>
                <p className="inline-flex items-center gap-2 text-terra-500 text-sm font-semibold tracking-[0.15em] uppercase mb-4">
                  Free Consultation
                </p>
                <h1
                  className="font-display font-light text-forest-900 leading-snug"
                  style={{ fontSize: 'var(--font-size-fluid-4xl)' }}
                >
                  Let's Design Something Extraordinary
                </h1>
              </div>

              <p className="text-stone-500 leading-relaxed">
                Tell us about your project and we'll respond within 1 business day to schedule your
                free, no-obligation discovery consultation.
              </p>

              <ul className="space-y-4" aria-label="Consultation benefits">
                {[
                  { icon: '✓', text: 'Free 30-minute site visit & assessment' },
                  { icon: '✓', text: 'Concept sketches included at no cost' },
                  { icon: '✓', text: 'Transparent, itemised quote — no hidden fees' },
                  { icon: '✓', text: 'Flexible scheduling including evenings' },
                ].map(({ icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-stone-600">
                    <span className="w-5 h-5 rounded-full bg-sage-400/20 text-sage-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5" aria-hidden="true">
                      {icon}
                    </span>
                    {text}
                  </li>
                ))}
              </ul>

              {/* Testimonial snippet */}
              <figure className="border-l-2 border-sage-400 pl-5 py-1">
                <blockquote className="text-sm text-stone-600 italic leading-relaxed">
                  "The quote process was painless and the team showed up exactly when they said they would."
                </blockquote>
                <figcaption className="mt-2 text-xs text-stone-400 font-medium">
                  — David R., Portland OR
                </figcaption>
              </figure>

              {/* Contact alternative */}
              <div className="pt-4 border-t border-stone-200">
                <p className="text-xs text-stone-400 mb-3 uppercase tracking-wide font-medium">Prefer to call?</p>
                <a
                  href="tel:+15550000000"
                  className="text-forest-700 font-semibold hover:text-forest-600 transition-colors"
                  aria-label="Call TerraForma Landscapes"
                >
                  (555) TERRA-00
                </a>
              </div>
            </aside>

            {/* Right column — quote form */}
            <div
              className="lg:col-span-3 bg-white rounded-3xl shadow-card p-8 sm:p-10"
              aria-label="Quote request form container"
            >
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
