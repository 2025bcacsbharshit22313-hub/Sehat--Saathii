import { motion } from 'framer-motion'
import { Users, Globe, HeartPulse, Shield } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const stats = [
  { icon: Users, label: '10M+ Users', color: 'bg-blue-100 text-blue-600' },
  { icon: Globe, label: '8 Languages', color: 'bg-green-100 text-green-600' },
  { icon: HeartPulse, label: '24/7 Available', color: 'bg-red-100 text-red-600' },
  { icon: Shield, label: '100% Free', color: 'bg-purple-100 text-purple-600' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t.about.title}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              {t.about.description1}
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              {t.about.description2}
            </p>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`rounded-xl p-3 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <span className="text-base font-semibold text-slate-800 text-center">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
