import Reveal from '../components/Reveal'
import { Sparkle } from '../components/Icons'
import { about } from '../data'
import './About.css'

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <p className="section-eyebrow">// men haqimda</p>
          <h2 className="section-title" id="about-title">
            Men haqimda
          </h2>
        </Reveal>

        <div className="about-grid">
          {/* Chap: matn paragraflari */}
          <Reveal delay={0.08} className="about-text">
            {about.paragraphs.map((para, i) => (
              <p key={i} className="about-para">
                {para}
              </p>
            ))}
          </Reveal>

          {/* O'ng / past: statistika kartalari */}
          <Reveal delay={0.16} className="about-stats">
            {about.stats.map((stat, i) => (
              <div className="card about-stat" key={i}>
                <span className="about-stat-value grad-text">{stat.value}</span>
                <span className="about-stat-label">{stat.label}</span>
              </div>
            ))}
            <div className="about-stat about-stat--note" aria-hidden="true">
              <Sparkle width={18} height={18} />
              <span>Sifat va detalga e'tibor</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
