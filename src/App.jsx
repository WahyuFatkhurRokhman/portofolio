import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

import { members } from './data'

import ThemeToggle, { getInitialTheme } from './components/ThemeToggle'
import Header from './components/Header'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [messages, setMessages] = useState([])

  // --- STATE UNTUK MENGONTROL PROFIL DINAMIS ---
  const [activeMemberIndex, setActiveMemberIndex] = useState(0)
  const activeMember = members[activeMemberIndex]

  // Deteksi dan simpan tema (Ditambah 'scroll-smooth' agar navigasi mulus)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    // Menambahkan scroll-smooth ke tag <html> secara otomatis
    document.documentElement.classList.add('scroll-smooth') 
    localStorage.setItem('theme', theme)
  }, [theme])

  // Ambil Data Supabase
  useEffect(() => {
    async function fetchMessages() {
      const { data, error } = await supabase.from('messages').select('*')
      if (error) console.error(error)
      else setMessages(data)
    }
    fetchMessages()
  }, [])

  return (
    // UBAH DI SINI: Tambahkan 'pt-24' agar konten tidak tertutup Header yang melayang
    <main className="pt-24 min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#020617] dark:text-white">

      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <Header theme={theme} setTheme={setTheme} />
      
      {/* MENGIRIM DATA DINAMIS KE MASING-MASING SECTION */}
      <Hero 
        members={members} 
        activeMember={activeMember}
        activeIndex={activeMemberIndex}
        setActiveIndex={setActiveMemberIndex}
      />
      <About activeMember={activeMember} />
      <Projects activeMember={activeMember} />
      <Skills skills={activeMember.skills} />
      <Contact />
      
      <Footer />
    </main>
  )
}