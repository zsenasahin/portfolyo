import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, ArrowUpRight, Check, Copy, Download, Mail } from 'lucide-react'
import { useState } from 'react'
import { profile, ui } from '../content'
import { useApp } from '../context'
import { scrollToId } from '../scroll'
import { GithubIcon, LinkedinIcon, Reveal, SectionHead } from './ui'

export default function Contact() {
  const { t } = useApp()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <>
      <section id="contact" className="section contact">
        <SectionHead index="06" eyebrow={t(ui.contact.eyebrow)} title={t(ui.contact.title)} />
        <Reveal as="p" className="contact-text">
          {t(ui.contact.text)}
        </Reveal>

        <Reveal className="mail-box card" delay={0.1}>
          <a href={`mailto:${profile.email}`} className="mail-link">
            <Mail size={22} />
            <span>{profile.email}</span>
          </a>
          <button className="copy-btn" onClick={copy} aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={copied ? 'y' : 'n'}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="copy-inner"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {t(copied ? ui.contact.copied : ui.contact.copy)}
              </motion.span>
            </AnimatePresence>
          </button>
        </Reveal>

        <Reveal className="contact-links" delay={0.2}>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link card">
            <LinkedinIcon size={22} />
            <span>LinkedIn</span>
            <ArrowUpRight size={18} className="cl-arrow" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="contact-link card">
            <GithubIcon size={22} />
            <span>GitHub</span>
            <ArrowUpRight size={18} className="cl-arrow" />
          </a>
          <a href={t(profile.cv)} download className="contact-link card">
            <Download size={22} />
            <span>{t(ui.hero.ctaCv)}</span>
            <ArrowUpRight size={18} className="cl-arrow" />
          </a>
        </Reveal>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Zeynep Sena Şahin · {t(ui.contact.footer)}
        </p>
        <button className="to-top" onClick={() => scrollToId('top')}>
          {t(ui.contact.top)} <ArrowUp size={16} />
        </button>
      </footer>
    </>
  )
}
