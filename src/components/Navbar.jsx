import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '../data'
import { Menu, Close } from './Icons'
import './Navbar.css'

/* Sahifa ichidagi bo'limlarga havolalar.
   "/" prefiksi bilan — shu havolalar blog sahifasidan ham bosh sahifaga olib boradi. */
const navLinks = [
  { href: '/#about', label: 'Men haqimda' },
  { href: '/#skills', label: "Ko'nikmalar" },
  { href: '/#projects', label: 'Loyihalar' },
  { href: '/#experience', label: 'Tajriba' },
  { href: '/#education', label: "Ta'lim" },
  { href: '/#blog', label: 'Blog' },
  { href: '/#contact', label: 'Aloqa' },
]

// Brend uchun ismdan birinchi so'z (masalan "Ma'murjon")
const firstName = profile.name.trim().split(' ')[0]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Scroll holatini kuzatish — 20px dan oshganda fon quyuqlashadi + chegara paydo bo'ladi.
  // requestAnimationFrame bilan debounce qilingan (skroll vaqtida ortiqcha render bo'lmasligi uchun).
  useEffect(() => {
    let ticking = false
    const update = () => {
      setScrolled(window.scrollY > 20)
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mobil menyu ochilganda Escape bilan yopish + body skrollini to'xtatish
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <nav className="nav-inner container" aria-label="Asosiy navigatsiya">
        {/* Brend / logo */}
        <Link to="/" className="nav-brand" aria-label={`${profile.name} — bosh sahifa`} onClick={closeMenu}>
          <span className="nav-brand-name">{firstName}</span>
          <span className="nav-brand-dot" aria-hidden="true" />
        </Link>

        {/* Desktop havolalar */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a className="nav-link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="/#contact" className="btn btn-primary nav-cta">
          Bog'lanish
        </a>

        {/* Mobil hamburger */}
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Menyuni yopish' : 'Menyuni ochish'}
          aria-expanded={open}
          aria-controls="nav-mobile-panel"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </nav>

      {/* Mobil panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="nav-mobile-panel"
            className="nav-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="nav-mobile-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a className="nav-mobile-link" href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/#contact" className="btn btn-primary nav-mobile-cta" onClick={closeMenu}>
                  Bog'lanish
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
