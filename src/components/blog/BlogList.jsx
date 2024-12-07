import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDirection } from '../i18n/hooks/useDirection'

export default function BlogList() {
  const { t } = useTranslation()
  const { isRTL } = useDirection()

  const articles = t('blog.articles', { returnObjects: true })

  return (
    <div className="lg:col-span-2">
      <div className="space-y-8">
        {articles.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative isolate flex flex-col gap-8 lg:flex-row ${isRTL ? 'rtl' : ''}`}
          >
            <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
              <img
                src={article.image}
                alt={article.title}
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={article.date} className="text-gray-500">
                  {article.date}
                </time>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {article.category}
                </span>
              </div>
              <div className="group relative max-w-xl">
                <h3 className={`mt-3 text-lg font-semibold leading-6 text-gray-900 ${isRTL ? 'text-right' : ''}`}>
                  <Link to={`/blog/${article.id}`}>
                    <span className="absolute inset-0" />
                    {article.title}
                  </Link>
                </h3>
                <p className={`mt-5 text-sm leading-6 text-gray-600 ${isRTL ? 'text-right' : ''}`}>
                  {article.excerpt}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}