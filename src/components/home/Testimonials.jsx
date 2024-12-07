import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useDirection } from '../i18n/hooks/useDirection'

export default function Testimonials() {
  const { t } = useTranslation()
  const { isRTL } = useDirection()

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mx-auto max-w-xl text-center ${isRTL ? 'rtl' : ''}`}>
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            {t('testimonials.title')}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('testimonials.subtitle')}
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ${isRTL ? 'rtl' : ''}`}>
            {t('testimonials.items', { returnObjects: true }).map((testimonial, index) => (
              <motion.figure
                key={index}
                className="rounded-2xl bg-gray-50 p-8 text-sm leading-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <blockquote className={`text-gray-900 ${isRTL ? 'text-right' : ''}`}>
                  <p>{`"${testimonial.content}"`}</p>
                </blockquote>
                <figcaption className={`mt-6 flex items-center gap-x-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={isRTL ? 'text-right' : ''}>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}