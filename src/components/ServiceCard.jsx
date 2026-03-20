import { Link } from 'react-router-dom'

/**
 * ServiceCard — displays a single landscape service with hover effects.
 *
 * Props:
 *   icon      JSX element
 *   title     string
 *   excerpt   string
 *   image     string (URL)
 *   to        string (route)
 *   features  string[]
 *   tag       string  optional badge text
 */
export default function ServiceCard({ icon, title, excerpt, image, to, features = [], tag }) {
  return (
    <article className="group relative bg-offwhite rounded-3xl overflow-hidden shadow-card hover:shadow-nature transition-all duration-500 hover:-translate-y-1.5 flex flex-col">
      {/* Image area */}
      <div className="relative overflow-hidden h-52 sm:h-56 shrink-0" aria-hidden="true">
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        {/* Green scrim on hover */}
        <div className="absolute inset-0 bg-forest-700/0 group-hover:bg-forest-700/30 transition-colors duration-500" />

        {/* Optional tag badge */}
        {tag && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-terra-400 text-stone-900 text-xs font-semibold tracking-wide rounded-full">
            {tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 lg:p-7">
        {/* Icon + title */}
        <div className="flex items-start gap-4 mb-3">
          <span
            className="shrink-0 w-11 h-11 rounded-2xl bg-forest-700/8 flex items-center justify-center text-forest-700 group-hover:bg-forest-700 group-hover:text-sage-400 transition-all duration-300"
            aria-hidden="true"
          >
            {icon}
          </span>
          <h3
            className="font-display font-normal text-forest-800 leading-snug mt-1"
            style={{ fontSize: 'var(--font-size-fluid-xl)' }}
          >
            {title}
          </h3>
        </div>

        <p className="text-stone-500 text-sm leading-relaxed mb-5">{excerpt}</p>

        {/* Feature list */}
        {features.length > 0 && (
          <ul className="space-y-2 mb-6" aria-label={`${title} features`}>
            {features.map((feat) => (
              <li key={feat} className="flex items-center gap-2.5 text-sm text-stone-600">
                <span className="w-1.5 h-1.5 rounded-full bg-sage-400 shrink-0" aria-hidden="true" />
                {feat}
              </li>
            ))}
          </ul>
        )}

        {/* CTA link — pushed to bottom */}
        <Link
          to={to}
          className="mt-auto inline-flex items-center gap-1.5 text-forest-700 text-sm font-semibold hover:gap-3 transition-all duration-200 group/link"
          aria-label={`Learn more about our ${title} service`}
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform"
            aria-hidden="true"
          >
            <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.25a.75.75 0 0 1 0 1.06l-4.5 4.25a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
