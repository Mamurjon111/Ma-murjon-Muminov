import Reveal from '../components/Reveal'
import { contact } from '../data'
import { Mail, Phone, ArrowUpRight, socialIcons } from '../components/Icons'
import './Contact.css'

export default function Contact() {
  if (!contact) return null

  const { email, phone, socials = [] } = contact

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <div className="contact-shell">
            <header className="contact-head">
              <span className="section-eyebrow">// aloqa</span>
              <h2 id="contact-title" className="section-title">
                Bog'lanaylik
              </h2>
              <p className="section-desc contact-desc">
                Loyiha taklifi, hamkorlik yoki oddiy savol bo'lsa — bemalol
                yozing. Imkon qadar tez javob berishga harakat qilaman.
              </p>
            </header>

            <div className="card contact-card">
              {email && (
                <div className="contact-primary">
                  <a
                    className="btn btn-primary contact-email-btn"
                    href={`mailto:${email}`}
                    aria-label={`${email} manziliga email yuborish`}
                  >
                    <Mail width={18} height={18} aria-hidden="true" />
                    Email yuborish
                  </a>
                  <a className="contact-email-text" href={`mailto:${email}`}>
                    {email}
                  </a>
                </div>
              )}

              {phone && (
                <a
                  className="contact-phone"
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  aria-label={`${phone} raqamiga qo'ng'iroq qilish`}
                >
                  <span className="contact-phone-icon" aria-hidden="true">
                    <Phone width={18} height={18} />
                  </span>
                  <span>{phone}</span>
                </a>
              )}

              {socials.length > 0 && (
                <>
                  <span className="contact-divider" aria-hidden="true" />
                  <ul className="contact-socials">
                    {socials.map((social) => {
                      const Icon = socialIcons[social.icon]
                      return (
                        <li key={social.name}>
                          <a
                            className="contact-social"
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${social.name} (yangi oynada ochiladi)`}
                          >
                            {Icon && (
                              <Icon width={18} height={18} aria-hidden="true" />
                            )}
                            <span>{social.name}</span>
                            <ArrowUpRight
                              className="contact-social-arrow"
                              width={14}
                              height={14}
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
