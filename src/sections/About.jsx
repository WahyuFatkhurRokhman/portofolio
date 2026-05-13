import { GraduationCap } from 'lucide-react'

// 1. Tambahkan { activeMember } sebagai parameter props
export default function About({ activeMember }) {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-6 py-20">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm dark:border-white/10 dark:bg-white/5 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
              About Me
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Turning ideas into polished digital products.
            </h2>
          </div>
          <div>
            
            {/* 2. Gunakan data aboutDesc dari member yang sedang aktif */}
            <p className="leading-8 text-slate-600 dark:text-slate-300">
              {activeMember.aboutDesc}
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-slate-100 p-5 dark:bg-slate-900/70">
              <GraduationCap className="size-6 text-indigo-500" />
              <div>
                <p className="font-bold">Computer Science Student</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Passionate about software engineering and product design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}