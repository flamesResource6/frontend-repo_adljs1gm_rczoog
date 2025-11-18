import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Reel from './components/Reel'
import About from './components/About'
import Contact from './components/Contact'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background grid + glow */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(6,182,212,0.2),transparent_40%)]" />
      <div className="pointer-events-none fixed inset-0 [background:linear-gradient(#0B1220_1px,transparent_1px),linear-gradient(90deg,#0B1220_1px,transparent_1px)] bg-[length:40px_40px] opacity-30" />

      <Navbar />
      <main>
        <Hero />
        <Reel />
        <Projects />
        <About />
        <Contact />
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="border-t border-white/10 py-10 text-center text-slate-400"
      >
        <p>© {new Date().getFullYear()} Video Editor Portfolio. Cut with care.</p>
      </motion.footer>
    </div>
  )
}

export default App
