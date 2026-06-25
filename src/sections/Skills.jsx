import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { Code, Sparkle } from '../components/Icons'
import { skills } from '../data'
import './Skills.css'

/* Har bir kategoriya kartasi. Ikonka kategoriya indeksiga qarab almashadi
   (juft — Code, toq — Sparkle), shunchaki vizual xilma-xillik uchun. */
function SkillCard({ category, items, index }) {
  const Icon = index % 2 === 0 ? Code : Sparkle

  return (
    <Reveal as="li" delay={index * 0.08} className="skills-item">
      <article className="card skills-card">
        <header className="skills-card-head">
          <span className="skills-card-icon" aria-hidden="true">
            <Icon width={18} height={18} />
          </span>
          <h3 className="skills-card-title">{category}</h3>
        </header>

        <motion.ul
          className="skills-chips"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
          }}
        >
          {items.map((item) => (
            <motion.li
              key={item}
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="chip skills-chip">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </article>
    </Reveal>
  )
}

export default function Skills() {
  if (!skills || skills.length === 0) return null

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <Reveal className="skills-header">
          <p className="section-eyebrow">// ko'nikmalar</p>
          <h2 id="skills-title" className="section-title">
            Ko'nikmalar
          </h2>
          <p className="section-desc">
            Kundalik ishimda foydalanadigan texnologiyalar va vositalar —
            zamonaviy, tez va barqaror interfeyslar qurish uchun.
          </p>
        </Reveal>

        <ul className="skills-grid">
          {skills.map((group, i) => (
            <SkillCard
              key={group.category}
              category={group.category}
              items={group.items}
              index={i}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}