export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">About</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            I'm a video editor focused on story and rhythm. I specialize in fast-paced social cuts, cinematic commercial edits,
            and motion-driven intros that keep viewers watching. My toolkit includes Premiere Pro, After Effects, DaVinci Resolve,
            and a strong ear for sound design.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-3xl font-semibold text-white">150M+</p>
              <p className="text-slate-400 text-sm">Total views</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-3xl font-semibold text-white">6 yrs</p>
              <p className="text-slate-400 text-sm">Editing experience</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-3xl font-semibold text-white">50+</p>
              <p className="text-slate-400 text-sm">Clients & creators</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-3xl font-semibold text-white">48h</p>
              <p className="text-slate-400 text-sm">Typical turnaround</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-sky-500/10 to-cyan-400/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.15),transparent_40%)]" />
            <div className="absolute inset-6 rounded-2xl border border-white/10 bg-slate-900/40" />
          </div>
        </div>
      </div>
    </section>
  )
}
