import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // Handle form submission
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white px-6 py-8 sm:p-8 rounded-lg shadow-lg"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
            Nom complet
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Le nom est requis' })}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2">
            <input
              type="email"
              id="email"
              {...register('email', { 
                required: 'L\'email est requis',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Adresse email invalide'
                }
              })}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
            Téléphone
          </label>
          <div className="mt-2">
            <input
              type="tel"
              id="phone"
              {...register('phone', { required: 'Le numéro de téléphone est requis' })}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.phone && (
              <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium leading-6 text-gray-900">
            Service souhaité
          </label>
          <div className="mt-2">
            <select
              id="service"
              {...register('service', { required: 'Veuillez sélectionner un service' })}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Sélectionnez un service</option>
              <option value="individual">Thérapie individuelle</option>
              <option value="couple">Thérapie de couple</option>
              <option value="family">Thérapie familiale</option>
              <option value="coaching">Coaching professionnel</option>
              <option value="stress">Gestion du stress</option>
              <option value="development">Développement personnel</option>
            </select>
            {errors.service && (
              <p className="mt-2 text-sm text-red-600">{errors.service.message}</p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
            Message
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              rows={4}
              {...register('message', { required: 'Le message est requis' })}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.message && (
              <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Envoyer
          </button>
        </div>
      </form>
    </motion.div>
  )
}