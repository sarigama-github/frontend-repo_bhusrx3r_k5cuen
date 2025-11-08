import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Star } from 'lucide-react';

const Stat = ({ value, label }) => (
  <div className="flex items-center gap-3">
    <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white grid place-items-center shadow-lg">
      <Star size={18} />
    </div>
    <div>
      <p className="text-xl font-semibold text-zinc-900 dark:text-white">{value}</p>
      <p className="text-xs text-zinc-600 dark:text-zinc-400">{label}</p>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7qQ7p8vW-Placeholder/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-zinc-900/70 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300 ring-1 ring-zinc-200/60 dark:ring-zinc-800/70 backdrop-blur">
              ⚡ Powered by Jayvik Labs
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-tr from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Jayvik Learn Hub
            </h1>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300 text-base sm:text-lg">
              A futuristic learning and e-commerce platform for students. Explore trending courses, download curated books, solve coding challenges, and run code directly in your browser.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#courses" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition">Explore Courses</a>
              <a href="#editor" className="inline-flex items-center justify-center rounded-xl bg-white dark:bg-zinc-900 px-5 py-3 text-sm font-medium ring-1 ring-zinc-200/70 dark:ring-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">Open Code Editor</a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <Stat value="2k+" label="Active Students" />
              <Stat value="120+" label="Premium Courses" />
              <Stat value="450+" label="Curated Books" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-[420px] rounded-2xl ring-1 ring-zinc-200/70 dark:ring-zinc-800 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent dark:from-zinc-900/80 dark:via-zinc-900/30 pointer-events-none" />
            <iframe
              title="Preview"
              srcDoc="<!doctype html><html><head><meta charset='utf-8'><style>html,body{height:100%;margin:0;background:#0b1020;color:#fff;font-family:Inter,system-ui} .box{position:absolute;inset:0;display:grid;place-items:center} .glow{background:radial-gradient(600px circle at 0 0,#7c3aed33,transparent 40%),radial-gradient(600px circle at 100% 100%,#22d3ee33,transparent 40%); inset:0; position:absolute;filter:saturate(1.1)}</style></head><body><div class='glow'></div><div class='box'><h2 style='font-weight:800;letter-spacing:-.02em'>Build. Learn. Launch.</h2></div></body></html>"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
