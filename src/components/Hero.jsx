import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        {/* 3D Scene */}
        <Spline scene="https://prod.spline.design/bUmljvJqgWX2QKOM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full px-3 py-1">
            <Rocket className="h-3.5 w-3.5" /> Jayvik Learn Hub
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Learn. Build. Launch your coding journey.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
            Courses, books, and an in-browser code editor—everything you need to go from idea to production, powered by Jayvik Labs.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#courses" className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-3 font-medium">
              Get Started
            </a>
            <a href="#editor" className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 dark:border-neutral-700 px-5 py-3 font-medium text-neutral-900 dark:text-white">
              <Play className="h-4 w-4" /> Try the Editor
            </a>
          </div>
          <p className="mt-6 text-sm text-neutral-600 dark:text-neutral-400">⚡ Powered by Jayvik Labs – Inspiring the Next Generation of Coders.</p>
        </div>

        <div className="w-full md:w-1/2">
          <div className="w-full aspect-video rounded-xl overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop"
              alt="Coding"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Gradient overlay that does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/90 dark:from-neutral-950/80 dark:via-neutral-950/20 dark:to-neutral-950/90" />
    </section>
  );
}
