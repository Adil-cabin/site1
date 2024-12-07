import { motion } from 'framer-motion'
import { FiHeart, FiShield, FiUsers, FiStar } from 'react-icons/fi'

const values = [
  {
    name: 'Empathie',
    description: 'Nous écoutons avec bienveillance et compréhension, créant un espace sûr pour l\'expression de vos émotions.',
    icon: FiHeart,
  },
  {
    name: 'Confidentialité',
    description: 'Votre vie privée est notre priorité. Nous garantissons la confidentialité absolue de nos échanges.',
    icon: FiShield,
  },
  {
    name: 'Professionnalisme',
    description: 'Notre équipe de psychologues qualifiés s\'engage à fournir des services de la plus haute qualité.',
    icon: FiUsers,
  },
  {
    name: 'Excellence',
    description: 'Nous nous efforçons constamment d\'améliorer nos services pour mieux répondre à vos besoins.',
    icon: FiStar,
  },
]

export default function ValuesSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Nos valeurs</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ce qui nous définit
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nos valeurs fondamentales guident chacune de nos actions et interactions avec nos patients.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="flex flex-col items-center text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {value.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto text-center">{value.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}