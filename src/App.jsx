import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Editor from './components/Editor';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Editor />
      </main>
      <Footer />
    </div>
  );
};

export default App;
