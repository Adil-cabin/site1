import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useDirection } from '../i18n/hooks/useDirection'
import { FiBriefcase, FiHeart, FiUsers, FiSmile, FiStar, FiBookOpen } from 'react-icons/fi'

export default function ServicesList() {
  const { t } = useTranslation()
  const { isRTL } = useDirection()

  const services = [
    {
      name: t('services.items.individual.title'),
      description: t('services.items.individual.description'),
      icon: FiHeart,
    },
    {
      name: t('services.items.couple.title'),
      description: t('services.items.couple.description'),
      icon: FiUsers,
    },
    {
      name: t('services.items.family.title'),
      description: t('services.items.family.description'),
      icon: FiSmile,
    },
    {
      name: t('services.items.professional.title'),
      description: t('services.items.professional.description'),
      icon: FiBriefcase,
    },
    {
      name: t('services.items.stress.title'),
      description: t('services.items.stress.description'),
      icon: FiStar,
    },
    {
      name: t('services.items.development.title'),
      description: t('services.items.development.description'),
      icon: FiBookOpen,
    },
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mx-auto max-w-2xl lg:text-center ${isRTL ? 'rtl' : ''}`}>
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            {t('services.list.title')}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('services.list.subtitle')}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('services.list.description')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className={`grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 ${isRTL ? 'rtl' : ''}`}>
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className={`flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className={`flex-auto ${isRTL ? 'text-right' : ''}`}>{service.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}