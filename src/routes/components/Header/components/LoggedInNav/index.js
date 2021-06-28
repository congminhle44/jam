/** @format */
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Typography, { TypographyVariants } from '@/components/Typography';
import { Cart, Heart, Logout, Profile, Swap } from '@/components/Icons';

import { SlicedName } from '@/helpers/name';

import styles from './style.module.css';
import { useRef } from 'react';
import useClickOutside from '@/hooks/useClickOutside';

const LoggedInNav = ({
  userInfo,
  handleLogout,
  openMenu,
  cartItems,
  wishlistItems,
}) => {
  const containerRef = useRef();

  useClickOutside(containerRef, openMenu.setInActive);

  const logoutAction = () => {
    handleLogout();
    openMenu.setInActive();
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.userWrap}>
        <Typography
          onClick={() => openMenu.setActive()}
          className={styles.user}
          variant={TypographyVariants.Body1}>
          <FormattedMessage id='common.hi' />, {SlicedName(userInfo.fullName)}!
        </Typography>
        {cartItems && cartItems.length > 0 && (
          <div className={styles.haveNoti}></div>
        )}
      </div>
      {openMenu.active && (
        <div className={styles.menu}>
          <Link to='/profile' className={styles.menuItem}>
            <div className={styles.icon}>
              <Profile />
            </div>
            <Typography
              className={styles.text}
              variant={TypographyVariants.Body1}>
              <FormattedMessage id='header.profile' />
            </Typography>
          </Link>
          <Link to='/wish' className={styles.menuItem}>
            <div className={styles.icon}>
              <Heart />
              {wishlistItems && wishlistItems.length > 0 && (
                <div className={styles.amount}>{wishlistItems.length}</div>
              )}
            </div>
            <Typography
              className={styles.text}
              variant={TypographyVariants.Body1}>
              <FormattedMessage id='header.wish' />
            </Typography>
          </Link>
          {userInfo.userType === 'tutor' && (
            <a href='/tutor/dashboard' className={styles.menuItem}>
              <div className={styles.icon}>
                <Swap />
                {wishlistItems && wishlistItems.length > 0 && (
                  <div className={styles.amount}>{wishlistItems.length}</div>
                )}
              </div>
              <Typography
                className={styles.text}
                variant={TypographyVariants.Body1}>
                <FormattedMessage id='header.switchTutor' />
              </Typography>
            </a>
          )}
          <Link to='/cart' className={styles.menuItem}>
            <div className={styles.icon}>
              <Cart />
              {cartItems && cartItems.length > 0 && (
                <div className={styles.amount}>{cartItems.length}</div>
              )}
            </div>
            <Typography
              className={styles.text}
              variant={TypographyVariants.Body1}>
              <FormattedMessage id='header.basket' />
            </Typography>
          </Link>
          <div onClick={logoutAction} className={styles.menuItem}>
            <div className={styles.icon}>
              <Logout />
            </div>
            <Typography
              className={styles.text}
              variant={TypographyVariants.Body1}>
              <FormattedMessage id='common.logout' />
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoggedInNav;
