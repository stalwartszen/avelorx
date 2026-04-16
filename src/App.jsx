export default function App() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Aurora orb 1 — indigo, top-left */}
      <div
        className="absolute w-[600px] h-[600px] bg-indigo-600 rounded-full blur-3xl opacity-25 -top-32 -left-32 animate-drift-slow"
        aria-hidden="true"
      />

      {/* Aurora orb 2 — violet, bottom-right */}
      <div
        className="absolute w-[500px] h-[500px] bg-violet-600 rounded-full blur-3xl opacity-20 -bottom-24 -right-24 animate-drift-slow-reverse"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-5 text-center px-6">
        {/* Coming Soon badge */}
        <span className="text-xs tracking-[0.3em] uppercase text-zinc-500 border border-zinc-800 rounded-full px-4 py-1.5">
          Coming Soon
        </span>

        {/* Wordmark */}
        <h1 className="text-7xl sm:text-8xl font-thin tracking-[0.25em] uppercase text-white select-none">
          Avelorx
        </h1>

        {/* Tagline */}
        <p className="text-sm tracking-[0.2em] text-zinc-500 uppercase">
          Time, in motion.
        </p>
      </div>
    </div>
  )
}
