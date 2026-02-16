'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-4">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium"
            >
              <Github size={16} />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium"
            >
              <ExternalLink size={16} />
              Live
            </a>
          )}

        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">
          {project.title}
        </h3>

        <p className="text-sm text-slate-300">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.split(',').map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md"
            >
              {tech.trim()}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
