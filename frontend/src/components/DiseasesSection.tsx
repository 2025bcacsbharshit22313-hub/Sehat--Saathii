import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, AlertCircle, ShieldCheck, Stethoscope } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { diseases } from '../lib/diseases'

type ExpandedState = Record<string, string | null>

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const expandVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } },
}

const sections = [
  { key: 'symptoms', label: 'Symptoms', icon: AlertCircle, field: 'symptoms' as const },
  { key: 'prevention', label: 'Prevention', icon: ShieldCheck, field: 'prevention' as const },
  { key: 'whenToSeeDoctor', label: 'When to See a Doctor', icon: Stethoscope, field: 'whenToSeeDoctor' as const },
]

export default function DiseasesSection() {
  const { t } = useLanguage()
  const [expanded, setExpanded] = useState<ExpandedState>({})

  const toggleSection = (diseaseId: string, sectionKey: string) => {
    setExpanded((prev) => ({
      ...prev,
      [diseaseId]: prev[diseaseId] === sectionKey ? null : sectionKey,
    }))
  }

  // Map disease color classes to border color classes
  const borderColorMap: Record<string, string> = {
    'text-red-500': 'border-l-red-500',
    'text-yellow-600': 'border-l-yellow-600',
    'text-blue-500': 'border-l-blue-500',
    'text-orange-500': 'border-l-orange-500',
    'text-teal-500': 'border-l-teal-500',
    'text-purple-500': 'border-l-purple-500',
  }

  return (
    <section id="diseases" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            {t.diseases.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.diseases.subtitle}
          </p>
        </motion.div>

        {/* Disease cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {diseases.map((disease) => {
            const borderClass = borderColorMap[disease.color] ?? 'border-l-blue-500'
            return (
              <motion.div
                key={disease.id}
                variants={cardVariants}
                className={`rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden border-l-4 ${borderClass}`}
              >
                {/* Card header */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{disease.icon}</span>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {disease.name}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {disease.description}
                  </p>
                </div>

                {/* Expandable sections */}
                <div className="border-t border-slate-100">
                  {sections.map((section) => {
                    const isOpen = expanded[disease.id] === section.key
                    const items = disease[section.field]
                    return (
                      <div key={section.key} className="border-b border-slate-50 last:border-b-0">
                        <button
                          onClick={() => toggleSection(disease.id, section.key)}
                          className="flex w-full items-center justify-between px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <section.icon className="h-4 w-4 text-slate-400" />
                            {section.label}
                          </span>
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="h-4 w-4 text-slate-400" />
                          </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              variants={expandVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="overflow-hidden"
                            >
                              <ul className="px-5 pb-4 space-y-2">
                                {items.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2 text-sm text-slate-600"
                                  >
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
