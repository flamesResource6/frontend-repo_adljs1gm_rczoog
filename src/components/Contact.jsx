import { useState } from 'react'

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
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Let’s talk</h2>
          <p className="mt-2 text-slate-300">Have an idea or project in mind? I’m available for collaborations and freelance work.</p>
          <form onSubmit={onSubmit} className="mt-8 grid gap-4">
            <input className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Your name" required />
            <input type="email" className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Email" required />
            <textarea rows="5" className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Tell me about your project" required />
            <div className="flex items-center gap-4">
              <button type="submit" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:opacity-90">Send message</button>
              <span className="text-slate-300 text-sm">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
