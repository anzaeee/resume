// layout.js
import Head from 'next/head';
import { useEffect, useState } from 'react';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode');
    if (isDarkMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    const className = darkMode ? 'dark-mode' : 'light-mode';
    document.body.className = className;
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Your Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-end p-4">
        <button
          onClick={toggleDarkMode}
          className={`focus:outline-none ${
            darkMode ? 'text-purple-500 dark:text-blue-500' : 'text-blue-500 dark:text-purple-500'
          }`}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
