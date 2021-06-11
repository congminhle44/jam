/** @format */
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';

import useToggle from '@/hooks/useToggle';

import { DesktopNav, HeaderFeature, MobileMenu, MobileNav } from './components';
import { removeUserInfoAtom } from '@/store/login';

import styles from './header.module.css';
import { usePublicCourses } from '@/queries/hooks/courses';
import { useGetCartItem, useLogout } from '@/queries/hooks/users';

import { Brand } from '@/components/Icons';
import { derivedTokenAtom, removeTokenAtom } from '@/store/token';
import { removeRefreshTokenAtom } from '@/store/refreshToken';

const Header = () => {
  const [keyword, setKeyword] = useState('');

  const [, removeUserInfo] = useAtom(removeUserInfoAtom);
  const [token] = useAtom(derivedTokenAtom);
  const [, removeUserToken] = useAtom(removeTokenAtom);
  const [, removeUserRefreshToken] = useAtom(removeRefreshTokenAtom);

  const transparent = useToggle(false);
  const openMenu = useToggle(false);
  const menuOpen = useToggle(false);
  const showSearchInput = useToggle(false);

  const { data: courses, isLoading } = usePublicCourses('', '', keyword);
  const { data: cartItems } = useGetCartItem(token);
  const { mutateAsync: logoutRemoveRefreshToken } = useLogout();

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = () => {
    if (window.pageYOffset === 0) {
      transparent.setInActive();
    } else {
      transparent.setActive();
    }
  };

  const handleLogout = () => {
    logoutRemoveRefreshToken({
      refreshToken: JSON.parse(localStorage.getItem('rid')),
    }).then((result) => {
      removeUserInfo();
      removeUserToken();
      removeUserRefreshToken();
    });
  };

  const handleTypingKeyword = debounce((e) => {
    const { value } = e.target;
    setKeyword(value);
  }, 300);
  const handleBlankKeyword = () => {
    setKeyword('');
  };
  const showInput = () => {
    showSearchInput.setActive();
  };
  const hideInput = () => {
    showSearchInput.setInActive();
    setKeyword('');
  };

  return (
    <div
      className={clsx(
        styles.container,
        (window.location.pathname !== '/' || transparent.active) &&
          styles.background
      )}>
      <div className={styles.wrapper}>
        <MobileMenu
          notiAmount={cartItems && cartItems.length}
          onOpen={menuOpen.setActive}
        />
        <MobileNav
          cartItems={cartItems}
          handleLogout={handleLogout}
          isOpen={menuOpen.active}
          onClose={menuOpen.setInActive}
          isLoading={isLoading}
          handleBlankKeyword={handleBlankKeyword}
          keyword={keyword}
          handleTypingKeyword={handleTypingKeyword}
          courses={courses}
        />
        <div className={styles.brandWrap}>
          <Link className={styles.brand} to='/' exact>
            <Brand />
          </Link>
          <DesktopNav
            cartItems={cartItems}
            handleTypingKeyword={handleTypingKeyword}
            keyword={keyword}
            openMenu={openMenu}
            handleLogout={handleLogout}
          />
        </div>
        <HeaderFeature
          isActive={showSearchInput.active}
          isLoading={isLoading}
          keyword={keyword}
          showInput={showInput}
          hideInput={hideInput}
          handleTypingKeyword={handleTypingKeyword}
          courses={courses}
        />
      </div>
    </div>
  );
};

export default Header;
