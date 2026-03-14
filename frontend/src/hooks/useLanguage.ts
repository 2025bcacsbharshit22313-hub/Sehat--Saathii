import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type LangCode } from '../lib/translations'

interface LanguageContextType {
  language: LangCode
  setLanguage: (lang: LangCode) => void
  t: (typeof translations)[LangCode]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LangCode>('en')

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
