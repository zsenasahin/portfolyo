import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile, ui } from '../content'
import { useApp } from '../context'
import { lockScroll, scrollToId } from '../scroll'
import { ease, GithubIcon, LinkedinIcon } from './ui'

const sections = ['about', 'experience', 'projects', 'skills', 'freelance', 'contact'] as const

export default function Nav() {
  const { t, lang, setLang, theme, toggleTheme } = useApp()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('')
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24))

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ;['top', ...sections].forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    lockScroll(open)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    // menü kapanırken kaydırma kilidi kalksın diye bir kare bekle
    requestAnimationFrame(() => scrollToId(id))
  }

  return (
    <>
      <motion.header
        className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.2 }}
      >
        <a href="#top" className="logo" onClick={go('top')} aria-label="Zeynep Sena Şahin">
          <span className="logo-mark">zs</span>
          <span className="logo-text">Zeynep Sena</span>
        </a>

        <nav className="nav-links" aria-label="Ana menü">
          {sections.map((id) => (
            <a key={id} href={`#${id}`} onClick={go(id)} className={active === id ? 'is-active' : ''}>
              {active === id && (
                <motion.span layoutId="nav-pill" className="nav-pill" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
              )}
              <span className="nav-label">{t(ui.nav[id])}</span>
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="lang-switch" role="group" aria-label="Dil / Language">
            {(['tr', 'en'] as const).map((l) => (
              <button key={l} onClick={() => setLang(l)} className={lang === l ? 'is-active' : ''} aria-pressed={lang === l}>
                {lang === l && <motion.span layoutId="lang-pill" className="lang-pill" />}
                <span>{l.toUpperCase()}</span>
              </button>
            ))}
          </div>
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={t(theme === 'dark' ? ui.theme.light : ui.theme.dark)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'grid' }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
          <button className="icon-btn menu-btn" onClick={() => setOpen(true)} aria-label={t(ui.menu)}>
            <Menu size={20} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 36px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 36px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 36px)' }}
            transition={{ duration: 0.7, ease }}
          >
            <button className="icon-btn mobile-close" onClick={() => setOpen(false)} aria-label="Kapat">
              <X size={22} />
            </button>
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } } }}
            >
              {sections.map((id, i) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={go(id)}
                  variants={{ hidden: { y: 40, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.6, ease } } }}
                >
                  <span className="mm-num">0{i + 1}</span>
                  {t(ui.nav[id])}
                </motion.a>
              ))}
            </motion.nav>
            <motion.div
              className="mobile-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6 } }}
            >
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
