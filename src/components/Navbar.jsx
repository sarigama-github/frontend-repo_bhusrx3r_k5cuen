import React, { useEffect, useState } from 'react';
import { Rocket, ShoppingCart, User, Sun, Moon, Search } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('theme') || 'light';
  });

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
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 rounded-full border border-zinc-300/50 dark:border-zinc-700/60 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
    </button>
  );
};

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-zinc-900/60 border-b border-zinc-200/70 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-lg">
              <Rocket size={18} />
            </span>
            <div>
              <p className="text-base font-semibold text-zinc-900 dark:text-white leading-none">Jayvik Learn Hub</p>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-none">Powered by Jayvik Labs</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#home">Home</a>
            <a className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#courses">Courses</a>
            <a className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#books">Books</a>
            <a className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#challenges">Challenges</a>
            <a className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#editor">Code Editor</a>
            <a className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#about">About</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-zinc-300/60 dark:border-zinc-700/60 px-3 py-1.5">
              <Search size={16} className="text-zinc-500" />
              <input
                className="w-40 bg-transparent text-sm outline-none placeholder:text-zinc-400 text-zinc-800 dark:text-zinc-200"
                placeholder="Search..."
              />
            </div>
            <ThemeToggle />
            <button className="relative inline-flex items-center justify-center h-10 w-10 rounded-full border border-zinc-300/60 dark:border-zinc-700/60 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
              <ShoppingCart size={18} />
              <span className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center">2</span>
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium hover:opacity-90 transition">
              <User size={16} />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
