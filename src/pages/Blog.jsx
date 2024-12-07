import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useDirection } from '../components/i18n/hooks/useDirection'
import BlogList from '../components/blog/BlogList'
import BlogSidebar from '../components/blog/BlogSidebar'

export default function Blog() {
  const { t } = useTranslation()
  const { isRTL } = useDirection()

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className={`mx-auto max-w-2xl text-center ${isRTL ? 'rtl' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('blog.title')}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {t('blog.description')}
          </p>
        </motion.div>
        <div className={`mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-3 ${isRTL ? 'rtl' : ''}`}>
          <BlogList />
          <BlogSidebar />
        </div>
      </div>
    </div>
  )
}