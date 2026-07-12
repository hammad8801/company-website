import { useState } from 'react'

export function LeadMagnetModal() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true)
          setSent(false)
        }}
        className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
      >
        Download the Checklist
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </button>

      {open ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/55 p-6 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-[2rem] bg-white p-8 shadow-2xl shadow-ink/20">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink/60 hover:text-ink"
              aria-label="Close checklist dialog"
            >
              ×
            </button>
            <span className="inline-flex rounded-full border border-ink/10 bg-mist/50 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-iris">
              Free download
            </span>
            <h3 className="mt-5 font-display text-3xl text-ink">The ERP Readiness Checklist</h3>
            <p className="mt-4 text-muted leading-relaxed">
              27 questions across data, processes, and people that tell you whether your business is ready for ERP, and what to fix first if it is not.
            </p>

            {sent ? (
              <div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 px-5 py-6">
                <div className="text-sm font-medium text-emerald-700">Check your inbox.</div>
                <p className="mt-2 text-sm text-emerald-700/90">
                  Demo flow complete. Hook this form to your actual lead capture later.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 space-y-5">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.22em] text-iris/75">Name</span>
                  <input
                    required
                    className="mt-2 w-full rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-iris"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.22em] text-iris/75">Work email</span>
                  <input
                    type="email"
                    required
                    className="mt-2 w-full rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-iris"
                    placeholder="you@company.com"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-full accent-gradient px-6 py-4 font-medium text-white shadow-lg shadow-iris/30"
                >
                  Send Me the Checklist
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </>
  )
}

