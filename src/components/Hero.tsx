import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Download, MapPin } from 'lucide-react'
import { useRef, useState } from 'react'
import { profile, ui } from '../content'
import { useApp } from '../context'
import { scrollToId } from '../scroll'
import { ease, GithubIcon, LinkedinIcon } from './ui'

function Letters({ text, delay, className }: { text: string; delay: number; className?: string }) {
  return (
    <span className={`line-mask ${className ?? ''}`} aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="char"
          initial={{ y: '115%', rotate: 6 }}
          animate={{ y: '0%', rotate: 0 }}
          transition={{ duration: 1, ease, delay: delay + i * 0.035 }}
        >
          {ch === ' ' ? ' ' : ch}
        </motion.span>
      ))}
    </span>
  )
}

function Portrait() {
  const [failed, setFailed] = useState(false)
  return failed ? (
    <div className="portrait-fallback" aria-label="Zeynep Sena Şahin">
      zs
    </div>
  ) : (
    <img
      src={profile.photo}
      alt="Zeynep Sena Şahin"
      className="portrait-img"
      onError={() => setFailed(true)}
      fetchPriority="high"
    />
  )
}

export default function Hero() {
  const { t, lang } = useApp()
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '30%'])
  const yImg = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-12%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const ring = t(ui.hero.ring).repeat(2)

  return (
    <section id="top" className="hero" ref={ref}>
      <motion.div className="hero-text" style={{ y: yText, opacity: fade }}>
        <motion.div
          className="badge"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.35 }}
        >
          <span className="pulse" />
          {t(ui.hero.badge)}
        </motion.div>

        <motion.p
          className="hero-hello"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          {t(ui.hero.hello)}
        </motion.p>

        <h1 className="hero-name">
          <Letters text={profile.name} delay={0.5} />
          <Letters text={profile.surname} delay={0.85} className="accent" />
        </h1>

        <motion.div
          key={lang}
          className="hero-role"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.1 }}
        >
          <span className="role-line" />
          {t(ui.hero.role)}
        </motion.div>

        <motion.p
          className="hero-lead"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.25 }}
        >
          {t(ui.hero.lead)}
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.4 }}
        >
          <a
            className="btn btn--primary"
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              scrollToId('projects')
            }}
          >
            {t(ui.hero.ctaProjects)}
            <ArrowUpRight size={18} />
          </a>
          <a className="btn btn--ghost" href={t(profile.cv)} download>
            <Download size={18} />
            {t(ui.hero.ctaCv)}
          </a>
        </motion.div>

        <motion.div
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <span className="meta-loc">
            <MapPin size={16} /> {t(ui.about.facts.locationValue)}
          </span>
          <span className="meta-sep" />
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social">
            <GithubIcon size={19} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social">
            <LinkedinIcon size={19} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div className="hero-visual" style={{ y: yImg }}>
        <motion.div
          className="portrait"
          initial={{ clipPath: 'inset(100% 0% 0% 0% round 999px 999px 32px 32px)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0% round 999px 999px 32px 32px)' }}
          transition={{ duration: 1.4, ease, delay: 0.4 }}
        >
          <motion.div
            className="portrait-inner"
            initial={{ scale: 1.25 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease, delay: 0.4 }}
          >
            <Portrait />
          </motion.div>
        </motion.div>

        <motion.div
          className="ring"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 1.2 }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 200 200" className="ring-svg">
            <defs>
              <path id="ringPath" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <text>
              <textPath href="#ringPath" textLength="490">
                {ring}
              </textPath>
            </text>
          </svg>
          <span className="ring-dot">✦</span>
        </motion.div>

        {[
          { label: 'React', cls: 'chip-a', d: 1.5 },
          { label: '.NET 8', cls: 'chip-b', d: 1.65 },
          { label: 'MSSQL', cls: 'chip-c', d: 1.8 },
        ].map((c) => (
          <motion.span
            key={c.label}
            className={`float-chip ${c.cls}`}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease, delay: c.d }}
            aria-hidden="true"
          >
            {c.label}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="scroll-cue-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.button className="scroll-cue" onClick={() => scrollToId('about')} style={{ opacity: fade }}>
          <span>{t(ui.hero.scroll)}</span>
          <ArrowDown size={16} className="bob" />
        </motion.button>
      </motion.div>
    </section>
  )
}
