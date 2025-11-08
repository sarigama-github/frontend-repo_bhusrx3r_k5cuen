import { useEffect, useState } from 'react';
import { Search, ShoppingCart, User, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4">
        <a href="#" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 text-white">JL</span>
          <span className="hidden sm:block">Jayvik Learn Hub</span>
        </a>

        <nav className="ml-2 hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a className="hover:text-neutral-900 dark:hover:text-white" href="#courses">Courses</a>
          <a className="hover:text-neutral-900 dark:hover:text-white" href="#books">Books</a>
          <a className="hover:text-neutral-900 dark:hover:text-white" href="#editor">Editor</a>
          <a className="hover:text-neutral-900 dark:hover:text-white" href="#about">About</a>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 px-3 py-2 border border-neutral-200 dark:border-neutral-700">
            <Search className="h-4 w-4 text-neutral-500" />
            <input
              aria-label="Search"
              className="bg-transparent outline-none text-sm w-40 placeholder-neutral-500 text-neutral-800 dark:text-neutral-100"
              placeholder="Search courses, books..."
            />
          </div>

          <button
            className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm">
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
          </button>

          <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Login</span>
          </button>
        </div>
      </div>
    </header>
  );
}
