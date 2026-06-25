import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons'

export default function NotFound() {
  return (
    <div
      className="container"
      style={{
        minHeight: 'calc(100dvh - var(--nav-h))',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 'var(--sp-4)',
      }}
    >
      <p className="section-eyebrow" style={{ justifyContent: 'center' }}>
        // 404
      </p>
      <h1 style={{ fontSize: 'var(--fs-display)' }} className="grad-text">
        404
      </h1>
      <p className="section-desc" style={{ marginInline: 'auto' }}>
        Bu sahifa topilmadi. Ehtimol manzil noto'g'ri yoki sahifa ko'chirilgan.
      </p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: 'var(--sp-4)' }}>
        Bosh sahifaga qaytish <ArrowRight />
      </Link>
    </div>
  )
}
