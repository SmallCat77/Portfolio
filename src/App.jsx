
import { useEffect } from 'react'
import './App.css'
import profileImg from './assets/profile.jpg'

const projects = [
  {
    number: '01',
    title: 'VaxCare',
    category: 'Healthcare Management',
    description:
      'A web-based vaccination management system designed to help barangays manage resident records, vaccine inventory, and vaccination schedules.',
    tech: ['React', 'JavaScript', 'MySQL'],
    link: 'https://github.com/',
    demo: '#contact',
  },
  {
    number: '02',
    title: 'CarX',
    category: 'Augmented Reality',
    description:
      'An interactive learning experience exploring futuristic automotive technology through augmented reality and educational quizzes.',
    tech: ['Unity', 'C#', 'Vuforia'],
    link: 'https://github.com/',
    demo: '#contact',
  },
  {
    number: '03',
    title: 'Web Portfolio',
    category: 'Frontend Development',
    description:
      'A personal portfolio showcasing my development journey, projects, and skills using a responsive interface and smooth animations.',
    tech: ['React', 'CSS', 'GSAP'],
    link: 'https://github.com/',
    demo: '#',
  },
]

function Navbar() {
  return (
    <nav className="navbar">
      <a className="brand" href="#home">N<span>.</span></a>
      <div className="nav-links">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="/profile">My Profile ↗</a>
      <a href="#contact" className="nav-contact">Let's talk ↗</a>
    </div>

    </nav>
  )
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="availability">
          <span className="status-dot" /> BSIT STUDENT · ASPIRING DEVELOPER
        </div>
        <h1>
          Turning ideas
          <br />into <span className="accent">digital</span>
          <br />experiences<span className="accent">.</span>
        </h1>
        <p className="hero-description">
          Hey, I'm Nathanyell — a developer in the making, building
          useful digital experiences one project at a time.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            Explore my work <span>↗</span>
          </a>
          <a className="btn btn-ghost" href="#contact">Get in touch</a>
        </div>
        <div className="hero-meta">
          <span>BASED IN THE PHILIPPINES</span>
          <span>LEARNING BY BUILDING.</span>
        </div>
      </div>

      <div className="hero-art" aria-label="Developer introduction">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="art-card">
          <span className="art-top">PERSONAL PROFILE / 001</span>
          <img
  src={profileImg}
  className="avatar-photo"
  alt="Nathanyell L. Dela Pena"
/>
          <div className="art-name">Nathanyell<br />L. Dela Pena</div>
          <div className="art-role">DEVELOPER IN PROGRESS</div>
          <div className="art-line" />
          <div className="art-bottom">
            <span>CREATIVE THINKER</span>
            <span>↗ 2026</span>
          </div>
        </div>
        <span className="floating-tag tag-one">{"< code />"}</span>
        <span className="floating-tag tag-two">BUILD · LEARN · REPEAT</span>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section-wrap about-section" id="about">
      <div className="section-heading">
        <span className="eyebrow">01 / A LITTLE ABOUT ME</span>
        <h2>Curious mind.<br /><span className="muted">Builder's mindset.</span></h2>
      </div>
      <div className="about-content">
        <p>
          I'm Nathanyell L. Dela Pena, a fourth-year Bachelor of Science
          in Information Technology student from the Philippines.
          I'm exploring how thoughtful design and technology can solve
          real-world problems.
        </p>
        <p>
          My journey includes web development, database design, and
          interactive learning applications. I'm currently strengthening
          my skills in React, JavaScript, responsive UI design, and
          modern development workflows by building projects that turn
          ideas into working experiences.
        </p>
        <div className="skill-list">
          {['HTML & CSS', 'JavaScript', 'React', 'PHP & Laravel', 'MySQL', 'UI/UX'].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-preview preview-${project.number}`}>
        <span className="preview-number">{project.number} / 03</span>
        <div className="preview-symbol">
          {project.number === '01' ? '✳' : project.number === '02' ? '⌘' : 'N.'}
        </div>
        <span className="preview-category">{project.category}</span>
      </div>
      <div className="project-info">
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <span className="project-arrow">↗</span>
        </div>
        <p>{project.description}</p>
        <div className="tech-list">
          {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
        </div>
        <div className="project-links">
          <a href={project.link} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={project.demo}>View project ↗</a>
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-wrap">
        <div className="projects-heading">
          <div>
            <span className="eyebrow">02 / SELECTED WORK</span>
            <h2>Things I've <span className="accent">built.</span></h2>
          </div>
          <p>A few projects from my journey<br />in technology and design.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section-wrap contact-section" id="contact">
      <span className="eyebrow">03 / HAVE A PROJECT IN MIND?</span>
      <h2>Let's make<br />something <span className="accent">matter.</span></h2>
      <p>Open to learning, collaboration, and new opportunities.</p>
      <a className="btn btn-primary" href="mailto:YOUR_EMAIL@example.com">
        Say hello <span>↗</span>
      </a>
      <div className="social-links">
        <a href="https://github.com/SmallCat77" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/nathanyell-dela-pena-3279ab446/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="https://mail.google.com/" target="_blank" rel="noreferrer">nathanyelldelapena@g.cjc.edu.ph ↗</a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <a className="brand" href="#home">N<span>.</span></a>
      <span>DESIGNED & BUILT WITH PURPOSE.</span>
      <span>© {new Date().getFullYear()} NATHANYELL DELA PENA</span>
    </footer>
  )
}

function App() {
 
useEffect(() => {
  let animation

  import('gsap').then(({ gsap }) => {
    animation = gsap.from('.hero-copy > *', {
      y: 24,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
    })
  })

  return () => animation?.revert()
}, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
