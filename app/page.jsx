'use client'
import { Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
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
  },
  {
    title: 'RAG PDF Explainer Chatbot',
    description:
      'Retrieval-Augmented Generation chatbot that explains uploaded PDFs intelligently using LangChain.',
    tech: 'Flask, RAG, LangChain',
    image: '/images/project-2.png',
    github: 'https://github.com/JEETMANISHBOBDE',
  },
  {
  title: 'Cancer Cell Classification using Deep Learning',
  description:
    'Deep learning model for classifying cancer cells from microscopic images using CNN architecture. Built to assist early detection and improve diagnostic accuracy.',
  tech: 'Python, TensorFlow, CNN, OpenCV, Deep Learning',
  image: '/images/cancer-project.png',
  github: 'https://github.com/JEETMANISHBOBDE',
  live: null
}
]

export default function Home() {
  return (
    <main className="space-y-20">

      {/* HERO SECTION */}
      <section className="text-center space-y-6">
        <img
          src="/images/profile.jpg"
          alt="Jeet Manish Bobde"
          className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg"
        />

        <h1 className="text-4xl md:text-5xl font-bold">
          Jeet Manish Bobde
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300">
          AI/ML Developer | Computer Science Student
        </p>

        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
          Passionate about Artificial Intelligence, Machine Learning,
          and building real-world applications using modern frameworks.
          I enjoy developing intelligent systems, chatbots, mobile apps,
          and full-stack solutions.
        </p>

        <div className="flex justify-center gap-4">
            <a
    href="https://github.com/JEETMANISHBOBDE"
    target="_blank"
    className="flex items-center gap-2 px-6 py-2 rounded-xl border border-white/30 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300"
  >
    <Github size={18} />
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/jeetmanishbobde/"
    target="_blank"
    className="flex items-center gap-2 px-6 py-2 rounded-xl border border-white/30 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300"
  >
    <Linkedin size={18} />
    LinkedIn
  </a>
          <a
            href="/resume.pdf"
            download
            className="px-5 py-2 bg-blue-600 text-white rounded-lg"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-20">
  <h2 className="text-4xl font-bold text-center mb-16">
    Skills & Technologies
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Programming */}
    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-4 text-blue-400">
        Programming
      </h3>
      <p className="text-slate-300">
        Python, Java, C++, JavaScript, SQL
      </p>
    </div>

    {/* Web & Backend */}
    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-4 text-green-400">
        Web & Backend
      </h3>
      <p className="text-slate-300">
        Django, FastAPI, Node.js, React.js, REST APIs
      </p>
    </div>

    {/* AI & ML */}
    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-4 text-purple-400">
        AI & Machine Learning
      </h3>
      <p className="text-slate-300">
        TensorFlow, PyTorch, Scikit-learn, RAG, NLP,
        Computer Vision, YOLOv8
      </p>
    </div>

    {/* Generative AI */}
    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-4 text-pink-400">
        Generative AI & LLM Tools
      </h3>
      <p className="text-slate-300">
        LangChain, LlamaIndex, Hugging Face Transformers
      </p>
    </div>

    {/* Databases */}
    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-4 text-yellow-400">
        Databases
      </h3>
      <p className="text-slate-300">
        PostgreSQL, MongoDB, Pinecone, Supabase
      </p>
    </div>

    {/* Cloud & DevOps */}
    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-4 text-red-400">
        Cloud & DevOps
      </h3>
      <p className="text-slate-300">
        Docker, Kubernetes, Firebase, GitHub Actions
      </p>
    </div>

  </div>
</section>

      {/* PROJECTS SECTION */}
     <section className="py-20">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl font-bold text-center mb-16"
  >
    Featured Projects
  </motion.h2>

  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {projects.map((project) => (
      <ProjectCard key={project.title} project={project} />
    ))}
  </div>
</section>


      {/* CONTACT SECTION */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Contact Me
        </h2>

        <ContactForm />
      </section>
    </main>
  )
}
