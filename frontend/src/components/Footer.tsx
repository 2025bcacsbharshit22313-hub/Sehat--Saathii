import { Link } from 'react-router-dom'
import { HeartPulse, Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-br from-[#1565C0] to-[#1E88E5] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <HeartPulse className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
              <span className="text-xl font-bold text-white">
                Sehat<span className="text-blue-200">-Saathi</span>
              </span>
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.links}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-blue-100 hover:text-white transition-colors text-sm">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-white transition-colors text-sm">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#features" className="text-blue-100 hover:text-white transition-colors text-sm">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#diseases" className="text-blue-100 hover:text-white transition-colors text-sm">
                  {t.nav.diseases}
                </a>
              </li>
              <li>
                <Link to="/chat" className="text-blue-100 hover:text-white transition-colors text-sm">
                  {t.nav.chat}
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors text-sm">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-blue-100 text-sm">
                <Mail className="h-4 w-4 shrink-0" />
                <span>support@sehat-saathi.in</span>
              </li>
              <li className="flex items-center gap-3 text-blue-100 text-sm">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+91 1800-XXX-XXXX</span>
              </li>
              <li className="flex items-start gap-3 text-blue-100 text-sm">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-blue-400/30 text-center">
          <p className="text-blue-200 text-sm">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
