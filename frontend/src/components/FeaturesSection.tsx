import { motion } from 'framer-motion'
import { Bot, Globe, Shield, HeartPulse, Search, Clock } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const features = [
  {
    icon: Bot,
    title: 'AI Health Chatbot',
    description: 'Get instant health guidance from our AI assistant',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Globe,
    title: 'Multilingual Support',
    description: 'Available in 8 Indian languages',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Shield,
    title: 'Disease Awareness',
    description: 'Learn about common diseases and prevention',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: HeartPulse,
    title: 'Preventive Care',
    description: 'Tips for maintaining good health',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: Search,
    title: 'Symptom Analysis',
    description: 'Understand your symptoms better',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Clock,
    title: '24/7 Available',
    description: 'Access health information anytime',
    color: 'bg-teal-100 text-teal-600',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section id="features" className="bg-slate-50 py-20 md:py-28">
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
            {t.features.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className={`inline-flex rounded-xl p-3 ${feature.color} mb-4`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
