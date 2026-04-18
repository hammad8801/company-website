import { motion } from 'motion/react'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
    }, 800)
  }

  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 px-6 md:px-10 border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50"
          >
            <span className="h-px w-6 bg-white/40" />
            Get in touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance"
          >
            Have a project in mind?{' '}
            <span className="italic font-light text-white/70">Let's talk.</span>
          </motion.h2>

          <p className="mt-6 text-white/60 text-lg max-w-md">
            Drop us a line — we reply within 24 hours.
          </p>

          <div className="mt-12 space-y-5">
            <ContactLine
              icon={Mail}
              label="Email"
              value="hello@nexora.studio"
              href="mailto:hello@nexora.studio"
            />
            <ContactLine
              icon={Phone}
              label="Phone / WhatsApp"
              value="+91 00000 00000"
              href="tel:+910000000000"
            />
            <ContactLine icon={MapPin} label="Location" value="India" />
          </div>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10"
        >
          <div className="space-y-6">
            <Field label="Your name" name="name" placeholder="Hammad Ali" />
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
              label="What do you want to build?"
              name="message"
              placeholder="A short description helps us route your project."
              textarea
            />
          </div>

          <button
            type="submit"
            disabled={sending || sent}
            className="mt-8 group w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-4 font-medium disabled:opacity-60 hover:bg-white/90 transition-colors"
          >
            {sent ? (
              'Thanks — we\u2019ll be in touch'
            ) : sending ? (
              'Sending…'
            ) : (
              <>
                Send message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

function ContactLine({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
}) {
  const Body = (
    <div className="flex items-center gap-4 py-4 border-b border-white/10 group">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 group-hover:bg-white group-hover:text-black transition-colors">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-white/40">
          {label}
        </div>
        <div className="text-white text-lg">{value}</div>
      </div>
    </div>
  )
  if (href) {
    return (
      <a href={href} className="block">
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
    'mt-2 w-full bg-transparent border-b border-white/15 px-1 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-white transition-colors'
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-white/50">
        {label}
        {!required && <span className="ml-2 lowercase tracking-normal text-white/30">optional</span>}
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
