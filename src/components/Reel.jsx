import { motion } from 'framer-motion'

export default function Reel() {
  const reelUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ'

  return (
    <section id="reel" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="text-3xl md:text-4xl font-semibold text-white">Showreel</motion.h2>
            <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05, duration: 0.45 }} className="mt-2 text-slate-300">A quick cut of my favorite edits and motion work.</motion.p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40"
        >
          <iframe
            className="h-full w-full"
            src={reelUrl}
            title="Showreel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  )
}
