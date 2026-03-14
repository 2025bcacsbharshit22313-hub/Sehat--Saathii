import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const contactInfo = [
  { icon: Mail, label: 'support@sehat-saathi.in', heading: 'Email' },
  { icon: Phone, label: '+91 1800-XXX-XXXX', heading: 'Phone' },
  { icon: MapPin, label: 'New Delhi, India', heading: 'Location' },
]

export default function ContactSection() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.currentTarget.reset()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="bg-slate-50 py-20 md:py-28">
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
            {t.contact.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder={t.contact.name}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder={t.contact.email}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder={t.contact.message}
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors"
              >
                {t.contact.send}
                <Send className="h-4 w-4" />
              </button>
            </form>

            {/* Success message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 p-4 text-green-700"
              >
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm font-medium">Message sent successfully! We&apos;ll get back to you soon.</span>
              </motion.div>
            )}
          </motion.div>

          {/* Right: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            {contactInfo.map((info) => (
              <div
                key={info.heading}
                className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                  <info.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{info.heading}</h4>
                  <p className="text-sm text-slate-600 mt-0.5">{info.label}</p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <h4 className="font-semibold text-slate-900 mb-2">Our Team</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sehat-Saathi is built by a passionate team of developers and healthcare
                enthusiasts dedicated to making quality health information accessible to
                every Indian.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
