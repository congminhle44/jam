/** @format */
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Typography, { TypographyVariants } from '@/components/Typography';
import { Cart, Logout, Profile } from '@/components/Icons';

import { SlicedName } from '@/helpers/name';

import styles from './style.module.css';
import { useRef } from 'react';
import useClickOutside from '@/hooks/useClickOutside';

const LoggedInNav = ({ userInfo, handleLogout, openMenu }) => {
  const containerRef = useRef();

  useClickOutside(containerRef, openMenu.setInActive);

  const logoutAction = () => {
    handleLogout();
    openMenu.setInActive();
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <Typography
        onClick={() => openMenu.setActive()}
        className={styles.user}
        variant={TypographyVariants.Body1}>
        <FormattedMessage id='common.hi' />, {SlicedName(userInfo.fullName)}!
      </Typography>
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
          <div className={styles.menuItem}>
            <div className={styles.icon}>
              <Cart />
            </div>
            <Typography
              className={styles.text}
              variant={TypographyVariants.Body1}>
              <FormattedMessage id='header.basket' />
            </Typography>
          </div>
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
