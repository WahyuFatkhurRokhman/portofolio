import { Sparkles } from 'lucide-react'

export default function Projects({ projects }) {
  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
          Projects
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-tight">
          Selected works & experiments.
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5">
            <div className="mb-5 inline-flex rounded-2xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
              <Sparkles className="size-6" />
            </div>
            <h3 className="text-2xl font-black">{project.title}</h3>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{project.desc}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold dark:border-white/10 dark:bg-white/5">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}