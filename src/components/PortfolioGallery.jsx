import { useState } from 'react'
import BeforeAfterSlider from './BeforeAfterSlider'

/** Portfolio items – in production these would come from a CMS/API */
const PROJECTS = [
  {
    id: 1,
    title: 'Hillside Terrace Garden',
    category: 'Residential Design',
    tags: ['Biophilic', 'Native Plants'],
    before: { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=75&auto=format&fit=crop', alt: 'Barren hillside before renovation' },
    after:  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=75&auto=format&fit=crop', alt: 'Lush terrace garden after renovation' },
    span: 'col-span-1 row-span-2',
    hasSlider: true,
  },
  {
    id: 2,
    title: 'Corporate EcoRoof',
    category: 'Commercial',
    tags: ['Rooftop', 'Sustainability'],
    before: { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=75&auto=format&fit=crop', alt: 'Empty concrete rooftop before' },
    after:  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=75&auto=format&fit=crop', alt: 'Green rooftop garden after' },
    span: 'col-span-1',
    hasSlider: false,
  },
  {
    id: 3,
    title: 'Zen Water Garden',
    category: 'Hardscaping',
    tags: ['Water Feature', 'Zen'],
    before: { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=75&auto=format&fit=crop', alt: 'Empty backyard space before transformation' },
    after:  { src: 'https://images.unsplash.com/photo-1603912699214-92627f304eb6?w=900&q=75&auto=format&fit=crop', alt: 'Peaceful zen water garden after' },
    span: 'col-span-1',
    hasSlider: false,
  },
  {
    id: 4,
    title: 'Native Prairie Restoration',
    category: 'Sustainability',
    tags: ['Native Plants', 'Eco-System'],
    before: { src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=75&auto=format&fit=crop', alt: 'Degraded lawn before native plant restoration' },
    after:  { src: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=900&q=75&auto=format&fit=crop', alt: 'Thriving native prairie meadow after restoration' },
    span: 'col-span-1 row-span-2',
    hasSlider: true,
  },
  {
    id: 5,
    title: 'Urban Courtyard',
    category: 'Residential Design',
    tags: ['Urban', 'Hardscaping'],
    before: { src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&q=75&auto=format&fit=crop', alt: 'Plain concrete courtyard before' },
    after:  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=75&auto=format&fit=crop', alt: 'Beautifully landscaped courtyard after' },
    span: 'col-span-1',
    hasSlider: false,
  },
]

const CATEGORIES = ['All', 'Residential Design', 'Commercial', 'Hardscaping', 'Sustainability']

export default function PortfolioGallery({ limit }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeSlider, setActiveSlider] = useState(null)

  const filtered = PROJECTS
    .filter((p) => activeCategory === 'All' || p.category === activeCategory)
    .slice(0, limit || PROJECTS.length)

  return (
    <section aria-labelledby="portfolio-heading" className="space-y-10">
      {/* Filter tabs */}
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter portfolio by category"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
            className={[
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              activeCategory === cat
                ? 'bg-forest-700 text-offwhite shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200',
            ].join(' ')}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-style asymmetric grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto"
        aria-label="Portfolio project gallery"
      >
        {filtered.map((project) => (
          <article
            key={project.id}
            className={`${project.span} group relative overflow-hidden rounded-3xl shadow-card hover:shadow-nature transition-all duration-500`}
          >
            {/* If slider view is active for this card */}
            {activeSlider === project.id && project.hasSlider ? (
              <div className="relative">
                <BeforeAfterSlider
                  before={project.before}
                  after={project.after}
                  label={`Before and after: ${project.title}`}
                />
                <button
                  type="button"
                  onClick={() => setActiveSlider(null)}
                  className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-forest-900/80 text-offwhite flex items-center justify-center hover:bg-forest-900 transition-colors"
                  aria-label="Close comparison slider"
                >
                  ✕
                </button>
              </div>
            ) : (
              <>
                <img
                  src={project.after.src}
                  alt={project.after.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full min-h-[240px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-sage-400/25 text-sage-300 text-xs rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-offwhite font-light text-xl mb-1">{project.title}</h3>
                    <p className="text-stone-300 text-xs mb-3">{project.category}</p>
                    {project.hasSlider && (
                      <button
                        type="button"
                        onClick={() => setActiveSlider(project.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-terra-400 text-stone-900 text-xs font-semibold rounded-full hover:bg-terra-300 transition-colors"
                        aria-label={`View before and after comparison for ${project.title}`}
                      >
                        <span aria-hidden="true">⟷</span> Before &amp; After
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
