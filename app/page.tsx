import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  FileText,
  Mail,
  MapPin,
  UserRound,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ProjectVisual } from "@/components/project-visual";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  aboutCards,
  achievements,
  education,
  profile,
  projects,
  skillGroups,
  stats,
} from "@/lib/portfolio-data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const withBasePath = (path: string) =>
  path.startsWith("/") ? `${basePath}${path}` : path;

const socialLinks = [
  { label: "GitHub", href: profile.github, icon: Code2 },
  { label: "LinkedIn", href: profile.linkedin, icon: UserRound },
  { label: "Resume", href: withBasePath(profile.resume), icon: FileText },
];

const projectPriority = ["mithril", "monitor", "algorithms", "dsl", "go"];
const featuredProjects = [...projects].sort(
  (first, second) => {
    const firstIndex = projectPriority.indexOf(first.visual);
    const secondIndex = projectPriority.indexOf(second.visual);
    return (firstIndex === -1 ? projectPriority.length : firstIndex)
      - (secondIndex === -1 ? projectPriority.length : secondIndex);
  },
);

export default function HomePage() {
  return (
    <main id="home" className="site-shell">
      <ScrollReveal />

      <header className="edge-nav reveal" style={{ "--i": 0 } as React.CSSProperties}>
        <a className="wordmark" href="#home" aria-label="Abdul Moiz Hussain, home">
          Abdul Moiz
        </a>
        <div className="edge-actions">
          <a href="#projects">Selected work</a>
          <ThemeToggle />
        </div>
      </header>

      <section className="hero reveal" style={{ "--i": 1 } as React.CSSProperties}>
        <div className="hero-copy">
          <p className="hero-deck">Full-stack engineer · backend first</p>
          <h1>Full-stack engineering, backend first.</h1>
          <p className="hero-lede">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="primary-link" href="#projects">
              Read the work <ArrowDown aria-hidden="true" size={18} />
            </a>
            <a className="text-link" href={`mailto:${profile.email}`}>
              Write to me <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </div>
        </div>

        <aside className="hero-proof" aria-label="Portrait of Abdul Moiz Hussain">
          <figure className="portrait-wrap">
            <Image
              className="portrait"
              src={withBasePath("/images/profile.jpeg")}
              alt="Portrait of Abdul Moiz Hussain"
              width={328}
              height={328}
              sizes="(min-width: 60rem) 304px, (min-width: 40rem) 272px, 80vw"
              priority
            />
          </figure>
        </aside>
      </section>

      <section className="proof-strip reveal" aria-label="Personal highlights" style={{ "--i": 2 } as React.CSSProperties}>
        {stats.map((stat) => (
          <div className="proof-item" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="dossier section-rule" id="about" data-scroll-reveal>
        <header className="section-heading">
          <h2>A working profile</h2>
          <p>
            I build web products from the persistence and service layers outward:
            data models, APIs, authentication, workers, caching, tests, and the
            responsive interfaces that make those systems useful.
          </p>
        </header>

        <div className="focus-list" id="experience">
          {aboutCards.map((area) => {
            const Icon = area.icon;
            return (
              <article className="focus-item" key={area.title}>
                <Icon aria-hidden="true" size={21} />
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="work-section section-rule" id="projects">
        <header className="section-heading work-heading">
          <div>
            <p className="section-note">Selected engineering · 2024—2026</p>
            <h2>Backend-led products and systems.</h2>
          </div>
          <p>
            The primary work is full-stack and backend engineering: distributed
            workers, production-minded APIs, database-backed services, and web
            interfaces. Algorithm and ML work follows as supporting range.
          </p>
        </header>

        <div className="project-index" aria-label="Selected projects">
          {featuredProjects.map((project, index) => (
            <article
              className={`project-folio project-${project.visual}`}
              key={project.name}
              data-scroll-reveal
            >
              {project.image ? (
                <figure className="project-media project-image">
                  <Image
                    className="project-screenshot"
                    src={withBasePath(project.image)}
                    alt={`${project.name} project screenshot`}
                    width={1920}
                    height={1080}
                    sizes="(min-width: 40rem) 45vw, 100vw"
                  />
                </figure>
              ) : (
                <ProjectVisual type={project.visual} />
              )}
              <div className="folio-content">
                <div className="folio-heading">
                  <span className="folio-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p>{project.repo}</p>
                    <h3>{project.name}</h3>
                  </div>
                </div>

                <p className="folio-description">{project.description}</p>

                <ul className="impact-list">
                  {project.impact.map((impact) => (
                    <li key={impact}>{impact}</li>
                  ))}
                </ul>

                <div className="tag-list" aria-label={`${project.name} technologies`}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="folio-links">
                  <a href={project.sourceUrl} target="_blank" rel="noreferrer">
                    <Code2 aria-hidden="true" size={17} /> Source
                  </a>
                  {project.demoUrl ? (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      View project <ArrowUpRight aria-hidden="true" size={16} />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="record-section section-rule" id="achievements" data-scroll-reveal>
        <header className="section-heading">
          <h2>A record of the work</h2>
          <p>
            Competitive programming and academic consistency lead this record.
            AI competitions remain here as evidence of range, not as the portfolio&apos;s
            primary engineering identity.
          </p>
        </header>

        <div className="record-table">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <article className="record-row" key={achievement.title}>
                <div className="record-mark">
                  <Icon aria-hidden="true" size={19} />
                  <strong>{achievement.metric}</strong>
                </div>
                <div>
                  <p>{achievement.label}</p>
                  <h3>{achievement.title}</h3>
                </div>
                <p>{achievement.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="tools-section section-rule" id="skills" data-scroll-reveal>
        <header className="section-heading compact-heading">
          <h2>Tools of practice</h2>
          <p>Backend and full-stack tools first, grouped by how I ship software.</p>
        </header>

        <div className="tool-ledger">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article key={group.title}>
                <div className="tool-title">
                  <Icon aria-hidden="true" size={18} />
                  <h3>{group.title}</h3>
                </div>
                <p>{group.items.join(" · ")}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="education-section section-rule" id="education">
        <div>
          <p className="section-note">Education</p>
          <h2>{education.school}</h2>
        </div>
        <div className="education-detail">
          <h3>{education.degree}</h3>
          <p>{education.details.join(" · ")}</p>
          <p>{education.period}</p>
        </div>
      </section>

      <footer className="dense-footer section-rule" id="contact" data-scroll-reveal>
        <div className="footer-statement">
          <p>For backend systems and full-stack product engineering, write directly.</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email} <Mail aria-hidden="true" size={20} />
          </a>
        </div>

        <div className="footer-meta">
          <p><MapPin aria-hidden="true" size={16} /> {profile.location}</p>
          <div className="social-links">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                  <Icon aria-hidden="true" size={17} /> {link.label}
                </a>
              );
            })}
          </div>
          <p className="colophon">
            Full-stack engineering · backend systems · APIs · databases · distributed workers
          </p>
        </div>
      </footer>
    </main>
  );
}
