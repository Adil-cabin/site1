import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDirection } from '../i18n/hooks/useDirection'

export default function BlogSidebar() {
  const { t } = useTranslation()
  const { isRTL } = useDirection()

  const categories = t('blog.categories', { returnObjects: true })
  const recentPosts = t('blog.recentPosts', { returnObjects: true })

  return (
    <div className="lg:col-span-1">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className={`space-y-8 ${isRTL ? 'rtl' : ''}`}
      >
        {/* Categories */}
        <div className="border-b border-gray-200 pb-8">
          <h3 className={`text-lg font-semibold text-gray-900 ${isRTL ? 'text-right' : ''}`}>
            {t('blog.sidebar.categories')}
          </h3>
          <ul className="mt-4 space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/blog/category/${category.id}`}
                  className={`text-gray-600 hover:text-indigo-600 ${isRTL ? 'block text-right' : ''}`}
                >
                  {category.name} ({category.count})
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className={`text-lg font-semibold text-gray-900 ${isRTL ? 'text-right' : ''}`}>
            {t('blog.sidebar.recentPosts')}
          </h3>
          <ul className="mt-4 space-y-4">
            {recentPosts.map((post) => (
              <li key={post.id}>
                <Link
                  to={`/blog/${post.id}`}
                  className={`block hover:text-indigo-600 ${isRTL ? 'text-right' : ''}`}
                >
                  <h4 className="text-gray-900">{post.title}</h4>
                  <p className="mt-1 text-sm text-gray-500">{post.date}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}