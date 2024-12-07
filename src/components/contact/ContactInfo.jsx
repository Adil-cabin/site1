import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'

const contactDetails = [
  {
    icon: FiMapPin,
    title: 'Adresse',
    content: '123 Rue Example, Ville, Maroc',
  },
  {
    icon: FiPhone,
    title: 'Téléphone',
    content: '+212 123 456 789',
  },
  {
    icon: FiMail,
    title: 'Email',
    content: 'contact@monpsy.net.ma',
  },
  {
    icon: FiClock,
    title: 'Horaires',
    content: 'Lun-Ven: 9h-18h\nSam: 9h-13h',
  },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {contactDetails.map((detail, index) => (
        <motion.div
          key={detail.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex gap-4"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
            <detail.icon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900">{detail.title}</h3>
            <p className="mt-2 leading-7 text-gray-600 whitespace-pre-line">{detail.content}</p>
          </div>
        </motion.div>
      ))}

      <div className="mt-8 pt-8 border-t border-gray-200">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846447471236!2d-7.6192!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjIiTiA3wrAzNycwOS4xIlc!5e0!3m2!1sfr!2sma!4v1620000000000!5m2!1sfr!2sma"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-md"
        />
      </div>
    </motion.div>
  )
}