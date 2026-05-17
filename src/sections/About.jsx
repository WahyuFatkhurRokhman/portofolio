// src/sections/About.jsx
import { Briefcase, Award } from 'lucide-react'

export default function About({ activeMember }) {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="mx-auto w-full max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 dark:border-white/10 dark:bg-white/5 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-2">
          
          {/* Kolom Kiri: Judul */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
              About {activeMember.name}
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Turning ideas into polished digital products.
            </h2>
          </div>
          
          {/* Kolom Kanan: Deskripsi & Info Dinamis */}
          <div>
            <p className="leading-8 text-slate-600 transition-colors duration-300 dark:text-slate-300">
              {activeMember.aboutDesc}
            </p>

            {/* Kotak Info Dinamis (Grid 2 Kolom) */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              
              {/* Kotak 1: Role & Speciality */}
              <div className="flex items-center gap-3 rounded-2xl bg-slate-100 p-5 transition-colors duration-300 dark:bg-slate-900/70">
                <Briefcase className="size-6 shrink-0 text-indigo-500" />
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">
                    {/* Mengambil kata pertama sebelum pemisah bullet jika ada */}
                    {activeMember.role.split(' • ')[0]}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {activeMember.speciality}
                  </p>
                </div>
              </div>

              {/* Kotak 2: Experience */}
              <div className="flex items-center gap-3 rounded-2xl bg-slate-100 p-5 transition-colors duration-300 dark:bg-slate-900/70">
                <Award className="size-6 shrink-0 text-indigo-500" />
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Experience</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {activeMember.exp}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}