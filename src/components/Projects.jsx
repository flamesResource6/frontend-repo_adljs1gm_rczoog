import { useEffect, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const demoProjects = [
  {
    title: 'AI Code Assistant',
    description: 'Conversational agent that builds apps end-to-end with modern UI and clean API.',
    tags: ['React', 'FastAPI', 'MongoDB'],
    link: 'https://naukhaiz.vercel.app/',
    repo: '#'
  },
  {
    title: '3D Portfolio',
    description: 'Interactive landing with Spline and smooth transitions, optimized for performance.',
    tags: ['Spline', 'Framer Motion', 'Tailwind'],
    link: 'https://naukhaiz.vercel.app/',
    repo: '#'
  },
  {
    title: 'Design System',
    description: 'Composable components with accessibility and dark mode baked in.',
    tags: ['shadcn', 'Radix', 'TypeScript'],
    link: 'https://naukhaiz.vercel.app/',
    repo: '#'
  }
]

function ProjectCard({ p }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-blue-500/10 to-cyan-400/10" />
      <h3 className="text-white text-xl font-semibold">{p.title}</h3>
      <p className="mt-2 text-slate-300">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 text-slate-200 border border-white/10">{t}</span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3">
        <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sky-300 hover:text-sky-200"><ExternalLink size={16}/> Live</a>
        <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-slate-300 hover:text-slate-200"><Github size={16}/> Code</a>
      </div>
    </div>
  )
}

export default function Projects() {
  const [projects] = useState(demoProjects)
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500/0 via-blue-500/0 to-blue-500/0" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Selected Work</h2>
            <p className="mt-2 text-slate-300">A mix of shipped projects and experiments.</p>
          </div>
          <a href="#" className="hidden md:inline-block px-4 py-2 rounded-xl bg-white/10 text-white border border-white/10 hover:bg-white/15">View All</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
