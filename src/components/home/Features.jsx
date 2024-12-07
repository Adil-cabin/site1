import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useDirection } from '../i18n/hooks/useDirection'
import { FiClock, FiHeart, FiShield, FiUsers } from 'react-icons/fi'

export default function Features() {
  const { t } = useTranslation()
  const { isRTL } = useDirection()

  const features = [
    {
      name: t('features.items.availability.title'),
      description: t('features.items.availability.description'),
      icon: FiClock,
    },
    {
      name: t('features.items.personalized.title'),
      description: t('features.items.personalized.description'),
      icon: FiHeart,
    },
    {
      name: t('features.items.confidentiality.title'),
      description: t('features.items.confidentiality.description'),
      icon: FiShield,
    },
    {
      name: t('features.items.qualified.title'),
      description: t('features.items.qualified.description'),
      icon: FiUsers,
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className={`mx-auto max-w-2xl lg:text-center ${isRTL ? 'rtl' : ''}`}>
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          {t('features.title')}
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t('features.subtitle')}
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {t('features.description')}
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className={`grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4 ${isRTL ? 'rtl' : ''}`}>
          {features.map((feature, index) => (
            <motion.div 
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <dt className={`text-base font-semibold leading-7 text-gray-900 ${isRTL ? 'text-right' : ''}`}>
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className={`flex-auto ${isRTL ? 'text-right' : ''}`}>{feature.description}</p>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  )
}