import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HeartPulse, Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { languages, type LangCode } from '../lib/translations'

const navSections = ['home', 'about', 'features', 'diseases', 'contact'] as const

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'

  function renderNavLink(key: (typeof navSections)[number]) {
    const label = t.nav[key]
    const sectionId = key === 'home' ? 'hero' : key

    if (isHome) {
      return (
        <a
          key={key}
          href={`#${sectionId}`}
          className="text-slate-700 hover:text-[#1E88E5] transition-colors font-medium"
          onClick={() => setIsOpen(false)}
        >
          {label}
        </a>
      )
    }

    return (
      <Link
        key={key}
        to={`/#${sectionId}`}
        className="text-slate-700 hover:text-[#1E88E5] transition-colors font-medium"
        onClick={() => setIsOpen(false)}
      >
        {label}
      </Link>
    )
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <HeartPulse className="h-8 w-8 text-[#1E88E5] group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold text-slate-800">
              Sehat<span className="text-[#1E88E5]">-Saathi</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navSections.map((key) => renderNavLink(key))}
            <Link
              to="/chat"
              className="text-white bg-[#1E88E5] hover:bg-[#1565C0] px-4 py-2 rounded-lg font-medium transition-colors"
            >
              {t.nav.chat}
            </Link>

            {/* Language Selector */}
            <div className="relative flex items-center gap-1">
              <Globe className="h-4 w-4 text-slate-500" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as LangCode)}
                className="appearance-none bg-transparent text-sm text-slate-700 font-medium cursor-pointer pr-4 focus:outline-none"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <div className="relative flex items-center gap-1">
              <Globe className="h-4 w-4 text-slate-500" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as LangCode)}
                className="appearance-none bg-transparent text-sm text-slate-700 font-medium cursor-pointer pr-2 focus:outline-none"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-3 pb-4 pt-2">
                {navSections.map((key) => (
                  <div key={key} className="px-2">
                    {renderNavLink(key)}
                  </div>
                ))}
                <div className="px-2">
                  <Link
                    to="/chat"
                    className="inline-block text-white bg-[#1E88E5] hover:bg-[#1565C0] px-4 py-2 rounded-lg font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.nav.chat}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
