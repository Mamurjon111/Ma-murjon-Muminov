import { Link } from 'react-router-dom'
import { posts } from '../data'
import Reveal from '../components/Reveal'
import { ArrowRight, Calendar, Clock } from '../components/Icons'
import './Blog.css'

function formatDate(iso) {
  // 2026-05-12 -> 12.05.2026
  const [y, m, d] = (iso || '').split('-')
  if (!y || !m || !d) return iso
  return `${d}.${m}.${y}`
}

export default function Blog() {
  // Eng yangisi birinchi (mudofaa uchun sana bo'yicha tartiblaymiz)
  const sorted = [...(posts || [])].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )

  return (
    <section id="blog" className="section" aria-labelledby="blog-title">
      <div className="container">
        <Reveal>
          <header className="blog-head">
            <span className="section-eyebrow">// blog</span>
            <h2 id="blog-title" className="section-title">
              So'nggi maqolalar
            </h2>
            <p className="section-desc">
              Frontend, React va o'rganish jarayonim haqidagi yozuvlar — qisqa,
              amaliy va tajribadan kelib chiqqan.
            </p>
          </header>
        </Reveal>

        {sorted.length === 0 ? (
          <Reveal>
            <div className="blog-empty card">
              <Calendar width={28} height={28} aria-hidden="true" />
              <p className="blog-empty-text">Hozircha maqola yo'q</p>
            </div>
          </Reveal>
        ) : (
          <ul className="blog-grid">
            {sorted.map((post, i) => (
              <Reveal
                as="li"
                key={post.slug}
                delay={Math.min(i * 0.08, 0.4)}
                className="blog-item"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="card blog-card"
                  aria-label={`${post.title} — maqolani o'qish`}
                >
                  <div className="blog-meta">
                    <span className="blog-meta-item">
                      <Calendar width={15} height={15} aria-hidden="true" />
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </span>
                    {post.readTime && (
                      <span className="blog-meta-item">
                        <Clock width={15} height={15} aria-hidden="true" />
                        {post.readTime}
                      </span>
                    )}
                  </div>

                  <h3 className="blog-card-title">{post.title}</h3>

                  {post.excerpt && (
                    <p className="blog-excerpt">{post.excerpt}</p>
                  )}

                  {post.tags?.length > 0 && (
                    <ul className="blog-tags">
                      {post.tags.map((tag) => (
                        <li key={tag} className="chip">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}

                  <span className="blog-readmore">
                    O'qish
                    <ArrowRight
                      className="blog-readmore-icon"
                      width={16}
                      height={16}
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
