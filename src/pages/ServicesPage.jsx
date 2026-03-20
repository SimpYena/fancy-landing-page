import ServiceCard from '../components/ServiceCard'

const SERVICES = [
  {
    id: 'design',
    icon: '✏️',
    title: 'Landscape Design',
    excerpt: 'Full-service landscape architecture from site analysis and conceptual design through to detailed construction documentation.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=75&auto=format&fit=crop',
    to: '/quote',
    features: ['Site analysis & soil assessment', 'Concept & schematic design', '3D renderings & walkthroughs', 'Detailed planting plans', 'Irrigation design', 'Permit documentation'],
    tag: 'Most Popular',
  },
  {
    id: 'hardscaping',
    icon: '🪨',
    title: 'Hardscaping',
    excerpt: 'Timeless stone, concrete, and wood structures that define outdoor rooms and extend your living space.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=75&auto=format&fit=crop',
    to: '/quote',
    features: ['Natural & reclaimed stone patios', 'Retaining walls & terracing', 'Permeable driveways', 'Outdoor kitchens & fire pits', 'Pergolas & shade structures', 'Water features & ponds'],
  },
  {
    id: 'maintenance',
    icon: '🌿',
    title: 'Maintenance Programs',
    excerpt: 'Seasonal care with an ecological mindset — zero synthetic inputs, electric fleet, and on-site composting.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=75&auto=format&fit=crop',
    to: '/quote',
    features: ['Monthly tuning visits', 'Seasonal planting rotations', 'Organic fertilisation', 'Pruning & rejuvenation', 'Weed & pest management', 'Winter preparation'],
  },
  {
    id: 'sustainability',
    icon: '♻️',
    title: 'Sustainability Consulting',
    excerpt: 'We help homeowners and commercial clients earn green certifications and radically reduce landscaping footprints.',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=75&auto=format&fit=crop',
    to: '/quote',
    features: ['LEED landscape credits', 'Native habitat restoration', 'Carbon reporting', 'Rain garden design', 'Green roof systems', 'Biodiversity audits'],
  },
  {
    id: 'water',
    icon: '💧',
    title: 'Water Features',
    excerpt: 'Naturalistic ponds, rill streams, reflection pools and bioswales that enhance both aesthetics and local hydrology.',
    image: 'https://images.unsplash.com/photo-1603912699214-92627f304eb6?w=800&q=75&auto=format&fit=crop',
    to: '/quote',
    features: ['Naturalistic pond design', 'Rill streams & waterfalls', 'Reflection pools', 'Recirculating systems', 'Bioswales & rain gardens', 'Aquatic planting'],
  },
  {
    id: 'commercial',
    icon: '🏢',
    title: 'Commercial Landscapes',
    excerpt: 'Scalable programs for office parks, retail centres, HOAs, and municipal spaces — with full ESG reporting.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=75&auto=format&fit=crop',
    to: '/quote',
    features: ['Multi-site programmes', 'ESG reporting dashboards', 'Public space design', 'Stormwater management', 'Seasonal colour rotations', 'Site masterplanning'],
  },
]

export default function ServicesPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Page hero */}
      <section
        className="relative bg-forest-900 section-padding pt-40"
        aria-labelledby="services-page-heading"
      >
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=60&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/80 to-forest-900" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-flex items-center gap-2 text-sage-400 text-sm font-semibold tracking-[0.15em] uppercase mb-5">
            Our Expertise
          </p>
          <h1
            id="services-page-heading"
            className="font-display font-light text-offwhite mb-5"
            style={{ fontSize: 'var(--font-size-fluid-5xl)' }}
          >
            Full-Spectrum Landscape Services
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto" style={{ fontSize: 'var(--font-size-fluid-lg)' }}>
            From first sketch to ongoing stewardship — every service is guided by sustainable principles
            and a deep love for the Pacific Northwest landscape.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {SERVICES.map((svc) => (
            <div key={svc.id} id={svc.id}>
              <ServiceCard
                icon={<span aria-hidden="true">{svc.icon}</span>}
                title={svc.title}
                excerpt={svc.excerpt}
                image={svc.image}
                to={svc.to}
                features={svc.features}
                tag={svc.tag}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Process section */}
      <section
        className="bg-stone-50 section-padding"
        aria-labelledby="process-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="process-heading"
            className="font-display font-light text-forest-900 text-center mb-14"
            style={{ fontSize: 'var(--font-size-fluid-3xl)' }}
          >
            Our Process
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery Call', body: 'A 30-minute phone call to understand your goals, site, and timeline.' },
              { step: '02', title: 'Site Assessment', body: 'We visit your property for a soil, sun, water, and vision analysis.' },
              { step: '03', title: 'Design & Quote', body: 'We present concept designs and a detailed, itemised quote.' },
              { step: '04', title: 'Build & Handover', body: 'Our team brings the plan to life with transparent progress updates.' },
            ].map(({ step, title, body }) => (
              <li key={step} className="flex flex-col gap-4">
                <span className="font-display text-6xl text-sage-300 leading-none">{step}</span>
                <div>
                  <h3 className="font-display text-xl text-forest-800 mb-2">{title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  )
}
