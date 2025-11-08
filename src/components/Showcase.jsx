import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Code, Flame } from 'lucide-react';

const Card = ({ icon: Icon, title, desc, tag }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group rounded-2xl ring-1 ring-zinc-200/70 dark:ring-zinc-800 bg-white dark:bg-zinc-900 p-5 hover:shadow-lg hover:shadow-indigo-600/10 transition relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 to-fuchsia-500/0 group-hover:from-indigo-500/5 group-hover:to-fuchsia-500/10 transition" />
    <div className="flex items-start gap-4">
      <div className="h-11 w-11 rounded-xl grid place-items-center bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-lg">
        <Icon size={18} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>
        {tag && (
          <span className="mt-3 inline-flex items-center rounded-full bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 px-2.5 py-1 text-xs ring-1 ring-indigo-600/20">{tag}</span>
        )}
      </div>
    </div>
  </motion.div>
);

const Showcase = () => {
  return (
    <section id="courses" className="py-16 bg-gradient-to-b from-transparent to-zinc-50 dark:to-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">Trending Courses & Featured Books</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Browse, search, and download free or premium content.</p>
          </div>
          <a href="#books" className="hidden sm:inline-flex items-center rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium ring-1 ring-zinc-200/70 dark:ring-zinc-800 hover:opacity-90">See all</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card icon={Video} title="Full-Stack Web Dev" desc="React, Node, and databases in one practical, project-first course." tag="Premium" />
          <Card icon={BookOpen} title="System Design Handbook" desc="A concise PDF on scalable systems with diagrams and cheatsheets." tag="Free" />
          <Card icon={Code} title="JS 30 Challenges" desc="Sharpen your skills with modern JavaScript challenges and solutions." tag="Challenge" />
        </div>

        <div id="challenges" className="mt-12 rounded-2xl ring-1 ring-zinc-200/70 dark:ring-zinc-800 p-6 bg-white dark:bg-zinc-900">
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-to-tr from-orange-500 via-pink-500 to-violet-600 text-white shadow-lg"><Flame size={18} /></span>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Weekly Coding Challenge</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Build a themeable Markdown previewer with live code execution.</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {['Beginner', 'Frontend', 'React', 'Markdown', 'Live Preview'].map((t) => (
              <span key={t} className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300 ring-1 ring-zinc-200/70 dark:ring-zinc-700">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
