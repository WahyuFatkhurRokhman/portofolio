// src/components/ThemeToggle.jsx
import { Sun, Moon } from 'lucide-react';

export function getInitialTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export default function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === 'dark';

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
  );
}