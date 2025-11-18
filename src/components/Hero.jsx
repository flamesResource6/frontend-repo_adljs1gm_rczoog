import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 py-28">
        <div className="flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Taking bookings now
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Video Editor & Motion Designer
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-xl">
            I craft cinematic edits, snappy cuts, and story-led motion for brands, creators, and music artists. From color to sound, every frame has intent.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#reel" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:opacity-90 transition">Watch Reel</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/15 transition">Book a Project</a>
          </div>
        </div>

        <div className="relative h-[400px] lg:h-[520px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/20 to-slate-900" />
    </section>
  )
}
