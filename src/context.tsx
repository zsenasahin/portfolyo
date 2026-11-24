import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import type { L, Lang } from './content'

type Theme = 'light' | 'dark'
type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  theme: Theme
  toggleTheme: () => void
  t: (s: L) => string
}

const AppCtx = createContext<Ctx | null>(null)

const read = (k: string) => {
  try {
    return localStorage.getItem(k)
  } catch {
    return null
  }
}
const write = (k: string, v: string) => {
  try {
    localStorage.setItem(k, v)
  } catch {
    /* gizli sekme vb. */
  }
}

function initialLang(): Lang {
  const saved = read('lang')
  if (saved === 'tr' || saved === 'en') return saved
  return navigator.language?.toLowerCase().startsWith('tr') ? 'tr' : 'en'
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)
  const [theme, setTheme] = useState<Theme>(
    () => (document.documentElement.dataset.theme as Theme) || 'light',
  )

  useEffect(() => {
    document.documentElement.lang = lang
    document.title =
      lang === 'tr' ? 'Zeynep Sena Şahin · Yazılım Mühendisi' : 'Zeynep Sena Şahin · Software Engineer'
  }, [lang])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    write('lang', l)
  }, [])

  const toggleTheme = useCallback(() => {
    const apply = () =>
      setTheme((p) => {
        const n = p === 'dark' ? 'light' : 'dark'
        write('theme', n)
        return n
      })
    // Destekleyen tarayıcılarda tema geçişini yumuşak bir çapraz geçişle yap
    const d = document as Document & { startViewTransition?: (cb: () => void) => unknown }
    if (d.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      d.startViewTransition(apply)
    } else apply()
  }, [])

  const t = useCallback((s: L) => s[lang], [lang])

  return <AppCtx.Provider value={{ lang, setLang, theme, toggleTheme, t }}>{children}</AppCtx.Provider>
}

export function useApp() {
  const c = useContext(AppCtx)
  if (!c) throw new Error('useApp must be used inside AppProvider')
  return c
}
