import { motion } from 'motion/react'
import { CheckCircle2, Mail, MapPin, MessageCircle, X, XCircle } from 'lucide-react'
import { useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { company } from '@/data/site'
import { WhatsAppIcon } from '@/components/WhatsAppButton'

export function Contact() {
  const [submission, setSubmission] = useState<{
    status: 'idle' | 'submitting' | 'success' | 'error'
    message: string
  }>({ status: 'idle', message: '' })
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const source = {
    path: searchParams.get('sourcePath') || (location.pathname === '/' ? '/' : 'Direct visit'),
    type: searchParams.get('sourceType') || (location.pathname === '/' ? 'Homepage' : 'Direct'),
    title: searchParams.get('sourceTitle') || '',
    slug: searchParams.get('sourceSlug') || '',
    cta: searchParams.get('sourceCta') || '',
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formElement = e.currentTarget
    const form = new FormData(formElement)
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null
    const channel = submitter?.value || 'whatsapp'
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const clientCompany = String(form.get('company') || '').trim() || 'Not provided'
    const whatsapp = String(form.get('whatsapp') || '').trim()
    const message = String(form.get('message') || '').trim()
    const consent = form.get('contactConsent') === 'on'

    if (channel === 'whatsapp') {
      setSubmission({ status: 'submitting', message: '' })
      try {
        const apiResponse = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            company: clientCompany,
            whatsapp,
            message,
            consent,
            source: {
              ...source,
              path: source.path.startsWith('/')
                ? `${window.location.origin}${source.path}`
                : source.path,
            },
          }),
        })
        const result = await apiResponse.json().catch(() => ({})) as { error?: string }
        if (!apiResponse.ok) {
          throw new Error(result.error || 'Unable to submit your enquiry.')
        }
        formElement.reset()
        setSubmission({
          status: 'success',
          message: `Thanks, ${name}! Your enquiry has been submitted. Our team will contact you soon.`,
        })
      } catch (error) {
        setSubmission({
          status: 'error',
          message: error instanceof Error
            ? error.message
            : 'Unable to submit your enquiry. Please try again.',
        })
      }
      return
    }

    const sourceUrl = source.path.startsWith('/')
      ? `${window.location.origin}${source.path}`
      : source.path
    const enquiry = [
      'New website enquiry',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${clientCompany}`,
      `WhatsApp: ${whatsapp}`,
      `Requirement: ${message}`,
      '',
      'Lead metadata',
      `Source type: ${source.type}`,
      ...(source.title ? [`Source item: ${source.title}`] : []),
      ...(source.slug ? [`Source slug: ${source.slug}`] : []),
      `Source page: ${sourceUrl}`,
      ...(source.cta ? [`CTA: ${source.cta}`] : []),
    ].join('\n')
    const subjectItem = source.title ? ` - ${source.title}` : ''
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`Website enquiry${subjectItem}`)}&body=${encodeURIComponent(enquiry)}`
  }

  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 px-6 md:px-10 border-t border-ink/5"
    >
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-iris"
          >
            <span className="h-px w-6 bg-iris" />
            Get in touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance text-ink"
          >
            Have a project in mind?{' '}
            <span className="italic font-light accent-text">Let's talk.</span>
          </motion.h2>

          <p className="mt-6 text-muted text-lg max-w-md">
            Tell us what is breaking in your operations, reporting, or delivery flow. We reply within 24 hours.
          </p>

          <div className="mt-12 space-y-5">
            <ContactLine
              icon={Mail}
              label="Email"
              value={company.email}
              href={`mailto:${company.email}`}
            />
            <ContactLine
              icon={WhatsAppIcon}
              label="Phone / WhatsApp"
              value={company.phone}
              href={`https://wa.me/${company.phone.replace(/[^\d]/g, '')}?text=${encodeURIComponent("Hello Nexora, I'd like to discuss a project.")}`}
              isExternal
            />
            <ContactLine icon={MapPin} label="Location" value={company.location} />
          </div>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="relative rounded-3xl border border-ink/10 bg-white p-8 md:p-10 shadow-xl shadow-iris/10"
        >
          <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-iris/15 blur-3xl pointer-events-none" />

          <div className="relative space-y-6">
            <Field label="Your name" name="name" placeholder="John Doe" />
            <Field
              label="Email"
              type="email"
              name="email"
              placeholder="you@company.com"
            />
            <Field
              label="Company"
              name="company"
              placeholder="Acme Inc."
              required={false}
            />
            <Field
              label="Contact number"
              type="tel"
              name="whatsapp"
              placeholder="+91 98765 43210"
            />
            <Field
              label="What do you want to build?"
              name="message"
              placeholder="A short description helps us route your project."
              textarea
            />
          </div>

          <label className="relative mt-6 flex items-start gap-3 text-sm leading-relaxed text-muted">
            <input
              type="checkbox"
              name="contactConsent"
              required
              className="mt-1 h-4 w-4 shrink-0 accent-[#25D366]"
            />
            <span>I agree that NexoraSolution may use my details to respond to this enquiry.</span>
          </label>

          <div className="relative mt-8 grid gap-3 sm:grid-cols-2">
            <button
              type="submit"
              name="channel"
              value="whatsapp"
              disabled={submission.status === 'submitting'}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-medium text-white shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/30 disabled:cursor-wait disabled:opacity-60"
            >
              <MessageCircle className="h-4 w-4" />
              {submission.status === 'submitting' ? 'Sending...' : 'Send via WhatsApp'}
            </button>
            <button
              type="submit"
              name="channel"
              value="email"
              className="group inline-flex items-center justify-center gap-2 rounded-full accent-gradient px-6 py-4 font-medium text-white shadow-lg shadow-iris/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-iris/40"
            >
              <Mail className="h-4 w-4" />
              Send via Email
            </button>
          </div>
          <p className="relative mt-4 text-center text-xs leading-relaxed text-muted">
            WhatsApp submissions stay on this page. Email submissions open your email app with the enquiry details pre-filled.
          </p>
        </motion.form>
      </div>
      {submission.status === 'success' || submission.status === 'error' ? (
        <SubmissionDialog
          status={submission.status}
          message={submission.message}
          onClose={() => setSubmission({ status: 'idle', message: '' })}
        />
      ) : null}
    </section>
  )
}

