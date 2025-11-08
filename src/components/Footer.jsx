export default function Footer() {
  return (
    <footer id="about" className="border-t border-neutral-200 dark:border-neutral-800 py-10 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-neutral-900 dark:text-white">Jayvik Learn Hub</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">A modern learning and e-commerce platform offering courses, books, and a built-in code editor to practice in real-time.</p>
          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">⚡ Powered by Jayvik Labs – Inspiring the Next Generation of Coders.</p>
        </div>
        <div>
          <h4 className="font-semibold text-neutral-900 dark:text-white">Quick Links</h4>
          <ul className="mt-2 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <li><a href="#courses" className="hover:text-neutral-900 dark:hover:text-white">Courses</a></li>
            <li><a href="#books" className="hover:text-neutral-900 dark:hover:text-white">Books</a></li>
            <li><a href="#editor" className="hover:text-neutral-900 dark:hover:text-white">Editor</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-neutral-900 dark:text-white">Contact</h4>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Have questions? Reach out at team@jayviklabs.dev</p>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Jayvik Labs. All rights reserved.</div>
    </footer>
  );
}
