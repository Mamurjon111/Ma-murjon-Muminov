import Reveal from '../components/Reveal'
import { GradCap, Calendar } from '../components/Icons'
import { education } from '../data'
import './Education.css'

export default function Education() {
  if (!education || education.length === 0) return null

  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">// ta'lim</p>
          <h2 id="education-title" className="section-title">
            Ta'lim va sertifikatlar
          </h2>
        </Reveal>

        <ul className="education-grid">
          {education.map((item, i) => (
            <Reveal as="li" key={`${item.title}-${i}`} delay={0.08 * i} className="education-item">
              <article className="card education-card">
                <span className="education-icon" aria-hidden="true">
                  <GradCap />
                </span>
                <div className="education-body">
                  <h3 className="education-card-title">{item.title}</h3>
                  {item.place && <p className="education-place">{item.place}</p>}
                  {item.period && (
                    <p className="education-period">
                      <Calendar width={14} height={14} aria-hidden="true" />
                      <span>{item.period}</span>
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
