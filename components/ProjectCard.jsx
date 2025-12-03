export default function ProjectCard({ project }) {
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm">
      <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{project.description}</p>
        <a href={project.url} className="inline-block mt-4 text-sm underline">View case study</a>
      </div>
    </article>
  )
}