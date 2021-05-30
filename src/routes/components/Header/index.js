/** @format */
import { useEffect } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import useToggle from '@/hooks/useToggle';

import Brand from '@/assets/Images/brand.png';
import { DesktopNav, HeaderFeature, MobileMenu, MobileNav } from './components';

import styles from './header.module.css';

const Header = () => {
  const background = useToggle(false);

  const menuOpen = useToggle(false);

  const handleScroll = () => {
    if (window.pageYOffset === 0) {
      background.setActive();
    } else {
      background.setInActive();
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div
      className={clsx(
        styles.container,
        window.location.pathname === '/' &&
          background.active &&
          styles.transparent
      )}>
      <div className={styles.wrapper}>
        <MobileMenu onOpen={menuOpen.setActive} />
        <MobileNav isOpen={menuOpen.active} onClose={menuOpen.setInActive} />
        <div className={styles.brandWrap}>
          <Link to='/' exact>
            <img className={styles.brand} src={Brand} alt='Brand' />
          </Link>
          <DesktopNav />
        </div>
        <HeaderFeature />
      </div>
    </div>
  );
};

export default Header;
