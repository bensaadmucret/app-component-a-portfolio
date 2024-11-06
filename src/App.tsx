import React from 'react';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;