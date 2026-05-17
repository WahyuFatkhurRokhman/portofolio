// src/sections/Skills.jsx

export default function Skills({ skills }) {
  return (
    // Padding dalam (p-10) dan background kotak sudah dihilangkan agar lebih bersih
    <section id="skills" className="mx-auto min-h-screen w-full max-w-4xl px-6 py-20 flex flex-col justify-center">
      
      <div className="mb-14 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
          Skills
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-tight">
          Tools & technologies I use.
        </h2>
      </div>
      
      {/* Grid dibuat 2 kolom agar progress bar punya ruang yang cukup */}
      <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
        {skills?.map((skill) => (
          <div key={skill.name} className="relative z-10 w-full">
            
            {/* Label Nama Skill & Angka Persentase */}
            <div className="mb-3 flex items-center justify-between font-bold">
              <span className="text-slate-900 dark:text-white">
                {skill.name}
              </span>
              <span className="text-indigo-600 dark:text-indigo-400">
                {skill.level}%
              </span>
            </div>

            {/* Background Bar (Track) */}
            <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200 shadow-inner dark:bg-slate-800">
              
              {/* Fill Bar (Warna Progress) */}
              <div 
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              />
              
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}