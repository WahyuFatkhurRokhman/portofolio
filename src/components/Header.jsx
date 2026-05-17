import { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Header({ theme, setTheme }) {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 150 

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-white/10 dark:bg-[#020617]/80">
      
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <a 
          href="#home" 
          onClick={() => setActiveSection('home')}
          className="flex items-center gap-3 font-black tracking-tight"
        >
          <div className="grid size-10 place-items-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
            <Sparkles className="size-5" />
          </div>
          <span>TeamPortfolio</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className={`relative py-1 transition-colors duration-300 hover:text-indigo-500 
                /* Pewarnaan Teks Aktif */
                ${activeSection === link.id 
                  ? 'text-indigo-600 font-bold dark:text-indigo-400' 
                  : 'text-slate-600 dark:text-slate-300'
                }
                /* Efek Animasi Garis Bawah (Underline) */
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all after:duration-300 
                ${activeSection === link.id 
                  ? 'after:w-full' /* Jika aktif, garis bawah penuh */
                  : 'after:w-0 hover:after:w-full' /* Jika tidak aktif, garis bawah 0, memanjang saat di-hover */
                }
              `}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </header>
  )
}