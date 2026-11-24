import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, MapPin } from 'lucide-react'
import { marquee, ui } from '../content'
import { useApp } from '../context'
import { fadeUp, Reveal, SectionHead, stagger } from './ui'

export function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((m, i) => (
          <span key={i} className="marquee-item">
            {m}
            <span className="marquee-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  const { t } = useApp()
  const f = ui.about.facts
  const facts = [
    { icon: MapPin, label: f.location, value: f.locationValue, note: f.locationNote },
    { icon: GraduationCap, label: f.education, value: f.educationValue, note: f.educationNote },
    { icon: Briefcase, label: f.experience, value: f.experienceValue, note: f.experienceNote },
  ]

  return (
    <section id="about" className="section">
      <SectionHead index="01" eyebrow={t(ui.about.eyebrow)} title={t(ui.about.title)} />

      <div className="about-grid">
        <div className="about-text">
          <Reveal as="p">{t(ui.about.p1)}</Reveal>
          <Reveal as="p" delay={0.1}>
            {t(ui.about.p2)}
          </Reveal>
          <Reveal className="interests" delay={0.15}>
            <span className="interests-label">{t(ui.about.interestsTitle)}</span>
            {ui.about.interests.map((i) => (
              <span key={i.en} className="tag">
                {t(i)}
              </span>
            ))}
          </Reveal>
        </div>

        <motion.ul
          className="facts"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          variants={stagger(0.1)}
        >
          {facts.map(({ icon: Icon, label, value, note }) => (
            <motion.li key={label.en} className="fact card" variants={fadeUp}>
              <span className="fact-icon">
                <Icon size={20} />
              </span>
              <div>
                <p className="fact-label">{t(label)}</p>
                <p className="fact-value">{t(value)}</p>
                <p className="fact-note">{t(note)}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

    </section>
  )
}
