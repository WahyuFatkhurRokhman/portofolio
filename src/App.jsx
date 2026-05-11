import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Briefcase,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Moon,
  Sparkles,
  Sun,
} from 'lucide-react'

const projects = [
  {
    title: 'EqualEdu Platform',
    desc: 'Platform edukasi kesetaraan gender berbasis Laravel dengan dashboard modern, quiz system, dan responsive UI.',
    tags: ['Laravel', 'MySQL', 'Tailwind'],
  },
  {
    title: 'Tenangin Community',
    desc: 'Website komunitas kesehatan mental dengan forum diskusi modern dan pengalaman pengguna yang nyaman.',
    tags: ['React', 'UI/UX', 'Community'],
  },
  {
    title: 'Realtime Temperature Monitor',
    desc: 'Monitoring suhu realtime menggunakan UDP + JWT authentication dengan dashboard web interaktif.',
    tags: ['Python', 'UDP', 'Web Dashboard'],
  },
]

const skills = [
  'React',
  'Laravel',
  'Tailwind CSS',
  'Flutter',
  'MySQL',
  'UI/UX Design',
  'GitHub',
  'REST API',
]

function getInitialTheme() {
  const saved = localStorage.getItem('theme')

  if (saved === 'light' || saved === 'dark') {
    return saved
  }

  const prefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches

  return prefersDark ? 'dark' : 'light'
}

function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="
        inline-flex items-center gap-2 rounded-full
        border border-slate-200 bg-white/80
        px-4 py-2 text-sm font-semibold text-slate-700
        shadow-sm backdrop-blur transition-all duration-300
        hover:-translate-y-0.5 hover:shadow-md
        dark:border-white/10 dark:bg-white/10 dark:text-white
      "
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      {isDark ? 'Light' : 'Dark'}
    </button>
  )
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      theme === 'dark',
    )

    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* Header */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#home" className="flex items-center gap-3 font-black tracking-tight">
          <div className="grid size-10 place-items-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
            <Sparkles className="size-5" />
          </div>

          <span>MyPortfolio</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#about" className="hover:text-indigo-500">
            About
          </a>

          <a href="#projects" className="hover:text-indigo-500">
            Projects
          </a>

          <a href="#skills" className="hover:text-indigo-500">
            Skills
          </a>

          <a href="#contact" className="hover:text-indigo-500">
            Contact
          </a>
        </nav>

        <ThemeToggle theme={theme} setTheme={setTheme} />
      </header>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-10 lg:grid-cols-2"
      >
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-200">
            <Briefcase className="size-4" />
            Frontend Developer & UI Designer
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl">
            Crafting modern interfaces with elegant user experiences.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Saya membangun website modern, responsive, dan interaktif menggunakan
            React, Laravel, Tailwind CSS, dan berbagai teknologi frontend modern.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500"
            >
              View Projects
              <ArrowRight className="size-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/10 dark:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Card */}
        <div className="relative">
          <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-2xl shadow-slate-200/60 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:shadow-black/30">
            <div className="rounded-[1.5rem] bg-slate-950 p-8 text-white">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-yellow-400" />
                <span className="size-3 rounded-full bg-green-400" />
              </div>

              <div className="mt-10 flex flex-col items-center text-center">
                <img
                  src="/profil.jpeg"
                  alt="Profile"
                  className="
                    size-40 rounded-full object-cover
                    border-4 border-white/20
                    shadow-2xl shadow-cyan-500/20
                    ring-4 ring-indigo-500/20
                    transition-all duration-500
                    hover:scale-105
                  "
                />

                <h2 className="mt-6 text-2xl font-black">
                  Fatur
                </h2>

                <p className="mt-2 text-slate-300">
                  Frontend Engineer • CyberSecurity
                </p>

                <div className="mt-8 grid w-full gap-4 text-left">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Experience</p>
                    <p className="mt-1 font-bold">2+ Years Learning & Building</p>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Speciality</p>
                    <p className="mt-1 font-bold">Responsive Apps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
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
              <p className="leading-8 text-slate-600 dark:text-slate-300">
                Saya fokus membangun pengalaman pengguna yang modern, cepat,
                dan nyaman digunakan. Mulai dari dashboard web, aplikasi frontend,
                UI/UX design, hingga sistem realtime monitoring.
              </p>

              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-slate-100 p-5 dark:bg-slate-900/70">
                <GraduationCap className="size-6 text-indigo-500" />

                <div>
                  <p className="font-bold">Computer Science Student</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Passionate about frontend engineering and product design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
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
            <article
              key={project.title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
                <Sparkles className="size-6" />
              </div>

              <h3 className="text-2xl font-black">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                {project.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold dark:border-white/10 dark:bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] bg-slate-950 p-10 text-white dark:bg-white dark:text-slate-950">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300 dark:text-indigo-600">
              Skills
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Tools & technologies I use.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center font-bold backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 dark:border-slate-200 dark:bg-slate-100"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Let’s build something amazing.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600 dark:text-slate-300">
            Terbuka untuk freelance, kolaborasi project, frontend development,
            maupun UI/UX design.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:youremail@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="size-4" />
              Email
            </a>

            <a
              href="https://github.com"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/10"
            >
              <Github className="size-4" />
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/10"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 dark:border-white/10 md:flex-row">
          <p>
            Portfolio Website • React + Tailwind CSS v4
          </p>

          <p>
            Designed with Meraki UI inspiration ✨
          </p>
        </div>
      </footer>
    </main>
  )
}