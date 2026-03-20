import { lazy, Suspense } from 'react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import SustainabilitySection from '../components/SustainabilitySection'
import { Link } from 'react-router-dom'

// Lazy-load portfolio gallery (image-heavy)
const PortfolioGallery = lazy(() => import('../components/PortfolioGallery'))

const SERVICES = [
  {
    icon: <PencilIcon />,
    title: 'Landscape Design',
    excerpt: 'From initial concept sketches to detailed planting plans and 3D visualisations — we craft spaces that balance beauty with ecology.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=75&auto=format&fit=crop',
    to: '/services#design',
    features: ['Concept development', '3D visualisation', 'Native planting plans', 'Permaculture principles'],
    tag: 'Most Popular',
  },
  {
    icon: <BrickIcon />,
    title: 'Hardscaping',
    excerpt: 'Natural stone patios, retaining walls, water features, and permeable driveways that stand the test of time.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=75&auto=format&fit=crop',
    to: '/services#hardscaping',
    features: ['Natural stone & reclaimed materials', 'Permeable paving', 'Retaining walls', 'Outdoor kitchens'],
  },
  {
    icon: <SproutIcon />,
    title: 'Maintenance',
    excerpt: 'Our seasonal programs keep your landscape thriving year-round with electric vehicles and zero-waste composting.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=700&q=75&auto=format&fit=crop',
    to: '/services#maintenance',
    features: ['Seasonal care programs', 'Organic pest management', 'Electric fleet', 'On-site composting'],
  },
]

const TESTIMONIALS = [
  {
    quote: "TerraForma completely transformed our backyard into a living sanctuary. The native plant palette reduced our water bill by 60% in the first summer.",
    author: 'Sarah M.',
    role: 'Eco-Conscious Homeowner, Lake Oswego OR',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&auto=format&fit=crop',
  },
  {
    quote: "As a commercial property manager overseeing 12 sites, TerraForma's maintenance programs and sustainability reporting have been invaluable for our ESG commitments.",
    author: 'James K.',
    role: 'Commercial Property Manager, Portland OR',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&auto=format&fit=crop',
  },
  {
    quote: "The before-and-after transformation was stunning. Our HOA saw a 35% increase in resident satisfaction scores after the courtyard redesign.",
    author: 'Linda P.',
    role: 'HOA Board President, Beaverton OR',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80&auto=format&fit=crop',
  },
]

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Hero */}
      <Hero />

      {/* Services Overview */}
      <section
        id="services-overview"
        aria-labelledby="services-heading"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 section-padding"
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="inline-flex items-center gap-2 text-terra-500 text-sm font-semibold tracking-[0.15em] uppercase mb-4">
            <span className="w-8 h-px bg-terra-400" aria-hidden="true" />
            What We Do
          </p>
          <h2
            id="services-heading"
            className="font-display font-light text-forest-900 mb-4"
            style={{ fontSize: 'var(--font-size-fluid-4xl)' }}
          >
            Landscapes Crafted With Intention
          </h2>
          <p className="text-stone-500 leading-relaxed">
            Every project begins with your vision and ends with a living ecosystem that gives back to the land.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((svc) => (
            <ServiceCard key={svc.title} {...svc} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-forest-700 text-forest-700 font-semibold hover:bg-forest-700 hover:text-offwhite transition-all duration-200"
            aria-label="View all landscape services"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Sustainability section */}
      <SustainabilitySection />

      {/* Portfolio preview */}
      <section
        aria-labelledby="portfolio-preview-heading"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 section-padding"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="inline-flex items-center gap-2 text-terra-500 text-sm font-semibold tracking-[0.15em] uppercase mb-3">
              <span className="w-8 h-px bg-terra-400" aria-hidden="true" />
              Our Work
            </p>
            <h2
              id="portfolio-preview-heading"
              className="font-display font-light text-forest-900"
              style={{ fontSize: 'var(--font-size-fluid-4xl)' }}
            >
              Recent Projects
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="shrink-0 text-forest-700 font-semibold text-sm flex items-center gap-1.5 hover:gap-3 transition-all"
            aria-label="View full portfolio gallery"
          >
            Full Gallery →
          </Link>
        </div>

        <Suspense
          fallback={
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              aria-busy="true"
              aria-label="Loading portfolio gallery"
            >
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-64 rounded-3xl bg-stone-100 animate-pulse" aria-hidden="true" />
              ))}
            </div>
          }
        >
          <PortfolioGallery limit={3} />
        </Suspense>
      </section>

      {/* Testimonials */}
      <section
        className="bg-forest-50 section-padding"
        aria-labelledby="testimonials-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="testimonials-heading"
            className="font-display font-light text-forest-900 text-center mb-12"
            style={{ fontSize: 'var(--font-size-fluid-3xl)' }}
          >
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ quote, author, role, avatar }) => (
              <figure
                key={author}
                className="bg-white rounded-3xl p-7 shadow-card flex flex-col gap-5"
              >
                <blockquote className="text-stone-600 text-sm leading-relaxed italic flex-1">
                  "{quote}"
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <img
                    src={avatar}
                    alt={`${author} — client testimonial`}
                    loading="lazy"
                    decoding="async"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-forest-800 text-sm">{author}</p>
                    <p className="text-stone-400 text-xs">{role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function PencilIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
      <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
    </svg>
  )
}

function BrickIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path fillRule="evenodd" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v3.879a2.5 2.5 0 0 0 .732 1.767l7.5 7.5a2.5 2.5 0 0 0 3.536 0l3.878-3.878a2.5 2.5 0 0 0 0-3.536l-7.5-7.5A2.5 2.5 0 0 0 8.38 2H4.5ZM6 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clipRule="evenodd" />
    </svg>
  )
}

function SproutIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M17 8C8 10 5.9 16.17 3.82 21h1.89c.5-1.19 1.18-2.35 2.17-3.5C9.19 17.05 12 17.5 15 17c5-1 6-4 6-8V3C19 4 18.5 6 17 8Z" />
    </svg>
  )
}
