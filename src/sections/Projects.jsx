import { projects } from '../data'
import Reveal from '../components/Reveal'
import { ArrowUpRight, GitHub, Code } from '../components/Icons'
import './Projects.css'

export default function Projects() {
  if (!projects || projects.length === 0) return null

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <Reveal>
          <header className="projects-head">
            <span className="section-eyebrow">// portfolio</span>
            <h2 id="projects-title" className="section-title">
              Loyihalar
            </h2>
            <p className="section-desc">
              Men ishlagan tanlangan loyihalar — g'oyadan ishlab turgan
              mahsulotgacha. Har birida toza kod va o'ylangan dizaynga
              e'tibor qaratganman.
            </p>
          </header>
        </Reveal>

        <ul className="projects-grid">
          {projects.map((project, i) => {
            const initial = project.title?.trim()?.charAt(0)?.toUpperCase() || '?'
            return (
              <Reveal
                as="li"
                key={project.title + i}
                delay={Math.min(i * 0.08, 0.4)}
                className={
                  'projects-item' +
                  (project.featured ? ' projects-item--featured' : '')
                }
              >
                <article className="card projects-card">
                  <div className="projects-media">
                    {project.image ? (
                      <img
                        className="projects-img"
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="projects-placeholder" aria-hidden="true">
                        <span className="projects-placeholder-initial">
                          {initial}
                        </span>
                        <Code className="projects-placeholder-icon" width={28} height={28} />
                      </div>
                    )}
                  </div>

                  <div className="projects-body">
                    <h3 className="projects-card-title">{project.title}</h3>
                    {project.description && (
                      <p className="projects-card-desc">{project.description}</p>
                    )}

                    {project.tags?.length > 0 && (
                      <ul className="projects-tags">
                        {project.tags.map((tag) => (
                          <li key={tag} className="chip">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="projects-actions">
                      {project.liveUrl && (
                        <a
                          className="projects-link projects-link--live"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} — saytni ko'rish (yangi oynada ochiladi)`}
                        >
                          Ko'rish
                          <ArrowUpRight width={16} height={16} aria-hidden="true" />
                        </a>
                      )}
                      {project.codeUrl && (
                        <a
                          className="projects-link projects-link--code"
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} — kodni GitHub'da ko'rish (yangi oynada ochiladi)`}
                        >
                          <GitHub width={16} height={16} aria-hidden="true" />
                          Kod
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
