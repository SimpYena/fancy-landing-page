import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Sustainability', to: '/sustainability' },
  { label: 'About', to: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      role="banner"
      className={[
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-forest-900/97 backdrop-blur-md shadow-nature py-3'
          : 'bg-transparent py-5',
      ].join(' ')}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none"
          aria-label="TerraForma Landscapes — Home"
        >
          <span
            className="w-9 h-9 rounded-full bg-sage-400/20 border border-sage-400/40 flex items-center justify-center group-hover:bg-sage-400/30 transition-colors"
            aria-hidden="true"
          >
            <LeafIcon />
          </span>
          <span className="font-display text-xl text-offwhite tracking-wide">
            Terra<span className="text-sage-400">Forma</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                [
                  'font-sans text-sm font-medium tracking-wide transition-colors duration-200 relative py-1',
                  'after:absolute after:bottom-0 after:left-0 after:h-px after:bg-sage-400',
                  'after:transition-all after:duration-300',
                  isActive
                    ? 'text-sage-400 after:w-full'
                    : 'text-stone-200 hover:text-offwhite after:w-0 hover:after:w-full',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/quote"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-terra-400 text-stone-900 text-sm font-semibold tracking-wide hover:bg-terra-300 active:scale-95 transition-all duration-200 shadow-sm"
          aria-label="Request a free landscape design quote"
        >
          Free Quote
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg hocus:bg-white/10 transition-colors"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className={`block w-5 h-0.5 bg-offwhite transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-offwhite transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-offwhite transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        aria-hidden={!menuOpen}
        className={[
          'md:hidden absolute inset-x-0 top-full overflow-hidden transition-all duration-400',
          'bg-forest-900/98 backdrop-blur-lg border-t border-white/8',
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col px-4 py-6 gap-1">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                [
                  'px-4 py-3 rounded-xl text-base font-medium transition-all duration-200',
                  isActive
                    ? 'text-sage-400 bg-sage-400/10'
                    : 'text-stone-200 hover:text-offwhite hover:bg-white/6',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/quote"
            onClick={() => setMenuOpen(false)}
            className="mt-4 text-center px-5 py-3 rounded-full bg-terra-400 text-stone-900 font-semibold hover:bg-terra-300 transition-colors"
          >
            Request Free Quote
          </Link>
        </nav>
      </div>
    </header>
  )
}

function LeafIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 text-sage-400"
      aria-hidden="true"
    >
      <path d="M17 8C8 10 5.9 16.17 3.82 21h1.89c.5-1.19 1.18-2.35 2.17-3.5C9.19 17.05 12 17.5 15 17c5-1 6-4 6-8V3C19 4 18.5 6 17 8Z" />
    </svg>
  )
}
