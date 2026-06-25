import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { ArrowRight, ArrowDown, MapPin, socialIcons } from '../components/Icons'
import { profile, contact } from '../data'
import './Hero.css'

const ROLE_INTERVAL = 2200

/* Ismdan monogramma (bosh harflar) — avatar bo'lmaganda ko'rinadi */
function getMonogram(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const roles = profile.roles || []
  const [roleIndex, setRoleIndex] = useState(0)

  /* Lavozimni aylantirish — bittadan ko'p bo'lsa va harakat ruxsat etilgan bo'lsa */
  useEffect(() => {
    if (roles.length <= 1 || prefersReducedMotion) return
    const id = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, ROLE_INTERVAL)
    return () => clearInterval(id)
  }, [roles.length, prefersReducedMotion])

  const socials = (contact.socials || []).filter((s) => s.url)
  const hasAvatar = Boolean(profile.avatar)

  return (
    <section
      id="home"
      className="section hero"
      aria-labelledby="hero-heading"
    >
      {/* Dekorativ suzuvchi gradient blob (transform/opacity, reduced-motion hurmat qilinadi) */}
      <div className="hero-blobs" aria-hidden="true">
        <motion.span
          className="hero-blob hero-blob--1"
          animate={
            prefersReducedMotion
              ? undefined
              : { x: [0, 24, -12, 0], y: [0, -18, 12, 0] }
          }
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="hero-blob hero-blob--2"
          animate={
            prefersReducedMotion
              ? undefined
              : { x: [0, -20, 14, 0], y: [0, 16, -10, 0] }
          }
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          {/* Holat belgisi (pulsatsiyalovchi nuqta + bandlik matni) */}
          <Reveal as="div" delay={0} y={16}>
            <span className="chip hero-status">
              <span className="hero-status-dot" aria-hidden="true" />
              {profile.availability}
            </span>
          </Reveal>

          {/* Sarlavha — salom + ism */}
          <Reveal as="h1" delay={0.08} y={20}>
            <h1 id="hero-heading" className="hero-title">
              Salom, men{' '}
              <span className="grad-text hero-name">{profile.name}</span>
            </h1>
          </Reveal>

          {/* Aylanuvchi lavozim */}
          {roles.length > 0 && (
            <Reveal as="div" delay={0.16} y={16}>
              <p className="hero-role" aria-live="polite">
                <span className="hero-role-prefix" aria-hidden="true">
                  //
                </span>
                {roles.length === 1 ? (
                  <span className="hero-role-text">{roles[0]}</span>
                ) : (
                  <span className="hero-role-rotator">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={roleIndex}
                        className="hero-role-text"
                        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -14 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {roles[roleIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                )}
              </p>
            </Reveal>
          )}

          {/* Tanishtiruv */}
          <Reveal as="p" delay={0.24} y={16} className="hero-tagline">
            {profile.tagline}
          </Reveal>

          {/* Chaqiruv tugmalari */}
          <Reveal as="div" delay={0.32} y={16}>
            <div className="hero-ctas">
              <a href="#projects" className="btn btn-primary">
                Loyihalarni ko'rish
                <ArrowRight width={18} height={18} aria-hidden="true" />
              </a>
              <a href="#contact" className="btn btn-ghost">
                Bog'lanish
              </a>
            </div>
          </Reveal>

          {/* Ijtimoiy tarmoqlar */}
          {socials.length > 0 && (
            <Reveal as="div" delay={0.4} y={16}>
              <ul className="hero-socials">
                {socials.map((social) => {
                  const Icon = socialIcons[social.icon]
                  if (!Icon) return null
                  return (
                    <li key={social.name}>
                      <a
                        className="hero-social-link"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                      >
                        <Icon width={19} height={19} aria-hidden="true" />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          )}

          {/* Joylashuv */}
          {profile.location && (
            <Reveal as="p" delay={0.48} y={12} className="hero-location">
              <MapPin width={16} height={16} aria-hidden="true" />
              <span>{profile.location}</span>
            </Reveal>
          )}
        </div>

        {/* Vizual: avatar yoki monogramma */}
        <Reveal as="div" delay={0.2} y={24} className="hero-visual">
          <div className="hero-visual-ring" aria-hidden="true" />
          {hasAvatar ? (
            <img
              className="hero-avatar"
              src={profile.avatar}
              alt={profile.name}
              loading="eager"
              width={320}
              height={320}
            />
          ) : (
            <div className="hero-monogram" role="img" aria-label={profile.name}>
              <span aria-hidden="true">{getMonogram(profile.name)}</span>
            </div>
          )}
        </Reveal>
      </div>

      {/* Pastga aylantirish ishorasi */}
      <a className="hero-scroll" href="#about" aria-label="Pastga aylantirish">
        <span className="hero-scroll-label">Pastga</span>
        <motion.span
          className="hero-scroll-icon"
          aria-hidden="true"
          animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown width={18} height={18} />
        </motion.span>
      </a>
    </section>
  )
}
