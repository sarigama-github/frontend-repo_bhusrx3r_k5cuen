import { BookOpen, Star, Video } from 'lucide-react';

const items = [
  { id: 1, title: 'JavaScript Essentials', type: 'Course', icon: Video, rating: 4.8, tag: 'Trending' },
  { id: 2, title: 'Python for Data Science', type: 'Course', icon: Video, rating: 4.7, tag: 'New' },
  { id: 3, title: 'System Design Handbook', type: 'Book', icon: BookOpen, rating: 4.9, tag: 'Bestseller' },
  { id: 4, title: 'Frontend Interview Kit', type: 'Book', icon: BookOpen, rating: 4.6, tag: 'Hot' },
];

export default function Showcase() {
  return (
    <section id="courses" className="py-14 sm:py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">Trending Courses & Books</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mt-1">Hand-picked resources to level up your skills.</p>
          </div>
          <a href="#" className="text-sm font-medium text-indigo-600 dark:text-indigo-400">View all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ id, title, type, icon: Icon, rating, tag }) => (
            <div key={id} className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <span className="text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">{type}</span>
                <span className="text-xs px-2 py-1 rounded-md bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">{tag}</span>
              </div>
              <div className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-neutral-900 dark:text-white line-clamp-2">{title}</h3>
              <div className="mt-2 flex items-center gap-1 text-amber-500">
                <Star className="h-4 w-4 fill-amber-400 stroke-amber-500" />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">{rating}</span>
              </div>
              <button className="mt-4 w-full rounded-lg border border-neutral-200 dark:border-neutral-700 py-2.5 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
