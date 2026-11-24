import Lenis from 'lenis'

let lenis: Lenis | null = null
const NAV_OFFSET = 80

/** Klavyeyle atlanacak duraklar: her bölüm + projeler içindeki büyük kartlar */
const STOP_SELECTOR = 'section[id], .featured, .more-title'

export function initSmoothScroll() {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  let raf = 0
  if (!reduce) {
    lenis = new Lenis({
      lerp: 0.11, // daha tepkili, "ağır" hissettirmeyen yumuşatma
      wheelMultiplier: 1.35, // tekerlekle bir çevirmede daha fazla yol al
      touchMultiplier: 1.2,
    })
    const loop = (time: number) => {
      lenis?.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
  }

  window.addEventListener('keydown', onKey)
  return () => {
    window.removeEventListener('keydown', onKey)
    cancelAnimationFrame(raf)
    lenis?.destroy()
    lenis = null
  }
}

function stops(): number[] {
  const y = window.scrollY
  const list = Array.from(document.querySelectorAll<HTMLElement>(STOP_SELECTOR)).map((el) =>
    el.id === 'top' ? 0 : Math.max(0, Math.round(el.getBoundingClientRect().top + y - NAV_OFFSET)),
  )
  const max = document.documentElement.scrollHeight - window.innerHeight
  list.push(max)
  return [...new Set(list.map((v) => Math.min(v, max)))].sort((a, b) => a - b)
}

function scrollToY(y: number) {
  if (lenis) lenis.scrollTo(y, { duration: 0.9, easing: (t) => 1 - Math.pow(1 - t, 3) })
  else window.scrollTo({ top: y, behavior: 'smooth' })
}

function onKey(e: KeyboardEvent) {
  if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return
  const el = e.target as HTMLElement | null
  if (el?.closest('input, textarea, select, [contenteditable="true"]')) return
  // Menü açıkken (kaydırma kilitli) dokunma
  if (document.documentElement.style.overflow === 'hidden') return

  let dir = 0
  switch (e.key) {
    case 'ArrowDown':
    case 'PageDown':
      dir = 1
      break
    case 'ArrowUp':
    case 'PageUp':
      dir = -1
      break
    case ' ':
      // Odaktaki buton/linki tetiklemek için boşluğu bırak
      if (el?.closest('button, a, [role="tab"]')) return
      dir = e.shiftKey ? -1 : 1
      break
    case 'Home':
      e.preventDefault()
      return scrollToY(0)
    case 'End':
      e.preventDefault()
      return scrollToY(document.documentElement.scrollHeight)
    default:
      return
  }
  e.preventDefault()

  // Animasyon sürerken art arda basışlarda hedeften devam et
  const current = lenis ? lenis.targetScroll : window.scrollY
  const list = stops()
  const next =
    dir > 0 ? list.find((s) => s > current + 8) : [...list].reverse().find((s) => s < current - 8)
  if (next !== undefined) scrollToY(next)
}

export function scrollToId(id: string) {
  const el = id === 'top' ? 0 : document.getElementById(id)
  if (el === null) return
  if (lenis) lenis.scrollTo(el, { offset: id === 'top' ? 0 : -72 })
  else if (el === 0) window.scrollTo({ top: 0, behavior: 'smooth' })
  else el.scrollIntoView({ behavior: 'smooth' })
}

export function lockScroll(lock: boolean) {
  if (lenis) lock ? lenis.stop() : lenis.start()
  document.documentElement.style.overflow = lock ? 'hidden' : ''
}
