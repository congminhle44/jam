/** @format */
import { Moon, Sun } from '@/components/Icons';
import { useEffect, useState } from 'react';
import styles from '../../header.module.css';

const ThemeMode = () => {
  const defaultTheme = localStorage.getItem('theme');

  const [theme, setTheme] = useState(defaultTheme || 'light');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    document.documentElement.classList.add('theme-transition');
    window.setTimeout(function () {
      document.documentElement.classList.remove('theme-transition');
    }, 1000);
  }, [theme, defaultTheme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  };
  return (
    <div onClick={toggleTheme} className={styles.toggleTheme}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </div>
  );
};

export default ThemeMode;
