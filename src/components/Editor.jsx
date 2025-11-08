import React, { useMemo, useState } from 'react';
import { Play, RotateCcw, Code } from 'lucide-react';

const defaultHTML = `<!-- HTML -->\n<div class="wrap">\n  <h1>Jayvik Learn Hub</h1>\n  <p>Write HTML, CSS, and JavaScript — then run it live.</p>\n  <button id="ping">Run JS</button>\n  <div id="out"></div>\n</div>`;

const defaultCSS = `/* CSS */\n:root{color-scheme:light dark;}\nbody{font-family:Inter,system-ui,Arial,Helvetica,sans-serif;margin:0;padding:24px;background:radial-gradient(600px circle at 0 0,#7c3aed0a,transparent 40%),radial-gradient(800px circle at 100% 100%,#06b6d40a,transparent 40%);}\n.wrap{max-width:720px;margin-inline:auto;padding:24px;border-radius:16px;background:rgba(255,255,255,.7);backdrop-filter:saturate(1.2) blur(6px);box-shadow:0 10px 30px -10px rgba(2,6,23,.15)}\n@media (prefers-color-scheme: dark){.wrap{background:rgba(24,24,27,.7);}}\n#out{margin-top:10px;padding:12px;border-radius:10px;background:#1118270a}\nbutton{appearance:none;border:0;background:#4f46e5;color:white;padding:8px 14px;border-radius:10px;font-weight:600}`;

const defaultJS = `// JavaScript\nconst btn = document.getElementById('ping');\nconst out = document.getElementById('out');\nbtn.addEventListener('click', () => {\n  out.textContent = 'Hello from Jayvik Labs! ⚡';\n});`;

const Editor = () => {
  const [html, setHtml] = useState(defaultHTML);
  const [css, setCss] = useState(defaultCSS);
  const [js, setJs] = useState(defaultJS);
  const [key, setKey] = useState(0);

  const srcDoc = useMemo(() => {
    return `<!doctype html><html><head><meta charset='utf-8'><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`;
  }, [html, css, js]);

  const run = () => setKey((k) => k + 1);
  const reset = () => {
    setHtml(defaultHTML);
    setCss(defaultCSS);
    setJs(defaultJS);
    setKey((k) => k + 1);
  };

  return (
    <section id="editor" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">Built-in Code Editor</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Write HTML, CSS, and JavaScript. Run it live in the browser. Python support coming soon.</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={run} className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow-md hover:bg-indigo-500 transition"><Play size={16} />Run</button>
            <button onClick={reset} className="inline-flex items-center gap-2 rounded-xl bg-white dark:bg-zinc-900 ring-1 ring-zinc-200/70 dark:ring-zinc-800 text-zinc-900 dark:text-zinc-100 px-4 py-2 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"><RotateCcw size={16} />Reset</button>
          </div>
        </div>

        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden ring-1 ring-zinc-200/70 dark:ring-zinc-800">
              <div className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/60 px-4 py-2 text-xs text-zinc-600 dark:text-zinc-300"><span className="inline-flex items-center gap-2"><Code size={14} />HTML</span></div>
              <textarea value={html} onChange={(e) => setHtml(e.target.value)} className="w-full h-40 p-4 bg-white dark:bg-zinc-900 text-sm text-zinc-800 dark:text-zinc-100 outline-none" />
            </div>
            <div className="rounded-2xl overflow-hidden ring-1 ring-zinc-200/70 dark:ring-zinc-800">
              <div className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/60 px-4 py-2 text-xs text-zinc-600 dark:text-zinc-300"><span className="inline-flex items-center gap-2"><Code size={14} />CSS</span></div>
              <textarea value={css} onChange={(e) => setCss(e.target.value)} className="w-full h-40 p-4 bg-white dark:bg-zinc-900 text-sm text-zinc-800 dark:text-zinc-100 outline-none" />
            </div>
            <div className="rounded-2xl overflow-hidden ring-1 ring-zinc-200/70 dark:ring-zinc-800">
              <div className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/60 px-4 py-2 text-xs text-zinc-600 dark:text-zinc-300"><span className="inline-flex items-center gap-2"><Code size={14} />JavaScript</span></div>
              <textarea value={js} onChange={(e) => setJs(e.target.value)} className="w-full h-40 p-4 bg-white dark:bg-zinc-900 text-sm text-zinc-800 dark:text-zinc-100 outline-none" />
            </div>
          </div>

          <div className="rounded-2xl ring-1 ring-zinc-200/70 dark:ring-zinc-800 overflow-hidden bg-white dark:bg-zinc-900">
            <div className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/60 px-4 py-2 text-xs text-zinc-600 dark:text-zinc-300"><span>Preview</span><span className="text-[11px]">Sandboxed</span></div>
            <iframe key={key} title="Preview" className="w-full h-[600px]" sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts" srcDoc={srcDoc} />
          </div>
        </div>

        <div className="mt-6 rounded-2xl ring-1 ring-zinc-200/70 dark:ring-zinc-800 p-4 bg-white dark:bg-zinc-900">
          <p className="text-sm text-zinc-700 dark:text-zinc-300">Python execution will be enabled via a backend runtime or Pyodide in a future update.</p>
        </div>
      </div>
    </section>
  );
};

export default Editor;
