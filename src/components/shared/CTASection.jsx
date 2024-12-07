import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDirection } from '../i18n/hooks/useDirection'

export default function CTASection() {
  const { t } = useTranslation()
  const { isRTL } = useDirection()

  return (
    <div className="bg-indigo-50">
      <div className={`mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8 ${isRTL ? 'rtl' : ''}`}>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('cta.title')}
            <br />
            {t('cta.subtitle')}
          </h2>
        </div>
        <div className={`mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Link
            to="/contact"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {t('cta.appointment')}
          </Link>
          <Link
            to="/services"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {t('cta.learnMore')} <span aria-hidden="true">{isRTL ? '←' : '→'}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}