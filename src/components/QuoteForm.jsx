import { useState } from 'react'

const SERVICE_OPTIONS = [
  'Landscape Design',
  'Hardscaping & Patios',
  'Maintenance Programs',
  'Sustainability Consulting',
  'Water Features',
  'Native Plant Restoration',
]

const PROPERTY_TYPES = [
  { value: 'residential', label: 'Residential Home' },
  { value: 'commercial', label: 'Commercial Property' },
  { value: 'multifamily', label: 'Multi-Family / HOA' },
  { value: 'municipal', label: 'Municipal / Public Space' },
]

const BUDGET_RANGES = [
  'Under $10,000',
  '$10,000 – $30,000',
  '$30,000 – $75,000',
  '$75,000 – $200,000',
  '$200,000+',
]

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  propertyType: '',
  services: [],
  budget: '',
  address: '',
  message: '',
  consent: false,
}

export default function QuoteForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [step, setStep] = useState(1) // 1: contact, 2: project, 3: confirm
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const update = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const toggleService = (svc) =>
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(svc)
        ? prev.services.filter((s) => s !== svc)
        : [...prev.services, svc],
    }))

  const validateStep1 = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required'
    if (!form.lastName.trim())  e.lastName  = 'Last name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const validateStep2 = () => {
    const e = {}
    if (!form.propertyType) e.propertyType = 'Please select a property type'
    if (form.services.length === 0) e.services = 'Please select at least one service'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleNext = () => {
    if (step === 1 && !validateStep1()) return
    if (step === 2 && !validateStep2()) return
    setStep((s) => s + 1)
    setErrors({})
  }

  const handleBack = () => {
    setStep((s) => s - 1)
    setErrors({})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.consent) {
      setErrors({ consent: 'You must agree to be contacted' })
      return
    }
    // In production: POST to API endpoint
    console.log('Quote request submitted:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-4" role="status" aria-live="polite">
        <div className="w-16 h-16 rounded-full bg-sage-400/20 flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-sage-500" aria-hidden="true">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="font-display text-3xl text-forest-800 mb-3">Thank You, {form.firstName}!</h3>
        <p className="text-stone-500 max-w-md mx-auto">
          We've received your request and our team will reach out within <strong>1 business day</strong> to schedule your complimentary consultation.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Landscape design quote request form"
      className="space-y-8"
    >
      {/* Progress bar */}
      <div className="flex items-center gap-3" aria-label={`Step ${step} of 3`} role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={3}>
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-3 flex-1">
            <div className={[
              'w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 transition-all duration-300',
              s < step  ? 'bg-forest-700 text-offwhite'  :
              s === step ? 'bg-terra-400 text-stone-900 ring-4 ring-terra-400/30' :
                          'bg-stone-200 text-stone-400',
            ].join(' ')}>
              {s < step ? '✓' : s}
            </div>
            <span className={`text-xs font-medium hidden sm:block ${s === step ? 'text-forest-700' : 'text-stone-400'}`}>
              {s === 1 ? 'Contact Info' : s === 2 ? 'Project Details' : 'Confirm & Submit'}
            </span>
            {s < 3 && <div className={`flex-1 h-px transition-colors duration-300 ${s < step ? 'bg-forest-700' : 'bg-stone-200'}`} aria-hidden="true" />}
          </div>
        ))}
      </div>

      {/* ── Step 1: Contact Info ── */}
      {step === 1 && (
        <fieldset className="space-y-5">
          <legend className="font-display text-2xl text-forest-800 mb-6">Tell us about yourself</legend>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="First Name" id="firstName" required error={errors.firstName}>
              <input
                id="firstName" type="text" autoComplete="given-name" required
                value={form.firstName} onChange={(e) => update('firstName', e.target.value)}
                className={inputCls(errors.firstName)}
                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
              />
            </Field>
            <Field label="Last Name" id="lastName" required error={errors.lastName}>
              <input
                id="lastName" type="text" autoComplete="family-name" required
                value={form.lastName} onChange={(e) => update('lastName', e.target.value)}
                className={inputCls(errors.lastName)}
                aria-describedby={errors.lastName ? 'lastName-error' : undefined}
              />
            </Field>
          </div>

          <Field label="Email Address" id="email" required error={errors.email}>
            <input
              id="email" type="email" autoComplete="email" required
              value={form.email} onChange={(e) => update('email', e.target.value)}
              className={inputCls(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
          </Field>

          <Field label="Phone Number" id="phone">
            <input
              id="phone" type="tel" autoComplete="tel"
              value={form.phone} onChange={(e) => update('phone', e.target.value)}
              className={inputCls()}
              placeholder="(555) 000-0000"
            />
          </Field>

          <Field label="Project Address" id="address">
            <input
              id="address" type="text" autoComplete="street-address"
              value={form.address} onChange={(e) => update('address', e.target.value)}
              className={inputCls()}
              placeholder="Street address, city, state"
            />
          </Field>
        </fieldset>
      )}

      {/* ── Step 2: Project Details ── */}
      {step === 2 && (
        <fieldset className="space-y-6">
          <legend className="font-display text-2xl text-forest-800 mb-6">Tell us about your project</legend>

          {/* Property type */}
          <div role="group" aria-labelledby="propertyType-label">
            <p id="propertyType-label" className="text-sm font-semibold text-stone-700 mb-3">
              Property Type <span aria-hidden="true" className="text-terra-500">*</span>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {PROPERTY_TYPES.map(({ value, label }) => (
                <label
                  key={value}
                  className={[
                    'flex flex-col items-center gap-1 p-3 rounded-xl border cursor-pointer text-center text-xs font-medium transition-all duration-200',
                    form.propertyType === value
                      ? 'border-forest-700 bg-forest-700/8 text-forest-800'
                      : 'border-stone-200 bg-white text-stone-600 hover:border-sage-400',
                  ].join(' ')}
                >
                  <input
                    type="radio" name="propertyType" value={value}
                    checked={form.propertyType === value}
                    onChange={() => update('propertyType', value)}
                    className="sr-only"
                  />
                  {label}
                </label>
              ))}
            </div>
            {errors.propertyType && <p className="mt-2 text-xs text-red-600" role="alert">{errors.propertyType}</p>}
          </div>

          {/* Services */}
          <div role="group" aria-labelledby="services-label">
            <p id="services-label" className="text-sm font-semibold text-stone-700 mb-3">
              Services Interested In <span aria-hidden="true" className="text-terra-500">*</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SERVICE_OPTIONS.map((svc) => (
                <label
                  key={svc}
                  className={[
                    'flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer text-sm transition-all duration-200',
                    form.services.includes(svc)
                      ? 'border-forest-700 bg-forest-700/8 text-forest-800'
                      : 'border-stone-200 bg-white text-stone-600 hover:border-sage-400',
                  ].join(' ')}
                >
                  <input
                    type="checkbox" value={svc}
                    checked={form.services.includes(svc)}
                    onChange={() => toggleService(svc)}
                    className="w-4 h-4 accent-forest-700 rounded"
                  />
                  {svc}
                </label>
              ))}
            </div>
            {errors.services && <p className="mt-2 text-xs text-red-600" role="alert">{errors.services}</p>}
          </div>

          {/* Budget */}
          <Field label="Approximate Budget" id="budget">
            <select
              id="budget"
              value={form.budget}
              onChange={(e) => update('budget', e.target.value)}
              className={inputCls()}
              aria-label="Select your approximate project budget"
            >
              <option value="">Select a range…</option>
              {BUDGET_RANGES.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </Field>

          {/* Message */}
          <Field label="Tell us more about your vision" id="message">
            <textarea
              id="message" rows={4}
              value={form.message} onChange={(e) => update('message', e.target.value)}
              className={`${inputCls()} resize-none`}
              placeholder="Describe your property, goals, timeline, or anything that helps us understand your project…"
            />
          </Field>
        </fieldset>
      )}

      {/* ── Step 3: Confirm ── */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h3 className="font-display text-2xl text-forest-800 mb-6">Review your request</h3>
          </div>

          {/* Summary card */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 space-y-3 text-sm">
            {[
              ['Name', `${form.firstName} ${form.lastName}`],
              ['Email', form.email],
              ['Phone', form.phone || '—'],
              ['Address', form.address || '—'],
              ['Property Type', PROPERTY_TYPES.find((t) => t.value === form.propertyType)?.label || '—'],
              ['Services', form.services.join(', ') || '—'],
              ['Budget', form.budget || '—'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-4">
                <span className="text-stone-400 font-medium w-32 shrink-0">{label}</span>
                <span className="text-stone-700">{value}</span>
              </div>
            ))}
          </div>

          {/* Consent */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => update('consent', e.target.checked)}
              className="mt-0.5 w-4 h-4 accent-forest-700 rounded"
              aria-required="true"
            />
            <span className="text-sm text-stone-600 leading-relaxed">
              I agree to be contacted by TerraForma Landscapes via email or phone regarding my project request.
              I understand I can opt out at any time. See our{' '}
              <a href="/privacy" className="text-forest-700 underline underline-offset-2 hover:text-forest-600">
                Privacy Policy
              </a>.
            </span>
          </label>
          {errors.consent && <p className="text-xs text-red-600" role="alert">{errors.consent}</p>}
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex gap-3 pt-2">
        {step > 1 && (
          <button
            type="button"
            onClick={handleBack}
            className="px-6 py-3 rounded-full border border-stone-300 text-stone-700 text-sm font-medium hover:bg-stone-100 transition-colors"
          >
            ← Back
          </button>
        )}
        {step < 3 ? (
          <button
            type="button"
            onClick={handleNext}
            className="ml-auto px-8 py-3 rounded-full bg-forest-700 text-offwhite text-sm font-semibold hover:bg-forest-600 active:scale-95 transition-all"
          >
            Continue →
          </button>
        ) : (
          <button
            type="submit"
            className="ml-auto px-8 py-3 rounded-full bg-terra-400 text-stone-900 text-sm font-semibold hover:bg-terra-300 active:scale-95 transition-all shadow-sm"
          >
            Submit Request
          </button>
        )}
      </div>
    </form>
  )
}

/** Shared input class helper */
function inputCls(hasError) {
  return [
    'w-full px-4 py-3 rounded-xl border bg-white text-stone-800 text-sm',
    'focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all',
    hasError ? 'border-red-400' : 'border-stone-200 hover:border-stone-300',
  ].join(' ')
}

/** Form field wrapper with label and error */
function Field({ label, id, required, error, children }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-stone-700 flex items-center gap-1">
        {label}
        {required && <span aria-hidden="true" className="text-terra-500">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
