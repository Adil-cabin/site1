import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useDirection } from '../components/i18n/hooks/useDirection'
import TeamSection from '../components/about/TeamSection'
import ValuesSection from '../components/about/ValuesSection'
import CTASection from '../components/shared/CTASection'

export default function About() {
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
              {t('about.title')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('about.description')}
            </p>
          </motion.div>
          <motion.div 
            className={`mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16 ${isRTL ? 'rtl' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <p>{t('about.content.part1')}</p>
              <p className="mt-8">{t('about.content.part2')}</p>
            </div>
            <div>
              <p>{t('about.content.part3')}</p>
              <p className="mt-8">{t('about.content.part4')}</p>
            </div>
          </motion.div>
        </div>
      </div>
      <ValuesSection />
      <TeamSection />
      <CTASection />
    </div>
  )
}