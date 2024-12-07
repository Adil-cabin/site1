import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import { SUPPORTED_LANGUAGES } from './components/i18n/constants'

export default function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const currentLang = localStorage.getItem('i18nextLng')
    if (!currentLang || !Object.values(SUPPORTED_LANGUAGES).includes(currentLang)) {
      i18n.changeLanguage(SUPPORTED_LANGUAGES.FR)
    }
  }, [i18n])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}