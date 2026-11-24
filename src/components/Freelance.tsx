import { motion } from 'framer-motion'
import { ArrowUpRight, Monitor, Server, Smartphone, Wrench } from 'lucide-react'
import { profile, ui } from '../content'
import { useApp } from '../context'
import { fadeUp, Reveal, SectionHead, stagger } from './ui'

const icons = { monitor: Monitor, smartphone: Smartphone, server: Server, wrench: Wrench } as const

export default function Freelance() {
  const { t } = useApp()
  const f = ui.freelance
  const mail = `mailto:${profile.email}?subject=${encodeURIComponent(t(f.mailSubject))}`

  return (
    <section id="freelance" className="section">
      <SectionHead index="05" eyebrow={t(f.eyebrow)} title={t(f.title)} />
      <Reveal as="p" className="section-lead">
        {t(f.text)}
      </Reveal>

      <motion.ul
        className="service-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        variants={stagger(0.08)}
      >
        {f.services.map((s) => {
          const Icon = icons[s.icon as keyof typeof icons]
          return (
            <motion.li key={s.icon} className="service card" variants={fadeUp}>
              <span className="service-icon">
                <Icon size={22} strokeWidth={1.7} />
              </span>
              <h3 className="service-title">{t(s.title)}</h3>
              <p className="service-text">{t(s.text)}</p>
            </motion.li>
          )
        })}
      </motion.ul>

      <div className="process">
        <Reveal>
          <h3 className="sub-title">{t(f.processTitle)}</h3>
        </Reveal>
        <motion.ol
          className="steps"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          variants={stagger(0.12)}
        >
          {f.steps.map((s, i) => (
            <motion.li key={i} className="step" variants={fadeUp}>
              <span className="step-num">0{i + 1}</span>
              <div>
                <p className="step-title">{t(s.title)}</p>
                <p className="step-text">{t(s.text)}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>

      <Reveal className="freelance-cta">
        <a className="btn btn--primary" href={mail}>
          {t(f.cta)} <ArrowUpRight size={18} />
        </a>
        <span className="freelance-note">{t(f.ctaNote)}</span>
      </Reveal>
    </section>
  )
}
