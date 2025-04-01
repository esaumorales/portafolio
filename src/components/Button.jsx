import { useEffect, useState } from 'react';

export default function ThemeToggleButton() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className='
        bg-white 
        text-gray-700 
        dark:bg-gray-800 
        dark:text-white 
        hover:bg-gray-200 
        dark:hover:bg-gray-700 
        rounded-2xl 
        w-20 
        h-8
      '>
      {darkMode ? 'Light' : 'Dark'}
    </button>
  );
}
