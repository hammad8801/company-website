import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { X, Send } from 'lucide-react'
import { company } from '@/data/site'

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneDigits = company.phone.replace(/[^\d]/g, '')
  const defaultMsg = encodeURIComponent("Hello Nexora, I'd like to discuss a project for my business.")
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=${defaultMsg}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto select-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.92 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-80 rounded-2xl border border-emerald-500/20 bg-white p-5 shadow-2xl shadow-emerald-500/15 overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-ink/5 pb-3">
              <div className="flex items-center gap-3">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#00c875] text-white font-bold">
                  <WhatsAppIcon className="h-5 w-5 fill-current" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 border-2 border-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">Nexora Solutions</div>
                  <div className="text-[11px] text-emerald-600 font-medium">Typically replies in minutes</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-muted hover:bg-paper hover:text-ink transition-colors cursor-pointer"
                aria-label="Close chat menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="py-4">
              <div className="rounded-xl bg-emerald-50/80 p-3 text-xs text-ink/80 leading-relaxed border border-emerald-100/80">
                👋 <strong>Hi there!</strong> Have a project, ERPNext question, or custom software requirement? Chat with us directly on WhatsApp.
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#00c875] hover:bg-[#00b568] text-white py-3 px-4 font-medium text-sm transition-all shadow-md shadow-emerald-500/25 active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-4 w-4 fill-current" />
              Start WhatsApp Chat
              <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="group relative flex h-14 items-center gap-3 rounded-full bg-[#00c875] hover:bg-[#00b568] text-white px-6 shadow-lg shadow-emerald-500/30 transition-all cursor-pointer"
        aria-label="WhatsApp Contact Button"
      >
        {/* Solid White Circle Indicator */}
        <span className="h-3.5 w-3.5 rounded-full bg-white shrink-0 shadow-xs" />

        {/* Flaticon WhatsApp Logo (3536445) */}
        <WhatsAppIcon className="h-6 w-6 text-white fill-current shrink-0 transition-transform group-hover:scale-110" />

        {/* Text */}
        <span className="font-semibold text-base tracking-tight text-white">WhatsApp Us</span>
      </motion.button>
    </div>
  )
}

export function WhatsAppBubbleIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return <WhatsAppIcon className={className} />
}

export function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
