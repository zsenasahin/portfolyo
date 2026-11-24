import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import About, { Marquee } from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Freelance from './components/Freelance'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { AppProvider } from './context'
import { initSmoothScroll } from './scroll'

function Progress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 })
  return <motion.div className="progress" style={{ scaleX }} />
}

function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <span className="blob b1" />
      <span className="blob b2" />
      <span className="blob b3" />
      <span className="grain" />
    </div>
  )
}

export default function App() {
  useEffect(() => initSmoothScroll(), [])

  return (
    <AppProvider>
      <Backdrop />
      <Progress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Freelance />
        <Contact />
      </main>
    </AppProvider>
  )
}
