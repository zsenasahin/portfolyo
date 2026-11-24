import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { experience, ui } from '../content'
import { useApp } from '../context'
import { fadeUp, SectionHead, stagger } from './ui'

export default function Experience() {
  const { t } = useApp()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <section id="experience" className="section">
      <SectionHead index="02" eyebrow={t(ui.experience.eyebrow)} title={t(ui.experience.title)} />

      <div className="timeline" ref={ref}>
        <div className="timeline-rail" aria-hidden="true">
          <motion.div className="timeline-fill" style={{ scaleY }} />
        </div>

        {experience.map((job) => (
          <motion.article
            key={job.company}
            className="job"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '0px 0px -15% 0px' }}
            variants={stagger(0.08)}
          >
            <motion.span className="job-dot" variants={{ hidden: { scale: 0 }, show: { scale: 1 } }} aria-hidden="true" />
            <motion.div className="job-head" variants={fadeUp}>
              <div>
                <h3 className="job-company">{job.company}</h3>
                <p className="job-role">
                  {t(job.role)}
                  {job.current && (
                    <span className="job-current">
                      <span className="pulse" />
                      {t(ui.experience.current)}
                    </span>
                  )}
                </p>
              </div>
              <div className="job-when">
                <span className="job-period">{t(job.period)}</span>
                <span className="job-note">{t(job.note)}</span>
              </div>
            </motion.div>

            <ul className="job-list">
              {job.bullets.map((b, i) => (
                <motion.li key={i} variants={fadeUp}>
                  {t(b)}
                </motion.li>
              ))}
            </ul>

            <motion.ul className="tags" variants={fadeUp}>
              {job.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </motion.ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
