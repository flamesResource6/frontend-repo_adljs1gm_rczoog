export default function Reel() {
  // Replace the YouTube URL with your real showreel link
  const reelUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ'

  return (
    <section id="reel" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Showreel</h2>
            <p className="mt-2 text-slate-300">A quick cut of my favorite edits and motion work.</p>
          </div>
        </div>
        <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
          <iframe
            className="h-full w-full"
            src={reelUrl}
            title="Showreel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
