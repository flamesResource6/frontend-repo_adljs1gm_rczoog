import { useState } from 'react'
import { Menu, X, Youtube, Instagram, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-slate-200 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Edits', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 140, damping: 18 }}
          className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur-md"
        >
          <a href="#home" className="flex items-center gap-2">
            <motion.div
              className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg"
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 6, ease: 'easeInOut' }}
            />
            <span className="text-white font-semibold tracking-tight">Video Editor</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l, i) => (
              <motion.div key={l.href} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}>
                <NavLink href={l.href}>{l.label}</NavLink>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <motion.a whileHover={{ y: -2 }} href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"><Youtube size={18} /></motion.a>
            <motion.a whileHover={{ y: -2 }} href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"><Instagram size={18} /></motion.a>
            <motion.a whileHover={{ y: -2 }} href="#contact" className="p-2 rounded-lg bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"><Mail size={18} /></motion.a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/5 text-slate-200 hover:bg-white/10">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className="md:hidden mt-2 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-md p-4 space-y-3 overflow-hidden"
            >
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -8, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.04 * i }}
                  className="block text-slate-200 hover:text-white"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"><Youtube size={18} /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"><Instagram size={18} /></a>
                <a href="#contact" className="p-2 rounded-lg bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"><Mail size={18} /></a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
