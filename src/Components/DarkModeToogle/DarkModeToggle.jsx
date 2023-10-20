import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className={`bg-gray-200 dark:bg-dark text-gray-800 dark:text-dark rounded-full p-2 focus:outline-none`}
        onClick={toggleDarkMode}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-dark' : 'bg-gray-200'}`} />
    </div>
  );
};

export default DarkModeToggle;
