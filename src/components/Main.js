import React from 'react';
import Home from './Home';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';

function Main({ darkMode }) {
  return (
    <main className={`${darkMode ? 'darkMode' : ''}`}>
      <Home darkMode={darkMode} />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default Main;
