import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'

const tiers = [
  {
    name: 'Consultation unique',
    id: 'tier-basic',
    price: '400',
    description: 'Idéal pour une première consultation ou un besoin ponctuel.',
    features: [
      'Séance de 50 minutes',
      'Choix du psychologue',
      'En cabinet ou en ligne',
      'Paiement sécurisé',
    ],
  },
  {
    name: 'Pack 5 séances',
    id: 'tier-standard',
    price: '1800',
    description: 'Recommandé pour un suivi régulier avec un meilleur tarif.',
    features: [
      '5 séances de 50 minutes',
      'Choix du psychologue',
      'En cabinet ou en ligne',
      'Paiement sécurisé',
      'Tarif préférentiel',
      'Flexibilité des horaires',
    ],
  },
  {
    name: 'Pack 10 séances',
    id: 'tier-premium',
    price: '3200',
    description: 'La solution optimale pour un accompagnement complet.',
    features: [
      '10 séances de 50 minutes',
      'Choix du psychologue',
      'En cabinet ou en ligne',
      'Paiement sécurisé',
      'Meilleur tarif',
      'Flexibilité des horaires',
      'Suivi personnalisé',
    ],
  },
]

export default function PricingSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tarifs</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Des formules adaptées à vos besoins avec un excellent rapport qualité-prix.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl p-8 ring-1 ring-gray-200 ${
                index === 1 ? 'bg-gray-900 text-white ring-gray-900' : 'bg-white'
              }`}
            >
              <h3 className={`text-lg font-semibold leading-8 ${index === 1 ? 'text-white' : 'text-gray-900'}`}>
                {tier.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                <span className="text-sm font-semibold">MAD</span>
              </p>
              <Link
                to="/contact"
                className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  index === 1
                    ? 'bg-white text-gray-900 hover:bg-gray-100 focus-visible:outline-white'
                    : 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600'
                }`}
              >
                Prendre rendez-vous
              </Link>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <FiCheck
                      className={`h-6 w-5 flex-none ${index === 1 ? 'text-white' : 'text-indigo-600'}`}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}