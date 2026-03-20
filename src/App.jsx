import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Eagerly load the home page for fast initial paint
import HomePage from './pages/HomePage'

// Lazy-load all other pages — code-split per route
const ServicesPage     = lazy(() => import('./pages/ServicesPage'))
const PortfolioPage    = lazy(() => import('./pages/PortfolioPage'))
const SustainabilityPage = lazy(() => import('./pages/SustainabilityPage'))
const AboutPage        = lazy(() => import('./pages/AboutPage'))
const QuotePage        = lazy(() => import('./pages/QuotePage'))

/** Skip-to-content link for keyboard / screen reader users */
function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-5 focus:py-3 focus:bg-forest-700 focus:text-offwhite focus:rounded-xl focus:font-semibold focus:shadow-lg"
    >
      Skip to main content
    </a>
  )
}

/** Scroll to top on every navigation */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

/** Full-page loading fallback */
function PageLoader() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-offwhite"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-sage-400 border-t-transparent animate-spin" aria-hidden="true" />
        <p className="text-stone-400 text-sm font-medium">Loading…</p>
      </div>
    </div>
  )
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"               element={<HomePage />} />
          <Route path="/services"       element={<ServicesPage />} />
          <Route path="/portfolio"      element={<PortfolioPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/about"          element={<AboutPage />} />
          <Route path="/quote"          element={<QuotePage />} />
          {/* 404 fallback */}
          <Route path="*"              element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="font-display text-8xl text-sage-300 font-light">404</p>
      <h1 className="font-display text-3xl text-forest-900">Page Not Found</h1>
      <p className="text-stone-500 max-w-sm">
        Looks like this path leads into the wild. Let's get you back on the garden path.
      </p>
      <a
        href="/"
        className="px-7 py-3.5 rounded-full bg-forest-700 text-offwhite font-medium hover:bg-forest-600 transition-colors"
      >
        Return Home
      </a>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <SkipToContent />
      <AppRoutes />
    </BrowserRouter>
  )
}
