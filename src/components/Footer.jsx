import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="space-y-8 md:flex-1">
          <Link to="/" className="text-2xl font-bold text-white">MonPsy</Link>
          <div className="mt-4 space-y-4">
            <div className="flex items-center text-gray-400">
              <FiPhone className="h-5 w-5 mr-2" />
              <span>+212 123 456 789</span>
            </div>
            <div className="flex items-center text-gray-400">
              <FiMail className="h-5 w-5 mr-2" />
              <span>contact@monpsy.net.ma</span>
            </div>
            <div className="flex items-center text-gray-400">
              <FiMapPin className="h-5 w-5 mr-2" />
              <span>123 Rue Example, Ville, Maroc</span>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:flex-1">
          <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
          <ul role="list" className="mt-6 space-y-4">
            <li>
              <Link to="/" className="text-sm leading-6 text-gray-300 hover:text-white">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm leading-6 text-gray-300 hover:text-white">
                À Propos
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-sm leading-6 text-gray-300 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0 md:flex-1">
          <h3 className="text-sm font-semibold leading-6 text-white">Horaires</h3>
          <ul role="list" className="mt-6 space-y-4 text-sm leading-6 text-gray-300">
            <li>Lundi - Vendredi: 9h - 18h</li>
            <li>Samedi: 9h - 13h</li>
            <li>Dimanche: Fermé</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-8">
        <p className="text-xs leading-5 text-gray-400 text-center">
          &copy; {new Date().getFullYear()} MonPsy. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}