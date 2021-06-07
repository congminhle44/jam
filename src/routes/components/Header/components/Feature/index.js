/** @format */
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import useToggle from '@/hooks/useToggle';
import useClickOutside from '@/hooks/useClickOutside';

import Input from '@/components/Input';
import { Moon, Search, Sun } from '@/components/Icons';

import styles from '../../header.module.css';
import SearchList from '../SearchList';

const HeaderFeature = ({
  handleTypingKeyword,
  keyword,
  courses,
  isLoading,
  showInput,
  hideInput,
  isActive,
}) => {
  const defaultTheme = localStorage.getItem('theme');

  const [theme, setTheme] = useState(defaultTheme || 'light');
  const isSearch = useToggle(false);
  const isKeywordType = useToggle(false);

  const searchListRef = useRef();
  const searchRef = useRef();

  useClickOutside(searchListRef, isKeywordType.setInActive);
  useClickOutside(searchRef, hideInput);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    document.documentElement.classList.add('theme-transition');
    window.setTimeout(function () {
      document.documentElement.classList.remove('theme-transition');
    }, 1000);
  }, [theme, defaultTheme]);
  useEffect(() => {
    keyword !== '' ? isKeywordType.setActive() : isKeywordType.setInActive();
  }, [keyword, isKeywordType]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <div className={styles.feature}>
      <div ref={searchListRef} className={styles.listSearchWrap}>
        <div ref={searchRef} className={styles.search}>
          <div className={styles.searchWrap}>
            {!isActive && (
              <div
                onClick={showInput}
                className={clsx(
                  styles.searchIco,
                  isSearch.active && styles.hide
                )}>
                <Search />
              </div>
            )}
            {isActive && (
              <Input
                onChange={handleTypingKeyword}
                placeholder='Search'
                search
              />
            )}
          </div>
        </div>
        {isKeywordType.active && (
          <SearchList courses={courses} isLoading={isLoading} />
        )}
      </div>
      <div onClick={toggleTheme} className={styles.toggleTheme}>
        {theme === 'dark' ? <Sun /> : <Moon />}
      </div>
    </div>
  );
};

export default HeaderFeature;
