import { profile, siteName, contact } from '../data'
import { socialIcons } from './Icons'
import './Footer.css'

/* Footer havolalari — Navbar bilan bir xil "/#..." konvensiyasi.
   "/" prefiksi blog sahifasidan ham bosh sahifa bo'limlariga olib boradi. */
const footerLinks = [
  { href: '/#about', label: 'Men haqimda' },
  { href: '/#projects', label: 'Loyihalar' },
  { href: '/#blog', label: 'Blog' },
  { href: '/#contact', label: 'Aloqa' },
]

// Tasdiqlangan ijtimoiy tarmoqlar (ikonkasi mavjudlari)
const socials = contact.socials.filter((s) => socialIcons[s.icon])

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Sayt pastki qismi
      </h2>

      <div className="footer-inner container">
        {/* Chap — brend va mualliflik */}
        <div className="footer-brand">
          <a className="footer-name" href="/#" aria-label={`${siteName} — bosh sahifa`}>
            <span className="grad-text">{siteName}</span>
            <span className="footer-dot" aria-hidden="true" />
          </a>
          <p className="footer-role">Frontend dasturchi</p>
          <p className="footer-copy">
            © 2026 {profile.name}. Barcha huquqlar himoyalangan.
          </p>
        </div>

        {/* O'ng — tezkor havolalar + ijtimoiy tarmoqlar */}
        <div className="footer-end">
          <nav className="footer-nav" aria-label="Pastki navigatsiya">
            <ul className="footer-links">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a className="footer-link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {socials.length > 0 && (
            <ul className="footer-socials">
              {socials.map((social) => {
                const Icon = socialIcons[social.icon]
                return (
                  <li key={social.name}>
                    <a
                      className="footer-social"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <Icon width={18} height={18} aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>

      {/* "Made with" — nozik, lotincha hisoblantiruvchi qator */}
      <div className="footer-made container">
        <span className="footer-made-text">React va Vite yordamida qurilgan</span>
      </div>
    </footer>
  )
}
