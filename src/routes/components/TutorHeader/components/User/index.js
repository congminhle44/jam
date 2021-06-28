/** @format */
import clsx from 'clsx';
import { useAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import {
  Logout,
  Moon,
  Profile,
  Sun,
  Swap,
  Us,
  Vietnam,
} from '@/components/Icons';
import Typography, { TypographyVariants } from '@/components/Typography';
import useClickOutside from '@/hooks/useClickOutside';
import useToggle from '@/hooks/useToggle';
import { setLangAtom } from '@/store/lang';

import styles from './user.module.css';

const User = ({ userInfo, handleLogout }) => {
  const containerRef = useRef();
  const toggleMenu = useToggle();
  const [, setLang] = useAtom(setLangAtom);
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

  useClickOutside(containerRef, toggleMenu.setInActive);

  return (
    <div ref={containerRef} className={styles.container}>
      <img
        onClick={() => toggleMenu.toggle()}
        className={styles.ava}
        src={userInfo.avatar}
        alt={userInfo.fullName}
      />
      <div className={clsx(styles.menu, toggleMenu.active && styles.show)}>
        <Link className={styles.link} to='/profile'>
          <div className={styles.icon}>
            <Profile />
          </div>
          <Typography
            className={styles.profile}
            variant={TypographyVariants.Body1}>
            <FormattedMessage id='header.profile' />
          </Typography>
        </Link>
        <Link className={styles.link} to='/'>
          <div className={styles.icon}>
            <Swap />
          </div>
          <Typography
            className={styles.profile}
            variant={TypographyVariants.Body1}>
            <FormattedMessage id='header.switchClient' />
          </Typography>
        </Link>
        <div onClick={toggleTheme} className={styles.link}>
          <div className={styles.icon}>
            {theme === 'dark' ? <Sun /> : <Moon />}
          </div>
          <Typography
            className={styles.profile}
            variant={TypographyVariants.Body1}>
            <FormattedMessage id='header.theme' />
          </Typography>
        </div>
        <div onClick={handleLogout} className={styles.link}>
          <div className={styles.icon}>
            <Logout />
          </div>
          <Typography
            className={styles.profile}
            variant={TypographyVariants.Body1}>
            <FormattedMessage id='common.logout' />
          </Typography>
        </div>
        <div className={styles.lang}>
          <Typography variant={TypographyVariants.Label1}>
            <FormattedMessage id='common.languages' />
          </Typography>
          <div className={styles.langList}>
            <div onClick={() => setLang('en')} className={styles.langItem}>
              <Us />
            </div>
            <div onClick={() => setLang('vi')} className={styles.langItem}>
              <Vietnam />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
