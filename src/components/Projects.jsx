import { ExternalLink, Youtube, Scissors, PlayCircle } from 'lucide-react'

const demoEdits = [
  {
    title: 'Director Cut — Fashion Brand Film',
    description: 'High-contrast pacing, rhythmic cuts, and bold typography animation to elevate a capsule drop.',
    tags: ['Commercial', 'Color Grade', 'Sound Design'],
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Creator Series — YouTube Opener',
    description: 'Energetic opener with seamless transitions, speed ramps, and kinetic type for a creator channel.',
    tags: ['YouTube', 'Kinetic Type', 'Transitions'],
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Music Visual — Lo-fi Night Drive',
    description: 'Dreamy visual loop with grain, chromatic aberration, and soft motion matching the track vibe.',
    tags: ['Music', 'Visual Loop', 'Grain FX'],
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
]

function ProjectCard({ p }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-blue-500/10 to-cyan-400/10" />
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-white text-xl font-semibold">{p.title}</h3>
        <span className="inline-flex items-center gap-1 text-xs text-slate-300 bg-white/5 border border-white/10 px-2 py-1 rounded-md">
          <Scissors size={14} /> Edit
        </span>
      </div>
      <p className="mt-2 text-slate-300">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 text-slate-200 border border-white/10">{t}</span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3">
        <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sky-300 hover:text-sky-200"><Youtube size={16}/> Watch</a>
        <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-slate-300 hover:text-slate-200"><ExternalLink size={16}/> Open</a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Selected Edits</h2>
            <p className="mt-2 text-slate-300">Commercials, YouTube, music visuals, and brand films.</p>
          </div>
          <a href="#reel" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white border border-white/10 hover:bg-white/15"><PlayCircle size={18}/> Watch Reel</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoEdits.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
