import Image from 'next/image'
import {
  ArrowUp, Box, BriefcaseBusiness, CodeXml, Download, Github,
  GraduationCap, Layers3, Linkedin, Mail, Network, Terminal,
} from 'lucide-react'
import ContactForm from '../components/ContactForm'
import ProjectCard from '../components/ProjectCard'
import TerryDemo from '../components/TerryDemo'

const github = 'https://github.com/JEETMANISHBOBDE'
const linkedin = 'https://www.linkedin.com/in/jeetmanishbobde/'
const email = 'jmbobde99@gmail.com'

const projects = [
  {
    id: 'terry',
    title: 'Terry',
    category: 'Retrieval-augmented generation',
    description: 'A document assistant that answers questions about uploaded PDFs by retrieving relevant passages with semantic search.',
    stack: ['Python', 'Streamlit', 'Vector search'],
    href: github + '/Terry',
  },
  {
    id: 'medimate',
    title: 'MediMate',
    category: 'Conversational AI',
    description: 'A healthcare information prototype that combines an LLM with external knowledge sources and keeps context across follow-up questions.',
    stack: ['Python', 'Groq', 'External APIs'],
    href: github + '/MediMate',
  },
  {
    id: 'classification',
    title: 'Breast Cancer Classification',
    category: 'Applied machine learning',
    description: 'A classification study using the Wisconsin Breast Cancer dataset, with Random Forest and SVM models evaluated using F1 scores and a confusion matrix.',
    stack: ['Python', 'scikit-learn', 'Pandas'],
    href: github + '/Cancer-Cell-Classification-Using-Scikit-learn',
  },
]

const experience = [
  {
    company: 'Bluestock Fintech',
    role: 'Software Development Engineer Intern',
    period: 'May 2025 – Jun 2025',
    description: 'Built an IPO management platform with Django REST Framework and PostgreSQL. Delivered 8+ paginated API endpoints, cut list-view load time by 30%, and reduced repeated database queries by 40% through indexing and query optimization.',
  },
  {
    company: 'E-Cell, IIT Bombay',
    role: 'Web Developer Intern',
    period: 'Dec 2023 – Oct 2024',
    description: 'Built and deployed a responsive website for entrepreneurship initiatives using HTML, CSS, and JavaScript. Improved the navigation so visitors could find startup programs more easily.',
  },
  {
    company: 'The Agnirva Space Internship',
    role: 'AI/ML Intern',
    period: 'May 2024 – Jun 2024',
    description: 'Prototyped a machine learning model on space-related data and presented the findings in a technical report and presentation.',
  },
]

const toolkit = [
  {
    title: 'AI & machine learning',
    icon: Network,
    items: ['scikit-learn', 'TensorFlow', 'PyTorch', 'LangChain', 'LlamaIndex', 'Hugging Face', 'YOLOv8'],
  },
  {
    title: 'Backend & web',
    icon: CodeXml,
    items: ['Python', 'Django', 'FastAPI', 'Node.js', 'JavaScript', 'React', 'REST APIs'],
  },
  {
    title: 'Data & infrastructure',
    icon: Box,
    items: ['SQL', 'PostgreSQL', 'MongoDB', 'Pinecone', 'AWS', 'Docker', 'GitHub Actions'],
  },
]

function Portrait() {
  return (
    <figure className="portrait-panel" data-parallax>
      <div className="portrait-grid" aria-hidden="true" />
      <span className="frame-corner frame-corner-tl" aria-hidden="true" />
      <span className="frame-corner frame-corner-tr" aria-hidden="true" />
      <span className="frame-corner frame-corner-bl" aria-hidden="true" />
      <span className="frame-corner frame-corner-br" aria-hidden="true" />
      <div className="portrait-art">
        <span className="orbit orbit-outer" aria-hidden="true" />
        <span className="orbit orbit-middle" aria-hidden="true" />
        <span className="orbit orbit-tilted" aria-hidden="true" />
        <span className="orbit orbit-inner" aria-hidden="true" />
        <span className="orbit-axis orbit-axis-horizontal" aria-hidden="true" />
        <span className="orbit-axis orbit-axis-vertical" aria-hidden="true" />
        <span className="orbit-node orbit-node-one" aria-hidden="true" />
        <span className="orbit-node orbit-node-two" aria-hidden="true" />
        <span className="orbit-marker" aria-hidden="true">+</span>
        <div className="portrait-image">
          <Image
            src="/images/profile.jpg"
            alt="Portrait of Jeet Manish Bobde"
            fill
            sizes="(max-width: 540px) 153px, 214px"
            priority
          />
        </div>
      </div>
      <figcaption className="portrait-caption">
        <GraduationCap size={19} aria-hidden="true" />
        <span>B.Tech · Computer Science (AI & ML)<small>SRM Institute of Science and Technology</small></span>
      </figcaption>
    </figure>
  )
}

