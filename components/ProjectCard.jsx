import {
  Activity, Database, FileText, Github, GitFork, MessageSquare,
  Search, Sparkles,
} from 'lucide-react'

function ProjectVisual({ id }) {
  if (id === 'terry') {
    return (
      <div className="project-visual project-visual-terry" aria-hidden="true">
        <div className="diagram-pipeline">
          <div className="diagram-node"><FileText size={22} /> <span>PDF</span></div>
          <div className="diagram-line"><i /></div>
          <div className="diagram-node diagram-node-active"><Search size={22} /> <span>Retrieve</span></div>
          <div className="diagram-line"><i /></div>
          <div className="diagram-node"><MessageSquare size={22} /> <span>Answer</span></div>
        </div>
      </div>
    )
  }

  if (id === 'medimate') {
    return (
      <div className="project-visual project-visual-medimate" aria-hidden="true">
        <div className="diagram-chat">
          <div className="diagram-message diagram-message-user"><MessageSquare size={15} /> Health question <i /></div>
          <div className="diagram-message diagram-message-assistant"><Sparkles size={15} /> Answer with context</div>
          <div className="diagram-source"><Database size={12} /> External knowledge</div>
        </div>
      </div>
    )
  }

  return (
    <div className="project-visual project-visual-classification" aria-hidden="true">
      <div className="diagram-classifier">
        <div className="diagram-node"><Activity size={21} /> <span>Features</span></div>
        <div className="diagram-line"><i /></div>
        <div className="diagram-node diagram-node-active"><GitFork size={21} /> <span>Model</span></div>
        <div className="diagram-branch" />
        <div className="diagram-outcomes"><span>Benign</span><span>Malignant</span></div>
      </div>
    </div>
  )
}

export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card" data-reveal style={{ '--reveal-delay': index * 75 + 'ms' }}>
      <ProjectVisual id={project.id} />
      <div className="project-body">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="tag-list" aria-label="Technologies">
          {project.stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="project-footer">
          <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={'View source for ' + project.title + ' on GitHub'}>
            <Github size={17} aria-hidden="true" /> Source code
          </a>
        </div>
      </div>
    </article>
  )
}
