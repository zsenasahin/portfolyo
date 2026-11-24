import { motion } from 'framer-motion'
import { Brain, Database, GitBranch, Layers, Server, Smartphone } from 'lucide-react'
import { skills, ui } from '../content'
import { useApp } from '../context'
import { fadeUp, SectionHead, stagger } from './ui'

const icons = { server: Server, layers: Layers, smartphone: Smartphone, database: Database, git: GitBranch, brain: Brain } as const

export default function Skills() {
  const { t } = useApp()
  return (
    <section id="skills" className="section">
      <SectionHead index="04" eyebrow={t(ui.skills.eyebrow)} title={t(ui.skills.title)} />
      <motion.ul
        className="skill-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        variants={stagger(0.08)}
      >
        {skills.map((s) => {
          const Icon = icons[s.icon as keyof typeof icons]
          return (
            <motion.li key={s.title.en} className="skill card" variants={fadeUp}>
              <div className="skill-head">
                <span className="skill-icon">
                  <Icon size={20} strokeWidth={1.7} />
                </span>
                <h3>{t(s.title)}</h3>
              </div>
              <motion.ul className="chips" variants={stagger(0.04, 0.2)}>
                {s.items.map((i) => (
                  <motion.li
                    key={i}
                    className="chip"
                    variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
                  >
                    {i}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.li>
          )
        })}
      </motion.ul>
    </section>
  )
}
