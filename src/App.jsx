import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Editor from './components/Editor';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Editor />
      </main>
      <Footer />
    </div>
  );
}

export default App;
