export default function Skills({ skills }) {
  return (
    <section id="skills" className="mx-auto w-full max-w-7xl px-6 py-20">
      <div className="rounded-[2rem] bg-slate-950 p-10 text-white dark:bg-white dark:text-slate-950">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300 dark:text-indigo-600">
            Team Skills
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Tools & technologies we use.
          </h2>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills?.map((skill) => (
            <div 
              key={skill} 
              className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-5 text-center font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 dark:border-slate-200 dark:bg-slate-100 dark:text-slate-900"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}