import { useEffect, useState, useRef } from 'react'
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
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { supabase } from './lib/supabase'

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
  'Github',
  'REST API',
]

// Data untuk 4 Anggota Kelompok
const members = [
  {
    id: 1,
    name: 'Fatur',
    role: 'Frontend Engineer • CyberSecurity',
    exp: '2+ Years Learning & Building',
    speciality: 'Responsive Apps',
    img: 'profile.jpeg',
    email: 'wahyufatkhurr007@gmail.com',
    github: 'https://github.com/WahyuFatkhurRokhman',
    linkedin: 'https://www.linkedin.com/in/wahyu-fatkhur-rokhman-undefined-82167040a/',
  },
  {
    id: 2,
    name: 'Anggota Dua',
    role: 'Backend Developer',
    exp: '2+ Years Experience',
    speciality: 'API & Databases',
    img: 'profile2.jpeg',
    email: 'anggota2@gmail.com',
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
  },
  {
    id: 3,
    name: 'Anggota Tiga',
    role: 'UI/UX Designer',
    exp: '1+ Years Experience',
    speciality: 'Prototyping & Wireframing',
    img: 'profile3.jpeg',
    email: 'anggota3@gmail.com',
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
  },
  {
    id: 4,
    name: 'Anggota Empat',
    role: 'Mobile Developer',
    exp: '2+ Years Experience',
    speciality: 'Flutter & React Native',
    img: 'profile4.jpeg',
    email: 'anggota4@gmail.com',
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
  },
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
  const [messages, setMessages] = useState([])
  
  // State dan Ref untuk deteksi scroll geser (swipe)
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef(null)

  // Mode Tema
  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      theme === 'dark',
    )
    localStorage.setItem('theme', theme)
  }, [theme])

  // Fetch Supabase Messages
  useEffect(() => {
    async function fetchMessages() {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
    
      if (error) {
        console.error(error)
      } else {
        setMessages(data)
      }
    }
  
    fetchMessages()
  }, [])

  // Fungsi untuk mendeteksi slide mana yang aktif saat di-scroll/swipe
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current
      const index = Math.round(scrollLeft / offsetWidth)
      setActiveIndex(index)
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* Header */}
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <a href="#home" className="flex items-center gap-3 font-black tracking-tight">
          <div className="grid size-10 place-items-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
            <Sparkles className="size-5" />
          </div>

          <span>TeamPortfolio</span>
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
        className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 pb-24 pt-10 lg:grid-cols-2"
      >
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-200">
            <Briefcase className="size-4" />
            Web Development Team
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl">
            Crafting modern interfaces with elegant user experiences.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Kami adalah tim developer yang membangun website modern, responsive, dan interaktif menggunakan
            React, Laravel, Tailwind CSS, dan berbagai teknologi mutakhir lainnya.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500"
            >
              View Team Projects
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        {/* Sliding Profile Cards (Gaya Gelap dengan Snap Scroll) */}
        <div className="relative mx-auto w-full max-w-[380px] lg:mx-0 lg:ml-auto">
          {/* Container Luar dengan Bingkai Halus dan Efek Glassmorphism */}
          <div className="rounded-[2.5rem] border border-slate-200 bg-white/50 p-3 shadow-2xl backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:shadow-black/50">
            
            {/* Area Scroll Geser (Snap Scroll Horizontal) */}
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory touch-pan-x"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Menyembunyikan scrollbar di Firefox/IE
            >
              {/* Custom style untuk menyembunyikan scrollbar di Chrome/Safari/Edge */}
              <style dangerouslySetInnerHTML={{__html: `
                .touch-pan-x::-webkit-scrollbar { display: none; }
              `}} />

              {members.map((member) => (
                <div key={member.id} className="w-full shrink-0 snap-center p-2">
                  
                  {/* Card Profile (Gaya Dark/Hitam seperti Foto) */}
                  <div className="flex h-full flex-col items-center rounded-[2rem] bg-[#0a0c14] p-8 text-white shadow-inner border border-white/5">
                    
                    {/* Traffic Light Dots */}
                    <div className="mb-8 flex w-full items-center gap-2">
                      <span className="size-3 rounded-full bg-[#ff5f56]" />
                      <span className="size-3 rounded-full bg-[#ffbd2e]" />
                      <span className="size-3 rounded-full bg-[#27c93f]" />
                    </div>

                    {/* Profile Image with Glow */}
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl"></div>
                      <img
                        src={`${import.meta.env.BASE_URL}${member.img}`}
                        alt={member.name}
                        className="relative size-36 rounded-full border-4 border-[#1a1d2e] object-cover shadow-2xl"
                        onError={(e) => e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=random`}
                      />
                    </div>

                    <h2 className="mt-6 text-3xl font-black tracking-tight">{member.name}</h2>
                    <p className="mt-2 text-sm text-slate-400 font-medium">{member.role}</p>

                    {/* Experience & Speciality Boxes */}
                    <div className="mt-8 grid w-full gap-3 text-left">
                      <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
                        <p className="text-[10px] uppercase tracking-widest text-slate-500">Experience</p>
                        <p className="mt-1 text-sm font-bold text-slate-200">{member.exp}</p>
                      </div>
                      <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
                        <p className="text-[10px] uppercase tracking-widest text-slate-500">Speciality</p>
                        <p className="mt-1 text-sm font-bold text-slate-200">{member.speciality}</p>
                      </div>
                    </div>

                    {/* Social Links (In the same padding) */}
                    <div className="mt-8 flex w-full items-center justify-center gap-4 border-t border-white/10 pt-6">
                      <a href={`mailto:${member.email}`} className="grid size-11 place-items-center rounded-full bg-indigo-600 transition-transform hover:scale-110">
                        <Mail size={18} />
                      </a>
                      <a href={member.github} target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/10">
                        <Github size={18} />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/10">
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Indicators (Titik-titik di bawah) */}
          <div className="mt-6 flex justify-center gap-2">
            {members.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  activeIndex === i ? 'w-8 bg-indigo-500' : 'w-2 bg-slate-300 dark:bg-white/20'
                }`} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm dark:border-white/10 dark:bg-white/5 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
                About Our Team
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight">
                Turning ideas into polished digital products together.
              </h2>
            </div>
            <div>
              <p className="leading-8 text-slate-600 dark:text-slate-300">
                Kami fokus berkolaborasi dalam membangun pengalaman pengguna yang modern, cepat,
                dan nyaman digunakan. Mulai dari dashboard web, aplikasi mobile,
                UI/UX design, hingga backend API yang solid.
              </p>
              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-slate-100 p-5 dark:bg-slate-900/70">
                <GraduationCap className="size-6 text-indigo-500" />
                <div>
                  <p className="font-bold">Computer Science Students</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Passionate about software engineering and product design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
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
            <a
              href="mailto:tim.kalian@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="size-4" />
              Email the Team
            </a>
          </div>
        </div>
      </section>

      {/* Messages
      <section className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-black">
            Messages From Supabase 🚀
          </h2>
          <div className="mt-8 space-y-4">
            {messages.length > 0 ? (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className="
                    rounded-2xl border border-white/10
                    bg-white/5 p-5
                  "
                >
                  <h3 className="text-lg font-bold text-cyan-300">
                    {msg.name}
                  </h3>
                  <p className="mt-2 text-slate-300">
                    {msg.messages}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-slate-500">Belum ada pesan.</p>
            )}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 dark:border-white/10 md:flex-row">
          <p>
            Team Portfolio Website • React + Tailwind CSS v4
          </p>
          <p>
            Designed with Meraki UI inspiration ✨
          </p>
        </div>
      </footer>
    </main>
  )
}