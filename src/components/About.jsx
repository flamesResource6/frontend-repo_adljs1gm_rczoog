import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="text-3xl md:text-4xl font-semibold text-white">About</motion.h2>
          <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05, duration: 0.45 }} className="mt-4 text-slate-300 leading-relaxed">
            I'm a video editor focused on story and rhythm. I specialize in fast-paced social cuts, cinematic commercial edits,
            and motion-driven intros that keep viewers watching. My toolkit includes Premiere Pro, After Effects, DaVinci Resolve,
            and a strong ear for sound design.
          </motion.p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              { k: '150M+', v: 'Total views' },
              { k: '6 yrs', v: 'Editing experience' },
              { k: '50+', v: 'Clients & creators' },
              { k: '48h', v: 'Typical turnaround' },
            ].map((item, i) => (
              <motion.div
                key={item.v}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.05 * i, duration: 0.35 }}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-3xl font-semibold text-white">{item.k}</p>
                <p className="text-slate-400 text-sm">{item.v}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-sky-500/10 to-cyan-400/10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.15),transparent_40%)]" />
            <div className="absolute inset-6 rounded-2xl border border-white/10 bg-slate-900/40" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
