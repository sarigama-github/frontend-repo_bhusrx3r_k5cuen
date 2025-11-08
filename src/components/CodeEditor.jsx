import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, Code2 } from 'lucide-react';

// Lightweight in-browser editors using textarea, supports HTML/CSS/JS live preview
// and a basic Python runner via Skulpt CDN for demo purposes.

const defaultHTML = `<!doctype html>\n<html>\n<head>\n<meta charset=\"utf-8\"/>\n<title>Playground</title>\n<style>body{font-family:Inter,system-ui;padding:20px}</style>\n</head>\n<body>\n<h1>Hello from Jayvik Learn Hub</h1>\n<p>Edit HTML, CSS, and JS to see changes live.</p>\n</body>\n</html>`;

const defaultCSS = `h1{color:#6366f1} p{color:#334155}`;
const defaultJS = `console.log('Jayvik Labs ❤️ Students');`;
const defaultPy = `print('Hello from Python in the browser!')`;

const CodeEditor = () => {
  const [html, setHtml] = useState(defaultHTML);
  const [css, setCss] = useState(defaultCSS);
  const [js, setJs] = useState(defaultJS);
  const [py, setPy] = useState(defaultPy);
  const iframeRef = useRef(null);

  const runWeb = () => {
    const doc = `<!doctype html><html><head><meta charset='utf-8'><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`;
    if (iframeRef.current) {
      iframeRef.current.srcdoc = doc;
    }
  };

  useEffect(() => {
    runWeb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const runPython = async () => {
    const pyFrame = document.createElement('iframe');
    pyFrame.style.display = 'none';
    document.body.appendChild(pyFrame);
    const win = pyFrame.contentWindow;
    const html = `<!doctype html><html><head><meta charset='utf-8'></head><body><pre id='out'></pre><script src='https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js'><\/script><script src='https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js'><\/script><script>function outf(txt){document.getElementById('out').innerText+=txt;} Sk.configure({output:outf, read:function(x){if(Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) throw 'File not found'; return Sk.builtinFiles["files"][x];}}); (Sk.misceval.asyncToPromise(function(){return Sk.importMainWithBody('<stdin>', false, ${JSON.stringify(py)}, true);})).then(function(){parent.postMessage({type:'py_out', data:document.getElementById('out').innerText}, '*');}, function(e){parent.postMessage({type:'py_out', data:String(e)}, '*');});<\/script></body></html>`;
    win.document.open();
    win.document.write(html);
    win.document.close();
  };

  useEffect(() => {
    function handler(e){
      if(e.data && e.data.type === 'py_out'){
        alert(e.data.data);
      }
    }
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const resetAll = () => {
    setHtml(defaultHTML);
    setCss(defaultCSS);
    setJs(defaultJS);
    setPy(defaultPy);
    runWeb();
  };

  return (
    <section id="editor" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">In-browser Code Editor</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Write and run HTML, CSS, JS, and Python snippets instantly.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={resetAll} className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm ring-1 ring-zinc-200/70 dark:ring-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800"><RotateCcw size={16}/>Reset</button>
            <button onClick={runWeb} className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm bg-indigo-600 text-white hover:bg-indigo-500"><Play size={16}/>Run Web</button>
            <button onClick={runPython} className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm bg-fuchsia-600 text-white hover:bg-fuchsia-500"><Code2 size={16}/>Run Python</button>
          </div>
        </div>

        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <EditorArea label="HTML" value={html} onChange={setHtml} language="html" />
            <EditorArea label="CSS" value={css} onChange={setCss} language="css" />
            <EditorArea label="JavaScript" value={js} onChange={setJs} language="js" />
            <EditorArea label="Python" value={py} onChange={setPy} language="py" />
          </div>
          <div className="h-[520px] rounded-2xl ring-1 ring-zinc-200/70 dark:ring-zinc-800 overflow-hidden bg-white dark:bg-zinc-900">
            <iframe ref={iframeRef} title="Preview" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

const EditorArea = ({ label, value, onChange, language }) => {
  return (
    <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.4}} className="rounded-2xl overflow-hidden ring-1 ring-zinc-200/70 dark:ring-zinc-800 bg-white dark:bg-zinc-900">
      <div className="flex items-center justify-between px-3 py-2 bg-zinc-50 dark:bg-zinc-800">
        <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{label}</span>
        <span className="text-[10px] text-zinc-500">{language}</span>
      </div>
      <textarea
        className="w-full h-32 sm:h-36 p-3 bg-transparent outline-none text-sm text-zinc-900 dark:text-zinc-100"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
      />
    </motion.div>
  );
};

export default CodeEditor;
