import { motion } from 'framer-motion'
import { Disclosure } from '@headlessui/react'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    question: "Comment se déroule une première consultation ?",
    answer: "La première consultation est un moment d'échange où nous prenons le temps de comprendre vos besoins et vos attentes. Nous discutons de ce qui vous amène à consulter et définissons ensemble les objectifs de la thérapie."
  },
  {
    question: "Quelle est la durée d'une séance ?",
    answer: "Une séance dure généralement 50 minutes. Cette durée permet un échange approfondi tout en maintenant une dynamique thérapeutique efficace."
  },
  {
    question: "Les consultations sont-elles remboursées ?",
    answer: "Les consultations peuvent être partiellement remboursées selon votre couverture médicale. Nous vous fournirons une facture détaillée pour votre assurance."
  },
  {
    question: "Comment se passent les consultations en ligne ?",
    answer: "Les consultations en ligne se déroulent via une plateforme sécurisée. Vous recevrez un lien avant votre séance. Assurez-vous d'avoir une bonne connexion internet et un endroit calme."
  },
  {
    question: "Puis-je changer de psychologue si je ne me sens pas à l'aise ?",
    answer: "Oui, absolument. La relation thérapeutique est essentielle pour le succès de la thérapie. Si vous ne vous sentez pas à l'aise, nous vous aiderons à trouver un autre psychologue de notre équipe."
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Questions fréquentes</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pt-6"
              >
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">{faq.question}</span>
                          <span className="ml-6 flex h-7 items-center">
                            <FiChevronDown
                              className={classNames(
                                open ? '-rotate-180' : 'rotate-0',
                                'h-6 w-6 transform transition duration-300'
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}