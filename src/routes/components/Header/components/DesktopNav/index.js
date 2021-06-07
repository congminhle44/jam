/** @format */
import { NavLink } from 'react-router-dom';
import { useAtom } from 'jotai';

import Typography, { TypographyVariants } from '@/components/Typography';

import { userAtom } from '@/store/login';
import useToggle from '@/hooks/useToggle';

import { FormattedMessage } from 'react-intl';
import LoggedInNav from '../LoggedInNav';
import CategoriesHeaderDesktop from '../CategoriesDesktop';

import styles from '../../header.module.css';
import { useRef } from 'react';
import useClickOutside from '@/hooks/useClickOutside';

const DesktopNav = ({ handleLogout, openMenu }) => {
  const categoryListRef = useRef();

  const [userInfo] = useAtom(userAtom);

  const categoryList = useToggle(false);

  useClickOutside(categoryListRef, categoryList.setInActive);

  return (
    <div className={styles.navigate}>
      <NavLink
        activeClassName={styles.active}
        className={styles.navItem}
        to='/about'>
        <Typography variant={TypographyVariants.Body1}>
          <FormattedMessage id='header.about' />
        </Typography>
      </NavLink>
      <div ref={categoryListRef} className={styles.categoriesWrap}>
        <div onClick={categoryList.setActive} className={styles.categoriesNav}>
          <Typography variant={TypographyVariants.Body1}>
            <FormattedMessage id='header.categories' />
          </Typography>
        </div>
        {categoryList.active && <CategoriesHeaderDesktop />}
      </div>

      {userInfo ? (
        <LoggedInNav
          openMenu={openMenu}
          handleLogout={handleLogout}
          userInfo={userInfo}
        />
      ) : (
        <NavLink
          activeClassName={styles.active}
          className={styles.navItem}
          to='/login'>
          <Typography variant={TypographyVariants.Body1}>
            <FormattedMessage id='header.signin' />
          </Typography>
        </NavLink>
      )}
    </div>
  );
};

export default DesktopNav;
