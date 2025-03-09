import React, { useState, useEffect } from 'react';
import './App.css';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Home from './components/Home';

function App() {
  const [user, setUser] = useState({
    name: 'John Doe',
    settings: {
      darkMode: false,
    },
  });

  const handleNameChange = (e) => {
    setUser({
      ...user,
      name: e.target.value,
    });
  };

  const toggleDarkMode = () => {
    setUser({
      ...user,
      settings: {
        ...user.settings,
        darkMode: !user.settings.darkMode,
      },
    });
  };

  useEffect(() => {
    if (user.settings.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [user.settings.darkMode]);

  return (
    <div className={user.settings.darkMode ? 'dark' : 'light'}>
      <Home />
      <Profile user={user} onNameChange={handleNameChange} />
      <Settings 
        darkMode={user.settings.darkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
    </div>
  );
}

export default App;
