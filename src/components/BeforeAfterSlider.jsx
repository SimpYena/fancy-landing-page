import { useState, useRef, useCallback, useEffect } from 'react'

/**
 * BeforeAfterSlider — accessible drag-and-touch image comparison slider.
 *
 * Props:
 *   before  { src, alt }
 *   after   { src, alt }
 *   label   string — descriptive label for the section
 */
export default function BeforeAfterSlider({ before, after, label = 'Before and after comparison' }) {
  const [position, setPosition] = useState(50) // percentage
  const containerRef = useRef(null)
  const isDragging = useRef(false)

  const clamp = (v, min, max) => Math.min(Math.max(v, min), max)

  const calcPosition = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const pct = clamp(((clientX - rect.left) / rect.width) * 100, 2, 98)
    setPosition(pct)
  }, [])

  // Mouse events
  const onMouseDown = (e) => {
    isDragging.current = true
    calcPosition(e.clientX)
  }
  useEffect(() => {
    const onMove = (e) => { if (isDragging.current) calcPosition(e.clientX) }
    const onUp = () => { isDragging.current = false }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [calcPosition])

  // Touch events
  const onTouchMove = (e) => {
    e.preventDefault()
    calcPosition(e.touches[0].clientX)
  }

  // Keyboard support
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft')  setPosition((p) => clamp(p - 2, 2, 98))
    if (e.key === 'ArrowRight') setPosition((p) => clamp(p + 2, 2, 98))
  }

  return (
    <figure
      className="relative select-none overflow-hidden rounded-3xl shadow-hero cursor-col-resize"
      ref={containerRef}
      onMouseDown={onMouseDown}
      onTouchMove={onTouchMove}
      onTouchStart={(e) => calcPosition(e.touches[0].clientX)}
      style={{ touchAction: 'none' }}
      aria-label={label}
    >
      {/* After image (full width, underneath) */}
      <img
        src={after.src}
        alt={after.alt}
        loading="lazy"
        decoding="async"
        className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center block pointer-events-none"
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
        aria-hidden="true"
      >
        <img
          src={before.src}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          style={{ minWidth: containerRef.current?.offsetWidth || '100%' }}
        />
      </div>

      {/* Before / After labels */}
      <div className="absolute top-4 left-4 pointer-events-none" aria-hidden="true">
        <span className="px-2.5 py-1 bg-forest-900/70 text-offwhite text-xs font-semibold tracking-wide rounded-full backdrop-blur-sm">
          Before
        </span>
      </div>
      <div className="absolute top-4 right-4 pointer-events-none" aria-hidden="true">
        <span className="px-2.5 py-1 bg-forest-900/70 text-offwhite text-xs font-semibold tracking-wide rounded-full backdrop-blur-sm">
          After
        </span>
      </div>

      {/* Divider handle */}
      <div
        className="absolute top-0 bottom-0 w-px bg-offwhite/80 shadow-sm pointer-events-none"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        {/* Drag handle circle */}
        <button
          type="button"
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-offwhite shadow-hero flex items-center justify-center pointer-events-auto focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:outline-none"
          onKeyDown={onKeyDown}
          aria-label={`Drag to compare before and after. Current position: ${Math.round(position)}%`}
          aria-valuemin={2}
          aria-valuemax={98}
          aria-valuenow={Math.round(position)}
          role="slider"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-forest-700" aria-hidden="true">
            <path fillRule="evenodd" d="M10.21 3.21a.75.75 0 0 1 1.08 0l3.5 3.75a.75.75 0 0 1-1.08 1.04L11 5.458V14.54l2.71-2.54a.75.75 0 1 1 1.08 1.04l-3.5 3.75a.75.75 0 0 1-1.08 0l-3.5-3.75a.75.75 0 1 1 1.08-1.04L10 14.54V5.46L7.29 7.998A.75.75 0 0 1 6.21 6.96l3.5-3.75Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </figure>
  )
}
