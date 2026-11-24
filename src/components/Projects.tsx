import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  ArrowUpRight,
  BookOpen,
  Brain,
  CalendarCheck,
  Coins,
  Eye,
  HeartPulse,
  Map,
  ScanLine,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { useState, type PointerEvent } from 'react'
import { profile, projects, ui, type Category, type Project } from '../content'
import { useApp } from '../context'
import { ease, GithubIcon, Reveal, SectionHead } from './ui'

const icons = {
  map: Map,
  eye: Eye,
  calendar: CalendarCheck,
  book: BookOpen,
  shield: ShieldCheck,
  users: Users,
  heart: HeartPulse,
  scan: ScanLine,
  brain: Brain,
  coins: Coins,
} as const

type Filter = 'all' | Category
const filters: Filter[] = ['all', 'web', 'mobile', 'ai']

function Cover({ p, index }: { p: Project; index: number }) {
  const Icon = icons[p.icon]
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 200, damping: 20 })
  const gx = useTransform(mx, [-0.5, 0.5], ['20%', '80%'])
  const gy = useTransform(my, [-0.5, 0.5], ['20%', '80%'])
  const glare = useTransform(
    [gx, gy],
    ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,.28), transparent 55%)`,
  )

  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const leave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <div className="cover-wrap" onPointerMove={move} onPointerLeave={leave}>
      <motion.div className={`cover cover--${index % 4}`} style={{ rotateX: rx, rotateY: ry }}>
        {p.image ? (
          <img src={p.image} alt="" className="cover-img" loading="lazy" />
        ) : (
          <>
            <span className="cover-orbit o1" />
            <span className="cover-orbit o2" />
            <span className="cover-grid" />
            <span className="cover-icon">
              <Icon size={56} strokeWidth={1.3} />
            </span>
          </>
        )}
        {p.stat && (
          <span className="cover-stat">
            <strong>{p.stat.value}</strong>
          </span>
        )}
        <motion.span className="cover-glare" style={{ background: glare }} />
      </motion.div>
    </div>
  )
}

function Links({ p }: { p: Project }) {
  const { t } = useApp()
  return (
    <div className="p-links">
      {p.live && (
        <a className="btn btn--primary btn--sm" href={p.live} target="_blank" rel="noreferrer">
          {t(ui.projects.live)} <ArrowUpRight size={16} />
        </a>
      )}
      {p.repos?.map((r) => (
        <a key={r.url} className="btn btn--ghost btn--sm" href={r.url} target="_blank" rel="noreferrer">
          <GithubIcon size={15} /> {r.label === 'GitHub' ? t(ui.projects.code) : r.label}
        </a>
      ))}
    </div>
  )
}

function Featured({ p, index }: { p: Project; index: number }) {
  const { t } = useApp()
  return (
    <motion.article
      layout
      className={`featured ${index % 2 ? 'featured--flip' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.8, ease }}
    >
      <Cover p={p} index={index} />
      <div className="featured-body">
        <p className="p-kicker">
          <span>0{index + 1}</span> {t(ui.projects.filters[p.category])}
        </p>
        <h3 className="p-title">{t(p.title)}</h3>
        {p.stat && (
          <p className="p-stat">
            <strong>{p.stat.value}</strong> {t(p.stat.label)}
          </p>
        )}
        <p className="p-summary">{t(p.summary)}</p>
        {p.highlights && (
          <ul className="p-highlights">
            {p.highlights.map((h, i) => (
              <li key={i}>{t(h)}</li>
            ))}
          </ul>
        )}
        <ul className="tags">
          {p.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
        <Links p={p} />
      </div>
    </motion.article>
  )
}

function Compact({ p }: { p: Project }) {
  const { t } = useApp()
  const Icon = icons[p.icon]
  const href = p.live ?? p.repos?.[0]?.url
  return (
    <motion.li
      layout
      className="compact card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
      transition={{ duration: 0.6, ease }}
      whileHover={{ y: -6 }}
    >
      <div className="compact-top">
        <span className="compact-icon">
          <Icon size={22} strokeWidth={1.6} />
        </span>
        {href && (
          <a href={href} target="_blank" rel="noreferrer" className="compact-link" aria-label={t(p.title)}>
            <ArrowUpRight size={20} />
          </a>
        )}
      </div>
      <h4 className="compact-title">{t(p.title)}</h4>
      <p className="compact-text">{t(p.summary)}</p>
      <ul className="tags tags--sm">
        {p.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
    </motion.li>
  )
}

export default function Projects() {
  const { t } = useApp()
  const [filter, setFilter] = useState<Filter>('all')
  const list = projects.filter((p) => filter === 'all' || p.category === filter)
  const featured = list.filter((p) => p.featured)
  const others = list.filter((p) => !p.featured)

  return (
    <section id="projects" className="section">
      <SectionHead index="03" eyebrow={t(ui.projects.eyebrow)} title={t(ui.projects.title)} />
      <Reveal as="p" className="section-lead">
        {t(ui.projects.lead)}
      </Reveal>

      <Reveal className="filters">
        <div role="tablist" aria-label={t(ui.projects.eyebrow)} className="filter-bar">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              className={filter === f ? 'is-active' : ''}
              onClick={() => setFilter(f)}
            >
              {filter === f && <motion.span layoutId="filter-pill" className="filter-pill" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
              <span>{t(ui.projects.filters[f])}</span>
              <span className="filter-count">
                {f === 'all' ? projects.length : projects.filter((p) => p.category === f).length}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      <div className="featured-list">
        <AnimatePresence mode="popLayout">
          {featured.map((p) => (
            <Featured key={p.id} p={p} index={projects.indexOf(p)} />
          ))}
        </AnimatePresence>
      </div>

      {others.length > 0 && (
        <motion.h3 layout className="sub-title more-title">
          {t(ui.projects.more)}
        </motion.h3>
      )}
      <motion.ul layout className="compact-grid">
        <AnimatePresence mode="popLayout">
          {others.map((p) => (
            <Compact key={p.id} p={p} />
          ))}
        </AnimatePresence>
      </motion.ul>

      <Reveal className="all-gh">
        <a href={profile.github} target="_blank" rel="noreferrer" className="link-arrow">
          <GithubIcon size={18} />
          {t(ui.projects.allOnGithub)}
          <ArrowUpRight size={18} />
        </a>
      </Reveal>
    </section>
  )
}
