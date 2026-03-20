const PILLARS = [
  {
    icon: '🌱',
    title: 'Native Plant Ecosystems',
    body: 'We specify regionally-native species that support local pollinators, reduce irrigation needs by up to 70%, and restore biodiversity corridors in residential and commercial settings.',
  },
  {
    icon: '💧',
    title: 'Water-Smart Design',
    body: 'Every project incorporates rain gardens, bioswales, and permeable paving to reduce stormwater runoff, replenish aquifers, and slash irrigation costs.',
  },
  {
    icon: '♻️',
    title: 'Circular Materials',
    body: 'We source reclaimed stone, FSC-certified timber, and recycled aggregates — tracking embodied carbon from quarry to site and publishing the numbers on every project.',
  },
  {
    icon: '☀️',
    title: 'Carbon-Neutral Maintenance',
    body: 'Our maintenance fleet runs on electric vehicles. All clippings are composted on-site and returned as mulch, closing the nutrient loop completely.',
  },
]

const CERTIFICATIONS = [
  { name: 'LEED Certified', desc: 'Green building leadership' },
  { name: 'PLANET Member', desc: 'Landscape industry ethics' },
  { name: 'EarthCheck Gold', desc: 'Environmental benchmarking' },
  { name: 'B Corp Aligned', desc: 'Business for good principles' },
]

export default function SustainabilitySection() {
  return (
    <section
      id="sustainability-commitment"
      aria-labelledby="sustain-heading"
      className="relative overflow-hidden"
    >
      {/* Background stripe */}
      <div className="absolute inset-0 bg-forest-700" aria-hidden="true">
        {/* Organic blob shapes */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-forest-600/50" />
        <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-forest-800/60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-sage-400/5" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 section-padding">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="inline-flex items-center gap-2 text-sage-400 text-sm font-semibold tracking-[0.15em] uppercase mb-4">
            <span className="w-8 h-px bg-sage-400" aria-hidden="true" />
            Our Commitment
          </p>
          <h2
            id="sustain-heading"
            className="font-display font-light text-offwhite mb-5"
            style={{ fontSize: 'var(--font-size-fluid-4xl)' }}
          >
            Landscapes Built{' '}
            <em className="not-italic text-sage-400">for the Planet</em>
          </h2>
          <p className="text-stone-300 leading-relaxed" style={{ fontSize: 'var(--font-size-fluid-lg)' }}>
            Sustainability isn't a checkbox — it's the foundation of every decision we make,
            from species selection to the fuel in our maintenance vehicles.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="glass rounded-2xl p-6 space-y-3 hover:bg-white/12 transition-colors duration-300"
            >
              <span className="text-4xl" role="img" aria-label={pillar.title}>
                {pillar.icon}
              </span>
              <h3 className="font-display text-offwhite text-lg font-normal leading-tight">
                {pillar.title}
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>

        {/* Metric bar */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden"
          aria-label="Sustainability metrics"
        >
          {[
            { value: '70%', label: 'Less irrigation water used' },
            { value: '100%', label: 'Electric maintenance fleet' },
            { value: '12K+', label: 'Native trees planted' },
            { value: '0 net', label: 'Carbon emissions per project' },
          ].map(({ value, label }) => (
            <div key={label} className="bg-forest-800/60 px-6 py-8 text-center">
              <p
                className="font-display font-light text-sage-400 mb-1"
                style={{ fontSize: 'var(--font-size-fluid-3xl)' }}
              >
                {value}
              </p>
              <p className="text-stone-400 text-xs font-medium tracking-wide uppercase">{label}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 flex flex-wrap gap-3 items-center" aria-label="Certifications and memberships">
          <span className="text-stone-400 text-sm font-medium mr-2">Certified by:</span>
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5"
              title={cert.desc}
            >
              <span className="w-2 h-2 rounded-full bg-sage-400 shrink-0" aria-hidden="true" />
              <span className="text-offwhite text-xs font-semibold">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
