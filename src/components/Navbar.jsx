import { useState } from 'react'
import { Menu, X, Youtube, Instagram, Mail } from 'lucide-react'

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
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur-md">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg" />
            <span className="text-white font-semibold tracking-tight">Video Editor</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href}>{l.label}</NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"><Youtube size={18} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"><Instagram size={18} /></a>
            <a href="#contact" className="p-2 rounded-lg bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"><Mail size={18} /></a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/5 text-slate-200 hover:bg-white/10">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-md p-4 space-y-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-slate-200 hover:text-white">
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"><Youtube size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"><Instagram size={18} /></a>
              <a href="#contact" className="p-2 rounded-lg bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"><Mail size={18} /></a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
