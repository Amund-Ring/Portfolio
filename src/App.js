import { useState } from 'react';
import Main from './Main';
import Navbar from './Navbar';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="app">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