function SubmissionDialog({
  status,
  message,
  onClose,
}: {
  status: 'success' | 'error'
  message: string
  onClose: () => void
}) {
  const success = status === 'success'
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/45 px-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="submission-dialog-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl border border-ink/10 bg-white p-8 text-center shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-mist hover:text-ink"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>
        <span className={[
          'mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full',
          success ? 'bg-[#25D366]/12 text-[#168c42]' : 'bg-red-50 text-red-600',
        ].join(' ')}>
          {success ? <CheckCircle2 className="h-7 w-7" /> : <XCircle className="h-7 w-7" />}
        </span>
        <h3 id="submission-dialog-title" className="mt-5 font-display text-3xl text-ink">
          {success ? 'Enquiry received' : 'Message not sent'}
        </h3>
        <p className="mt-4 leading-relaxed text-muted">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-7 inline-flex rounded-full accent-gradient px-7 py-3 font-medium text-white"
        >
          {success ? 'Done' : 'Try again'}
        </button>
      </div>
    </div>
  )
}

function ContactLine({
  icon: Icon,
  label,
  value,
  href,
  isExternal = false,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
  isExternal?: boolean
}) {
  const Body = (
    <div className="flex items-center gap-4 py-4 border-b border-ink/10 group">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-iris/20 bg-mist text-iris group-hover:accent-gradient group-hover:text-white group-hover:border-transparent transition-colors">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-iris/70">
          {label}
        </div>
        <div className="text-ink text-lg">{value}</div>
      </div>
    </div>
  )
  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="block"
      >
        {Body}
      </a>
    )
  }
  return Body
}

function Field({
  label,
  name,
  placeholder,
  type = 'text',
  textarea = false,
  required = true,
}: {
  label: string
  name: string
  placeholder: string
  type?: string
  textarea?: boolean
  required?: boolean
}) {
  const base =
    'mt-2 w-full bg-transparent border-b border-ink/15 px-1 py-3 text-ink placeholder:text-ink/30 focus:outline-none focus:border-iris transition-colors'
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-iris/70">
        {label}
        {!required && <span className="ml-2 lowercase tracking-normal text-muted">optional</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={3}
          placeholder={placeholder}
          required={required}
          className={base + ' resize-none'}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className={base}
        />
      )}
    </label>
  )
}
