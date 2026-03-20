import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

// Unsplash high-res landscape images (free to use)
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2000&q=80&auto=format&fit=crop'

const STATS = [
  { value: '350+', label: 'Projects Completed' },
  { value: '18 yrs', label: 'Experience' },
  { value: '4.9★', label: 'Client Rating' },
]

export default function Hero() {
  const headlineRef = useRef(null)

  // Staggered reveal on mount
  useEffect(() => {
    const els = headlineRef.current?.querySelectorAll('[data-reveal]')
    if (!els) return
    els.forEach((el, i) => {
      el.style.animationDelay = `${i * 150}ms`
      el.classList.add('animate-fade-up')
    })
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="TerraForma Landscapes hero — We design living spaces"
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={HERO_IMAGE}
          alt=""
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/85 via-forest-900/60 to-transparent" />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCAwaDF2MUgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvc3ZnPg==')] opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-2xl xl:max-w-3xl" ref={headlineRef}>
          {/* Eyebrow */}
          <p
            data-reveal
            className="opacity-0 inline-flex items-center gap-2 mb-5 text-sage-400 text-sm font-semibold tracking-[0.15em] uppercase"
          >
            <span className="w-8 h-px bg-sage-400" aria-hidden="true" />
            Landscape Architecture Since 2007
          </p>

          {/* Main headline */}
          <h1
            data-reveal
            className="opacity-0 font-display font-light text-offwhite leading-[1.1] mb-6"
            style={{ fontSize: 'var(--font-size-fluid-5xl)' }}
          >
            We Design <br />
            <em className="not-italic text-gradient-forest">Living Spaces</em>
            <br />
            That Breathe
          </h1>

          {/* Sub-headline */}
          <p
            data-reveal
            className="opacity-0 text-stone-300 max-w-lg leading-relaxed mb-10"
            style={{ fontSize: 'var(--font-size-fluid-lg)' }}
          >
            From biophilic rooftop gardens to award-winning residential retreats —
            sustainable design rooted in the Pacific Northwest landscape.
          </p>

          {/* CTA group */}
          <div data-reveal className="opacity-0 flex flex-col xs:flex-row gap-4">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-terra-400 text-stone-900 font-semibold text-base hover:bg-terra-300 active:scale-95 transition-all duration-200 shadow-hero"
              aria-label="Request a free landscape design consultation"
            >
              Start Your Project
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass text-offwhite font-medium text-base hover:bg-white/15 active:scale-95 transition-all duration-200"
              aria-label="View our landscape design portfolio"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Glassmorphism stats card */}
        <div
          className="mt-16 lg:mt-20 inline-grid grid-cols-3 divide-x divide-white/15 glass rounded-2xl overflow-hidden"
          aria-label="Company statistics"
        >
          {STATS.map(({ value, label }) => (
            <div key={label} className="px-6 sm:px-8 py-5 text-center">
              <p className="font-display text-offwhite font-medium" style={{ fontSize: 'var(--font-size-fluid-2xl)' }}>
                {value}
              </p>
              <p className="text-sage-400 text-xs sm:text-sm font-medium tracking-wide mt-0.5">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services-overview"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 hover:text-sage-400 transition-colors group"
        aria-label="Scroll down to services"
      >
        <span className="text-xs tracking-[0.15em] uppercase font-medium">Explore</span>
        <span className="w-px h-10 bg-gradient-to-b from-stone-400 to-transparent group-hover:from-sage-400 transition-colors" aria-hidden="true" />
      </a>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
    </svg>
  )
}
