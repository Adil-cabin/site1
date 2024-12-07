import { motion } from 'framer-motion'

const team = [
  {
    name: 'Dr. Sarah Benali',
    role: 'Psychologue clinicienne',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    bio: 'Spécialisée en thérapie cognitive comportementale avec plus de 10 ans d\'expérience.',
  },
  {
    name: 'Dr. Mohammed Alami',
    role: 'Psychothérapeute',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    bio: 'Expert en thérapie familiale et de couple, pratiquant depuis 15 ans.',
  },
  {
    name: 'Dr. Fatima Zouari',
    role: 'Psychologue pour enfants',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    bio: 'Spécialisée dans l\'accompagnement des enfants et adolescents.',
  },
]

export default function TeamSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Notre équipe</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Des professionnels à votre écoute
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Une équipe de psychologues expérimentés et passionnés, dédiée à votre bien-être mental.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {team.map((person, index) => (
            <motion.li
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-indigo-600">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}