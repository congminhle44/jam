/** @format */

import { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import useToggle from '@/hooks/useToggle';

import Brand from '@/assets/Images/brand.png';
import { Menu, Search, Sun } from '@/components/Icons';

import styles from './header.module.css';
import Typography, { TypographyVariants } from '@/components/Typography';
import clsx from 'clsx';
import Input from '@/components/Input';
import useClickOutside from '@/hooks/useClickOutside';

const Header = () => {
  const searchRef = useRef();
  const isSearch = useToggle(false);

  useClickOutside(searchRef, isSearch.setInActive);

  return (
    <div
      className={clsx(
        styles.container,
        window.location.pathname === '/' && styles.transparent
      )}>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <Menu />
        </div>
        <div className={styles.brandWrap}>
          <Link to='/' exact>
            <img className={styles.brand} src={Brand} alt='Brand' />
          </Link>
          <div className={styles.navigate}>
            <NavLink className={styles.navItem} to='/about'>
              <Typography variant={TypographyVariants.Body1}>
                About Us
              </Typography>
            </NavLink>

            <div className={styles.categoriesNav}>
              <Typography variant={TypographyVariants.Body1}>
                Categories
              </Typography>
            </div>

            <NavLink className={styles.navItem} to='/login'>
              <Typography variant={TypographyVariants.Body1}>
                Sign In
              </Typography>
            </NavLink>
          </div>
        </div>
        <div className={styles.feature}>
          <div ref={searchRef} className={styles.search}>
            <div
              className={clsx(
                styles.searchWrap,
                isSearch.active && styles.show
              )}>
              <div
                onClick={isSearch.setActive}
                className={clsx(
                  styles.searchIco,
                  isSearch.active && styles.hide
                )}>
                <Search />
              </div>
              <Input placeholder='Search' search />
            </div>
          </div>
          <div className={styles.toggleTheme}>
            <Sun />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
