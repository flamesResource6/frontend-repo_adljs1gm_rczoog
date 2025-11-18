import { useState } from 'react'
import { Mail, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => setStatus('Thanks! I will get back to you shortly.'), 700)
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Let’s work together</h2>
          <p className="mt-2 text-slate-300">Tell me about your video. I’ll reply with a timeline and quote.</p>
          <form onSubmit={onSubmit} className="mt-8 grid gap-4">
            {['Your name', 'Email', 'Project type (YouTube, commercial, music)'].map((ph, i) => (
              <motion.input
                key={ph}
                type={ph === 'Email' ? 'email' : 'text'}
                placeholder={ph}
                required={ph !== 'Project type (YouTube, commercial, music)'}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.35 }}
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            ))}
            <motion.textarea
              rows="5"
              placeholder="Describe the vibe, references, and deadline"
              required
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.35 }}
              className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <div className="flex items-center gap-4">
              <motion.button whileHover={{ y: -2 }} type="submit" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:opacity-90 inline-flex items-center gap-2"><Mail size={18}/> Send</motion.button>
              <motion.a whileHover={{ x: 2 }} href="#reel" className="text-slate-300 text-sm inline-flex items-center gap-1 hover:text-slate-200"><MessageSquare size={16}/> See Reel</motion.a>
              <span className="text-slate-300 text-sm">{status}</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
