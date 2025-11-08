import React from 'react';

const Footer = () => {
  return (
    <footer id="about" className="border-t border-zinc-200/70 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Jayvik Learn Hub</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">A student-first platform to learn, build, and launch projects with curated courses, ebooks, and coding challenges.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">About Jayvik Labs</h4>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Jayvik Labs is a student-focused innovation company crafting tools that empower the next generation of builders and creators.</p>
          </div>
          <div className="md:text-right">
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">Quick Links</h4>
            <div className="mt-3 space-y-2 text-sm">
              <a href="#home" className="block text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400">Home</a>
              <a href="#courses" className="block text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400">Courses & Books</a>
              <a href="#editor" className="block text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400">Code Editor</a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-zinc-200/70 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} Jayvik Labs. All rights reserved.</p>
          <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">⚡ Powered by Jayvik Labs – Inspiring the Next Generation of Coders.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
