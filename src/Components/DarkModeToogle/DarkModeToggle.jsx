import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
    onClick={toggleDarkMode}
    className={`bg-gray-200 dark:bg-gray-800 p-2 rounded-full focus:outline-none focus:ring`}
  >
    {darkMode ? 'Light Mode' : 'Dark Mode'}
  </button>
  );
};

export default DarkModeToggle;
