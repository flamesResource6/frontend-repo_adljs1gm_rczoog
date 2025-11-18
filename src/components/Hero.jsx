import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 py-28">
        <div className="flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Taking bookings now
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white"
          >
            Video Editor & Motion Designer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-slate-300 text-lg max-w-xl"
          >
            I craft cinematic edits, snappy cuts, and story-led motion for brands, creators, and music artists. From color to sound, every frame has intent.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.a whileHover={{ y: -2 }} href="#reel" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:opacity-90 transition">Watch Reel</motion.a>
            <motion.a whileHover={{ y: -2 }} href="#contact" className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/15 transition">Book a Project</motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35 }}
          className="relative h-[400px] lg:h-[520px]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/20 to-slate-900"
      />
    </section>
  )
}
