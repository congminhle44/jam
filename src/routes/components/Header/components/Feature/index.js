/** @format */
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import useToggle from '@/hooks/useToggle';
import useClickOutside from '@/hooks/useClickOutside';

import Input from '@/components/Input';
import { Moon, Search, Sun } from '@/components/Icons';

import styles from '../../header.module.css';

const HeaderFeature = () => {
  const defaultTheme = localStorage.getItem('theme');

  const [theme, setTheme] = useState(defaultTheme || 'light');
  const searchRef = useRef();
  const isSearch = useToggle(false);

  useClickOutside(searchRef, isSearch.setInActive);

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
    <div className={styles.feature}>
      <div ref={searchRef} className={styles.search}>
        <div
          className={clsx(styles.searchWrap, isSearch.active && styles.show)}>
          <div
            onClick={isSearch.setActive}
            className={clsx(styles.searchIco, isSearch.active && styles.hide)}>
            <Search />
          </div>
          <Input placeholder='Search' search />
        </div>
      </div>
      <div onClick={toggleTheme} className={styles.toggleTheme}>
        {theme === 'dark' ? <Sun /> : <Moon />}
      </div>
    </div>
  );
};

export default HeaderFeature;
