import { experience } from '../data'
import Reveal from '../components/Reveal'
import { Briefcase, Calendar } from '../components/Icons'
import './Experience.css'

/* Ish tajribasi — vertikal vaqt chizig'i (timeline).
   Chap chetda gradient chiziq, har bir yozuvda tugun (dot) va karta. */
export default function Experience() {
  if (!experience || experience.length === 0) return null

  return (
    <section
      id="experience"
      className="section exp"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <Reveal as="header" className="exp-header">
          <span className="section-eyebrow">// tajriba</span>
          <h2 id="experience-title" className="section-title">
            Ish tajribam
          </h2>
        </Reveal>

        <ol className="exp-timeline" role="list">
          {experience.map((item, i) => (
            <Reveal
              as="li"
              key={`${item.company}-${item.period}-${i}`}
              className="exp-item"
              delay={i * 0.08}
              y={28}
            >
              <span className="exp-node" aria-hidden="true">
                <Briefcase className="exp-node-icon" width={16} height={16} />
              </span>

              <article className="card exp-card">
                <h3 className="exp-role">{item.role}</h3>

                {item.company && (
                  <p className="exp-company">{item.company}</p>
                )}

                {item.period && (
                  <p className="exp-period">
                    <Calendar
                      className="exp-period-icon"
                      width={15}
                      height={15}
                      aria-hidden="true"
                    />
                    <span>{item.period}</span>
                  </p>
                )}

                {item.description && (
                  <p className="exp-desc">{item.description}</p>
                )}
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
