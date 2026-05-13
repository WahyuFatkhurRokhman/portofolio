import { Briefcase, ArrowRight } from 'lucide-react'
import ProfileSlider from './ProfileSlider'

export default function Hero({ members, activeMember, activeIndex, setActiveIndex }) {
  return (
    <section id="home" className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 pb-24 pt-10 lg:grid-cols-2">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-200">
          <Briefcase className="size-4" />
          {/* Role berubah dinamis */}
          {activeMember.role}
        </div>

        <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl">
          {/* Nama berubah dinamis */}
          Hi, I'm {activeMember.name}.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Geser profil di samping untuk melihat pengalaman, proyek unggulan, dan keahlian spesifik dari masing-masing anggota tim kami.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500">
            View My Projects
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>

      <ProfileSlider 
        members={members} 
        activeIndex={activeIndex} 
        setActiveIndex={setActiveIndex} 
      />
    </section>
  )
}