export default function Home() {
  return (
    <>
      <main id="main-content" tabIndex={-1}>
        <section id="top" className="container hero" aria-labelledby="hero-title">
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow hero-enter" style={{ '--enter-delay': '40ms' }}><span /> JEET MANISH BOBDE</p>
              <h1 id="hero-title" className="hero-enter" style={{ '--enter-delay': '100ms' }}>
                I build AI<br /><em>people can use.</em>
              </h1>
              <p className="hero-description hero-enter" style={{ '--enter-delay': '170ms' }}>
                Computer science student and software developer working on document assistants, machine learning models, and the APIs that connect them to users.
              </p>
              <div className="hero-actions hero-enter" style={{ '--enter-delay': '240ms' }}>
                <a href="#work" className="button button-primary">Explore my work</a>
                <a href="/resume.pdf" download="Jeet-Bobde-Resume.pdf" className="button button-outline">
                  <Download size={16} aria-hidden="true" /> Resume
                </a>
                <div className="hero-socials">
                  <a href={github} target="_blank" rel="noopener noreferrer" className="icon-button" aria-label="GitHub profile"><Github size={19} aria-hidden="true" /></a>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" className="icon-button" aria-label="LinkedIn profile"><Linkedin size={19} aria-hidden="true" /></a>
                </div>
              </div>
            </div>
            <div className="hero-enter hero-visual" style={{ '--enter-delay': '130ms' }}>
              <Portrait />
            </div>
          </div>
          <ul className="focus-list" aria-label="Areas of focus">
            <li><Network aria-hidden="true" size={17} /> Machine Learning</li>
            <li><Layers3 aria-hidden="true" size={17} /> Retrieval-Augmented Generation</li>
            <li><CodeXml aria-hidden="true" size={17} /> Backend Engineering</li>
          </ul>
        </section>

        <section id="work" className="section container" aria-labelledby="work-title">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow"><span /> PROJECTS</p>
              <h2 id="work-title">Selected work<span>.</span></h2>
            </div>
            <a href={github + '?tab=repositories'} target="_blank" rel="noopener noreferrer" className="text-link">
              <Github size={17} aria-hidden="true" /> All repositories
            </a>
          </div>
          <TerryDemo liveUrl="https://helloterry99.streamlit.app/" />
          <div className="projects-grid">
            {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
          </div>
        </section>

        <section id="experience" className="section container experience-section" aria-labelledby="experience-title">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow"><span /> INTERNSHIPS</p>
              <h2 id="experience-title">Experience<span>.</span></h2>
            </div>
          </div>
          <ul className="experience-list">
            {experience.map(({ company, role, period, description }) => (
              <li key={company} className="experience-entry" data-reveal>
                <span className="experience-icon"><BriefcaseBusiness size={20} aria-hidden="true" /></span>
                <div>
                  <h3>{company}</h3>
                  <p className="experience-role">{role}</p>
                  {description && <p className="experience-description">{description}</p>}
                </div>
                <p className="experience-period">{period}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" className="section container about-section" aria-labelledby="about-title">
          <div className="about-copy" data-reveal>
            <p className="eyebrow"><span /> ABOUT</p>
            <h2 id="about-title">How I work<span>.</span></h2>
            <p>I’m pursuing a B.Tech in Computer Science (AI & ML) at SRM Institute of Science and Technology and expect to graduate in May 2027. I enjoy taking a model from a notebook to an application, with an API someone can use and a way to check how well it works.</p>
            <a href="/resume.pdf" download="Jeet-Bobde-Resume.pdf" className="text-link"><Download size={17} aria-hidden="true" /> Full resume and certifications</a>
          </div>
          <div className="toolkit" data-reveal>
            {toolkit.map(({ title, icon: Icon, items }) => (
              <div key={title} className="toolkit-group">
                <h3><Icon size={18} aria-hidden="true" /> {title}</h3>
                <ul className="tag-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section container contact-section" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div className="contact-copy" data-reveal>
              <p className="eyebrow"><span /> CONTACT</p>
              <h2 id="contact-title">Let’s talk<span>.</span></h2>
              <p>I’m open to roles in software engineering, AI/ML, data, and cloud. If you’re hiring or would like to talk about a project, I’d be happy to hear from you.</p>
              <a href={'mailto:' + email} className="text-link"><Mail size={18} aria-hidden="true" /> {email}</a>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer container">
        <a href="#top" className="wordmark"><span className="brand-mark"><Terminal size={17} aria-hidden="true" /></span> Jeet Bobde</a>
        <div className="footer-links">
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#top" className="back-to-top">Back to top <ArrowUp size={14} aria-hidden="true" /></a>
        </div>
      </footer>
    </>
  )
}
