import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useDirection } from '../components/i18n/hooks/useDirection'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import AppointmentCalendar from '../components/appointments/AppointmentCalendar'

export default function Contact() {
  const { t } = useTranslation()
  const { isRTL } = useDirection()

  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <motion.div 
          className={`text-center ${isRTL ? 'rtl' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('contact.appointment.title')}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {t('contact.appointment.description')}
          </p>
        </motion.div>
        
        <div className="mt-16 mb-16">
          <AppointmentCalendar />
        </div>

        <motion.div 
          className={`text-center mt-24 ${isRTL ? 'rtl' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className={`mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 ${isRTL ? 'rtl' : ''}`}>
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}