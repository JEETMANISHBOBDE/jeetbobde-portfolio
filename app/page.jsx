// app/page.jsx
import ProjectCard from '../components/ProjectCard'
import ContactForm from '../components/ContactForm'

const projects = [
  {
    title: 'MediMate — AI Healthcare Assistant',
    description:
      'AI-powered healthcare assistant chatbot answering medical queries and providing medicine information using NLP and external APIs.',
    tech: 'Python, Flask, NLP, Streamlit, APIs',
    image: '/images/project-1.png',
    github: 'https://github.com/JEETMANISHBOBDE',
    live: '#'
  },
  {
    title: 'Medicine AI Chatbot Using API',
    description:
      'Specialized chatbot to fetch and explain medicine-related information via API integration.',
    tech: 'Python, APIs, NLP',
    image: '/images/project-2.png',
    github: 'https://github.com/JEETMANISHBOBDE',
    live: '#'
  },
  {
    title: 'College Notes & Planner App',
    description:
      'Flutter app for notes, tasks, reminders and weekly calendar preview with Firebase integration.',
    tech: 'Flutter, Firebase Auth, Firestore',
    image: '/images/project-3.png',
    github: '#',
    live: '#'
  },
  {
    title: 'Queue Dodger App',
    description:
      'Track real-time queues and book time slots to avoid waiting lines at local services.',
    tech: 'Kotlin, Flutter, Firebase',
    image: '/images/project-4.png',
    github: '#',
    live: '#'
  },
  {
    title: 'Bluestock IPO Web App',
    description:
      'Full-stack IPO management app built with Django and DRF, using PostgreSQL.',
    tech: 'Django, DRF, PostgreSQL, Bootstrap',
    image: '/images/project-5.png',
    github: '#',
    live: '#'
  },
  {
    title: 'HOTEL_BOOKING (Hotel Booking Website)',
    description:
      'PHP-based hotel booking system built using XAMPP and MySQL.',
    tech: 'PHP, HTML, CSS, MySQL',
    image: '/images/project-6.png',
    github: '#',
    live: '#'
  },
  {
    title: 'Chatbots Using RAG (PDF-based Explainer)',
    description:
      'RAG-based chatbot enabling PDF uploads and intelligent explanations using LangChain.',
    tech: 'RAG, Flask, LangChain',
    image: '/images/project-7.png',
    github: '#',
    live: '#'
  }
]

export default function Home() {
  return (
    <section className="space-y-12">
      {/* Profile */}
      <header className="grid md:grid-cols-3 gap-6 items-center">
        <div className="col-span-1 flex justify-center md:justify-start">
          <img
            src="/images/profile.jpg"
            alt="Jeet Manish Bobde"
            className="w-40 h-40 rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-700"
          />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl font-extrabold">Jeet Manish Bobde</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">AI/ML Developer | CSE Student</p>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Jeet Bobde is a passionate Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. With hands-on experience in building AI-based applications, chatbots, and full-stack web solutions, he enjoys applying machine learning, Python, and modern development frameworks to solve real-world problems. Jeet is continuously learning, experimenting, and creating impactful projects across AI, Flutter, web development, and data-driven systems.
          </p>

          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">India • Available for freelance • Open to new opportunities</p>
        </div>
      </header>

      {/* Projects */}
      <section id="projects">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-4">Want to work together? Send me a message.</p>

        import ContactForm from '../components/ContactForm'

/* ... inside Home component ... */
<section id="contact">
  <h2 className="text-2xl font-semibold mb-4">Contact</h2>
  <p className="text-slate-600 dark:text-slate-300 mb-4">Want to work together? Send me a message.</p>

  <ContactForm />

  <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
    Alternatively, reach me at <a href="mailto:jmbobde99@gmail.com" className="underline">jmbobde99@gmail.com</a>
  </p>
</section>

        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Alternatively, reach me at <a href="mailto:jmbobde99@gmail.com" className="underline">jmbobde99@gmail.com</a></p>
      </section>
    </section>
  )
}
