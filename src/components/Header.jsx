import { Sparkles } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Header({ theme, setTheme }) {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
      <a href="#home" className="flex items-center gap-3 font-black tracking-tight">
        <div className="grid size-10 place-items-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
          <Sparkles className="size-5" />
        </div>
        <span>TeamPortfolio</span>
      </a>

      <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
        <a href="#about" className="hover:text-indigo-500">About</a>
        <a href="#projects" className="hover:text-indigo-500">Projects</a>
        <a href="#skills" className="hover:text-indigo-500">Skills</a>
        <a href="#contact" className="hover:text-indigo-500">Contact</a>
      </nav>

      <ThemeToggle theme={theme} setTheme={setTheme} />
    </header>
  )
}