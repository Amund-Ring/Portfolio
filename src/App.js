import { useState } from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="app">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main darkMode={darkMode} />
      <div className="rectangle"></div>
    </div>
  );
}

export default App;
