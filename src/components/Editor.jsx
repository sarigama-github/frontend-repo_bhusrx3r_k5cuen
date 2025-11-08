import { useEffect, useMemo, useRef, useState } from 'react';
import { Code, RotateCcw, Play } from 'lucide-react';

const defaultHTML = `<!-- Write HTML here -->\n<div class="container">\n  <h1>Hello, Jayvik Learn Hub!</h1>\n  <p>Edit the code and click Run to see changes.</p>\n  <button class="btn">Click me</button>\n</div>`;

const defaultCSS = `/* Write CSS here */\n* { box-sizing: border-box; }\nbody { font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; padding: 20px; background: #0b1020; color: #e8eefc; }\n.container { max-width: 720px; margin: 0 auto; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 24px; }\n.btn { background: #6366f1; border: 0; color: white; padding: 10px 14px; border-radius: 10px; cursor: pointer; }\n.btn:hover { filter: brightness(1.1); }`;

const defaultJS = `// Write JS here\nconst btn = document.querySelector('.btn');\nbtn?.addEventListener('click', () => alert('Hello from the sandbox!'));`;

function Pane({ title, value, onChange }) {
  return (
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
      <div className="px-3 py-2 bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300">{title}</div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 p-3 font-mono text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 outline-none"
      />
    </div>
  );
}

export default function Editor() {
  const [html, setHtml] = useState(defaultHTML);
  const [css, setCss] = useState(defaultCSS);
  const [js, setJs] = useState(defaultJS);
  const iframeRef = useRef(null);

  const srcDoc = useMemo(() => {
    return `<!DOCTYPE html><html><head><meta charset=\"UTF-8\"/><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/><style>${css}</style></head><body>${html}<script>${js}<\\/script></body></html>`;
  }, [html, css, js]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.srcdoc = srcDoc;
    }
  }, [srcDoc]);

  const handleReset = () => {
    setHtml(defaultHTML);
    setCss(defaultCSS);
    setJs(defaultJS);
  };

  return (
    <section id="editor" className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">Playground Editor</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mt-1">Write HTML, CSS, and JavaScript. Preview updates instantly.</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleReset} className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-700 px-3 py-2 text-sm">
              <RotateCcw className="h-4 w-4" /> Reset
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Pane title="HTML" value={html} onChange={setHtml} />
            <Pane title="CSS" value={css} onChange={setCss} />
            <Pane title="JavaScript" value={js} onChange={setJs} />
          </div>

          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900">
            <div className="px-3 py-2 bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 flex items-center justify-between">
              <span className="inline-flex items-center gap-2"><Code className="h-4 w-4" /> Preview</span>
              <span className="text-neutral-500">Sandboxed Iframe</span>
            </div>
            <iframe
              ref={iframeRef}
              title="preview"
              sandbox="allow-scripts"
              className="w-full h-[480px] bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
