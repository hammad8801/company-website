import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="min-h-screen px-6 md:px-10 pt-32 pb-24">
      <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-ink/10 bg-white p-10 text-center shadow-xl shadow-iris/5">
        <div className="text-xs uppercase tracking-[0.24em] text-iris">404</div>
        <h1 className="mt-5 text-4xl md:text-6xl text-ink">Page not found</h1>
        <p className="mt-5 text-muted leading-relaxed">
          The route exists in the new site structure only if we have mapped it already. Head back home and continue from there.
        </p>
        <Link to="/" className="mt-8 inline-flex rounded-full accent-gradient px-6 py-3 font-medium text-white">
          Back to home
        </Link>
      </div>
    </main>
  )
}

