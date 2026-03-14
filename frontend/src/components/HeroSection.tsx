import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, ChevronDown } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const floatingEmojis = [
  { emoji: '💊', x: '10%', y: '20%', delay: 0, duration: 6 },
  { emoji: '🩺', x: '85%', y: '15%', delay: 1, duration: 7 },
  { emoji: '❤️', x: '75%', y: '70%', delay: 2, duration: 5 },
  { emoji: '🏥', x: '15%', y: '75%', delay: 0.5, duration: 8 },
  { emoji: '🧬', x: '90%', y: '45%', delay: 1.5, duration: 6.5 },
  { emoji: '🌡️', x: '5%', y: '50%', delay: 2.5, duration: 7.5 },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-teal-500"
    >
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Floating emojis */}
      {floatingEmojis.map((item, i) => (
        <motion.span
          key={i}
          className="absolute text-3xl md:text-4xl select-none pointer-events-none"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut' as const,
          }}
        >
          {item.emoji}
        </motion.span>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm border border-white/20">
              <Sparkles className="h-4 w-4" />
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl"
          >
            {t.hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-blue-100 max-w-2xl"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Link
              to="/chat"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              {t.hero.cta}
              <ArrowRight className="h-5 w-5" />
            </Link>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              {t.hero.ctaSecondary}
              <ChevronDown className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
