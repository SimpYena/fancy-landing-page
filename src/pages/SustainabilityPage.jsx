import SustainabilitySection from '../components/SustainabilitySection'
import { Link } from 'react-router-dom'

const INITIATIVES = [
  {
    year: '2016',
    title: 'Electric Fleet Pilot',
    body: 'Converted our first 3 maintenance vans to electric, reducing annual fuel emissions by 18 tonnes CO₂e.',
  },
  {
    year: '2018',
    title: 'Native Seed Bank',
    body: 'Established a 2-acre native seed production garden, supplying regionally-provenant seed for all restoration projects.',
  },
  {
    year: '2020',
    title: 'B Corp Alignment',
    body: 'Formally adopted B Corp principles across all operations — profit with purpose.',
  },
  {
    year: '2022',
    title: '10,000 Trees',
    body: 'Reached our first milestone of 10,000 native trees planted across client properties and public restoration sites.',
  },
  {
    year: '2024',
    title: 'Carbon-Neutral Operations',
    body: 'Achieved operational carbon neutrality with remaining emissions offset through Blue Carbon coastal restoration.',
  },
  {
    year: '2026',
    title: 'Net Positive Goal',
    body: 'Pursuing net-positive biodiversity: every project we complete must leave measurable ecological gains.',
  },
]

export default function SustainabilityPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Page hero */}
      <section
        className="relative bg-forest-900 section-padding pt-40 pb-24 text-center"
        aria-labelledby="sustainability-page-heading"
      >
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1600&q=60&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/85 to-forest-900" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-sage-400 text-sm font-semibold tracking-[0.15em] uppercase mb-5">
            Our Commitment
          </p>
          <h1
            id="sustainability-page-heading"
            className="font-display font-light text-offwhite mb-6"
            style={{ fontSize: 'var(--font-size-fluid-5xl)' }}
          >
            Land Stewardship <br />
            <em className="not-italic text-sage-400">Is Our Responsibility</em>
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto" style={{ fontSize: 'var(--font-size-fluid-lg)' }}>
            We measure success not just in beautiful spaces, but in tonnes of carbon sequestered,
            gallons of water conserved, and species-counts restored.
          </p>
        </div>
      </section>

      {/* Core commitment section */}
      <SustainabilitySection />

      {/* Timeline of initiatives */}
      <section
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 section-padding"
        aria-labelledby="timeline-heading"
      >
        <h2
          id="timeline-heading"
          className="font-display font-light text-forest-900 text-center mb-14"
          style={{ fontSize: 'var(--font-size-fluid-3xl)' }}
        >
          Our Sustainability Journey
        </h2>
        <ol className="relative border-l-2 border-sage-200 space-y-10 pl-8 max-w-3xl mx-auto" aria-label="Sustainability milestones timeline">
          {INITIATIVES.map(({ year, title, body }) => (
            <li key={year} className="relative">
              <span
                className="absolute -left-[2.65rem] top-1 w-5 h-5 rounded-full bg-sage-400 border-4 border-offwhite shadow-sm"
                aria-hidden="true"
              />
              <time className="text-terra-500 text-xs font-bold tracking-widest uppercase">{year}</time>
              <h3 className="font-display text-xl text-forest-800 mt-1 mb-2">{title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="bg-forest-50 py-20 text-center">
        <p className="font-display text-forest-900 mb-2" style={{ fontSize: 'var(--font-size-fluid-2xl)' }}>
          Want a carbon-neutral landscape?
        </p>
        <p className="text-stone-500 mb-8 max-w-md mx-auto text-sm">
          Ask us about our Sustainability Consulting service — we help you earn LEED credits and track ecological impact.
        </p>
        <Link
          to="/quote"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest-700 text-offwhite font-semibold hover:bg-forest-600 active:scale-95 transition-all duration-200"
          aria-label="Request a sustainability consulting quote"
        >
          Start a Sustainable Project
        </Link>
      </section>
    </main>
  )
}
