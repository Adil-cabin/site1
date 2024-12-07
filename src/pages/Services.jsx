import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useDirection } from '../components/i18n/hooks/useDirection'
import ServicesList from '../components/services/ServicesList'
import PricingSection from '../components/services/PricingSection'
import FAQSection from '../components/services/FAQSection'
import CTASection from '../components/shared/CTASection'

export default function Services() {
  const { t } = useTranslation()
  const { isRTL } = useDirection()

  return (
    <div className="space-y-20 pb-20">
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className={`mx-auto max-w-2xl lg:mx-0 ${isRTL ? 'lg:text-right' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t('services.title')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('services.description')}
            </p>
          </motion.div>
        </div>
      </div>
      <ServicesList />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}