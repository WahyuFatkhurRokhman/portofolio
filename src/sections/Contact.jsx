import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-20">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
          Contact
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-tight">
          Let’s build something amazing.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600 dark:text-slate-300">
          Silakan hubungi anggota tim kami langsung melalui profil geser di atas atau email tim kami secara keseluruhan.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="mailto:tim.kalian@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:-translate-y-1">
            <Mail className="size-4" />
            Email the Team
          </a>
        </div>
      </div>
    </section>
  )
}