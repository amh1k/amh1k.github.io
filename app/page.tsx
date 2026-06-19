import {
  ArrowUpRight,
  Code2,
  FileText,
  Globe,
  Home,
  Mail,
  MapPin,
  UserRound,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  achievements,
  contactLinks,
  education,
  profile,
  projects,
  skills,
} from "@/lib/portfolio-data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const withBasePath = (path: string) =>
  path.startsWith("/") ? `${basePath}${path}` : path;

const dockLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "GitHub", href: profile.github, icon: Code2 },
  { label: "LinkedIn", href: profile.linkedin, icon: UserRound },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Resume", href: withBasePath(profile.resume), icon: FileText },
];

export default function HomePage() {
  const EducationIcon = education.icon;

  return (
    <main id="home" className="page-shell">
      <div className="top-pill" aria-hidden="true" />

      <section className="hero">
        <div className="hero-copy">
          <h1>Hi, I&apos;m Abdul Moiz</h1>
          <p>
            Building scalable web apps, backend systems, distributed monitors,
            and AI/ML experiments.
          </p>
          <a className="email-link" href={`mailto:${profile.email}`}>
            <Mail size={22} />
            {profile.email}
          </a>
        </div>
        <div
          className="avatar"
          role="img"
          aria-label="Abdul Moiz Hussain"
          style={{
            backgroundImage: `url('${withBasePath("/images/profile.jpeg")}')`,
          }}
        />
      </section>

      <section className="plain-section" id="about">
        <h2>About</h2>
        <p>
          Computer Science student at FAST NUCES Karachi, currently in 6th
          semester with a 3.63 GPA and Dean&apos;s List of Honor across 4
          semesters. I specialize in backend development, full-stack products,
          distributed systems, algorithms, and applied machine learning with
          TypeScript, Node.js, Go, C++, Python, and Next.js.
        </p>
      </section>

      <section className="plain-section" id="experience">
        <h2>Focus Areas</h2>
        <div className="list-stack">
          <article className="resume-row">
            <div className="row-icon">
              <Code2 size={26} />
            </div>
            <div>
              <h3>Backend and Systems</h3>
              <p>Node.js, Express, Go, Redis, BullMQ, PostgreSQL, MongoDB</p>
            </div>
            <span>APIs / queues / auth</span>
          </article>
          <article className="resume-row">
            <div className="row-icon">
              <Globe size={26} />
            </div>
            <div>
              <h3>Full-stack Product</h3>
              <p>Next.js, React, TypeScript, Tailwind CSS, testing workflows</p>
            </div>
            <span>Web apps</span>
          </article>
        </div>
      </section>

      <section className="plain-section" id="skills">
        <h2>Skills</h2>
        <div className="skills-cloud" aria-label="Technical skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="showcase-section" id="projects">
        <div className="section-intro">
          <h2>Check out my latest work</h2>
          <p>
            I&apos;ve worked on backend systems, algorithm visualizers, APIs,
            DSLs, and machine learning projects. Here are a few of my
            favorites.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.demoUrl ? (
                  <a href={project.demoUrl}>
                    <Globe size={17} />
                    Website
                  </a>
                ) : null}
                <a href={project.sourceUrl}>
                  <Code2 size={17} />
                  Source
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="showcase-section" id="achievements">
        <div className="section-intro">
          <h2>I like building things</h2>
          <p>
            Competitive programming, AI competitions, and academic consistency
            with measurable outcomes.
          </p>
        </div>

        <div className="timeline">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <article className="timeline-item" key={achievement.title}>
                <div className="timeline-icon">
                  <Icon size={24} />
                </div>
                <div className="timeline-content">
                  <p className="timeline-meta">{achievement.label}</p>
                  <h3>{achievement.title}</h3>
                  <p className="timeline-location">{achievement.metric}</p>
                  <p>{achievement.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="plain-section education-section" id="education">
        <h2>Education</h2>
        <article className="resume-row">
          <div className="row-icon">
            <EducationIcon size={28} />
          </div>
          <div>
            <h3>{education.school}</h3>
            <p>{education.degree}</p>
            <p>{education.details.join(" / ")}</p>
          </div>
          <span>{education.period.replace("Expected Graduation: ", "")}</span>
        </article>
      </section>

      <footer className="footer" id="contact">
        <h2>Contact</h2>
        <p>
          Based in {profile.location}. Reach out for backend APIs, full-stack
          products, systems work, or AI/ML experiments.
        </p>
        <div className="footer-links">
          {contactLinks.map((link) => (
            <a key={link.label} href={withBasePath(link.href)}>
              {link.label}
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>
        <p className="location">
          <MapPin size={16} />
          {profile.location}
        </p>
      </footer>

      <nav className="floating-dock" aria-label="Quick links">
        {dockLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <a key={item.label} href={item.href} aria-label={item.label}>
              <Icon size={23} />
              {index === 0 ? <span /> : null}
            </a>
          );
        })}
        <ThemeToggle />
      </nav>
    </main>
  );
}
