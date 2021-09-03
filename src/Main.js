import React from 'react';
// import Contact from './Contact';
import Home from './Home';
// import Portfolio from './Portfolio';
// import Skills from './Skills';
// import { Link } from 'react-scroll';

function Main({ darkMode }) {
  console.log(darkMode);
  return (
    <main className={`${darkMode ? 'darkMode' : ''}`}>
      
      <Home />
      {/* <Portfolio />
      <Skills />
      <Contact /> */}

      <div className="rectangle"></div>
    </main>
  );
}

export default Main;
