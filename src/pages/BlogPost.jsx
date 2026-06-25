import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { posts } from '../data'
import { ArrowRight, Calendar, Clock } from '../components/Icons'
import './BlogPost.css'

function formatDate(iso) {
  // 2026-05-12 -> 12.05.2026
  const [y, m, d] = (iso || '').split('-')
  if (!y || !m || !d) return iso
  return `${d}.${m}.${y}`
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="container post-missing">
        <p className="section-eyebrow">// 404</p>
        <h1 className="section-title">Maqola topilmadi</h1>
        <p className="section-desc">
          Kechirasiz, bunday maqola mavjud emas yoki o'chirilgan.
        </p>
        <Link to="/#blog" className="btn btn-ghost post-back">
          <ArrowRight style={{ transform: 'rotate(180deg)' }} /> Blogga qaytish
        </Link>
      </div>
    )
  }

  return (
    <article className="post">
      <div className="container post-inner">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/#blog" className="post-backlink">
            <ArrowRight style={{ transform: 'rotate(180deg)' }} width={16} height={16} />
            Barcha maqolalar
          </Link>

          <div className="post-meta">
            <span className="post-meta-item">
              <Calendar width={15} height={15} /> {formatDate(post.date)}
            </span>
            <span className="post-meta-item">
              <Clock width={15} height={15} /> {post.readTime}
            </span>
          </div>

          <h1 className="post-title">{post.title}</h1>

          {post.tags?.length > 0 && (
            <div className="post-tags">
              {post.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="post-body">
            {post.body?.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <hr className="post-divider" />
          <Link to="/#blog" className="btn btn-ghost">
            <ArrowRight style={{ transform: 'rotate(180deg)' }} /> Blogga qaytish
          </Link>
        </motion.div>
      </div>
    </article>
  )
}
