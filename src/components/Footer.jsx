import { Link } from 'react-router-dom'

const NAV_GROUPS = [
  {
    heading: 'Services',
    links: [
      { label: 'Landscape Design', to: '/services#design' },
      { label: 'Hardscaping', to: '/services#hardscaping' },
      { label: 'Maintenance', to: '/services#maintenance' },
      { label: 'Sustainability Consulting', to: '/services#sustainability' },
      { label: 'Water Features', to: '/services#water' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Portfolio', to: '/portfolio' },
      { label: 'Sustainability Commitment', to: '/sustainability' },
      { label: 'Careers', to: '/careers' },
      { label: 'Press', to: '/press' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Plant Guide', to: '/resources/plants' },
      { label: 'Design Blog', to: '/blog' },
      { label: 'Care Calendar', to: '/resources/calendar' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Privacy Policy', to: '/privacy' },
    ],
  },
]

const SOCIALS = [
  { name: 'Instagram', href: '#', icon: InstagramIcon },
  { name: 'Pinterest', href: '#', icon: PinterestIcon },
  { name: 'Houzz', href: '#', icon: HouzzIcon },
  { name: 'LinkedIn', href: '#', icon: LinkedInIcon },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="bg-forest-900 text-stone-300"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* CTA strip */}
      <div className="border-b border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div>
            <h2 className="font-display text-offwhite font-light" style={{ fontSize: 'var(--font-size-fluid-2xl)' }}>
              Ready to transform your space?
            </h2>
            <p className="text-stone-400 text-sm mt-1">Free consultations available this month.</p>
          </div>
          <Link
            to="/quote"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-terra-400 text-stone-900 font-semibold hover:bg-terra-300 active:scale-95 transition-all duration-200"
            aria-label="Book your free landscape design consultation"
          >
            Book Free Consultation
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.25a.75.75 0 0 1 0 1.06l-4.5 4.25a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5"
              aria-label="TerraForma Landscapes — Go to homepage"
            >
              <span className="w-9 h-9 rounded-full bg-sage-400/15 border border-sage-400/30 flex items-center justify-center" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-sage-400" aria-hidden="true">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21h1.89c.5-1.19 1.18-2.35 2.17-3.5C9.19 17.05 12 17.5 15 17c5-1 6-4 6-8V3C19 4 18.5 6 17 8Z" />
                </svg>
              </span>
              <span className="font-display text-xl text-offwhite">
                Terra<span className="text-sage-400">Forma</span>
              </span>
            </Link>

            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Award-winning landscape architecture and sustainable garden design,
              rooted in the Pacific Northwest since 2007.
            </p>

            {/* Contact info */}
            <address className="not-italic space-y-2 text-sm text-stone-400">
              <a href="tel:+15550000000" className="flex items-center gap-2 hover:text-sage-400 transition-colors">
                <span aria-hidden="true">📞</span> (555) TERRA-00
              </a>
              <a href="mailto:hello@terraforma-landscapes.com" className="flex items-center gap-2 hover:text-sage-400 transition-colors">
                <span aria-hidden="true">✉️</span> hello@terraforma-landscapes.com
              </a>
              <p className="flex items-start gap-2">
                <span aria-hidden="true">📍</span> 123 Green Valley Drive, Portland, OR 97201
              </p>
            </address>

            {/* Socials */}
            <div className="flex gap-3" aria-label="Social media links">
              {SOCIALS.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={`TerraForma Landscapes on ${name}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-9 h-9 rounded-full bg-white/6 flex items-center justify-center text-stone-400 hover:bg-sage-400/20 hover:text-sage-400 transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation groups */}
          {NAV_GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="text-offwhite font-semibold text-sm uppercase tracking-wider mb-5">
                {group.heading}
              </h3>
              <ul className="space-y-3" aria-label={`${group.heading} navigation`}>
                {group.links.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-stone-400 text-sm hover:text-sage-400 transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© {year} TerraForma Landscapes, LLC. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-sage-400" aria-hidden="true" />
            <span>1% of revenue donated to native reforestation projects.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ── Social Icons ── */
function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  )
}
function PinterestIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0Z" />
    </svg>
  )
}
function HouzzIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M.71 9.14L12 2.57l11.29 6.57V24H14v-7.71H10V24H.71V9.14z" />
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
