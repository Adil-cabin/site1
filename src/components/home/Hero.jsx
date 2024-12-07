import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useDirection } from '../i18n/hooks/useDirection'

export default function Hero() {
  const { t } = useTranslation()
  const { isRTL } = useDirection()

  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <motion.div 
          className={`mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8 ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('hero.subtitle')}
          </p>
          <div className={`mt-10 flex items-center gap-x-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Link
              to="/contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {t('hero.cta.appointment')}
            </Link>
            <Link
              to="/services"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {t('hero.cta.services')} <span aria-hidden="true">{isRTL ? '←' : '→'}</span>
            </Link>
          </div>
        </motion.div>
        <motion.div 
          className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
              alt={t('hero.imageAlt')}
              className="w-[76rem] rounded-md bg-gray-900/5 object-cover shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}