export function HeroScene() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-mist via-paper to-haze" />

      <div className="absolute inset-0 dot-mesh opacity-70 mask-radial" />

      <div
        aria-hidden
        className="absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-60"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(14,165,233,0.55), transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="absolute top-1/3 -right-32 h-[600px] w-[600px] rounded-full blur-3xl opacity-55"
        style={{
          background:
            'radial-gradient(circle at 60% 50%, rgba(59,107,255,0.5), transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full blur-3xl opacity-45"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.45), transparent 70%)',
        }}
      />

      <svg
        aria-hidden
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-[0.18]"
      >
        <defs>
          <linearGradient id="hero-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="50%" stopColor="#3B6BFF" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>
        <g stroke="url(#hero-stroke)" strokeWidth="1.2" fill="none">
          <path d="M -50 620 C 200 540, 380 720, 600 580 S 1000 460, 1300 540" />
          <path d="M -50 680 C 220 600, 420 780, 640 640 S 1020 520, 1300 600" />
          <path d="M -50 560 C 180 480, 360 660, 580 520 S 980 400, 1300 480" />
        </g>
        <g fill="url(#hero-stroke)">
          <circle cx="180" cy="220" r="3.5" />
          <circle cx="940" cy="160" r="2.5" />
          <circle cx="1080" cy="320" r="4" />
          <circle cx="320" cy="120" r="2" />
          <circle cx="780" cy="260" r="3" />
        </g>
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper" />
    </div>
  )
}
