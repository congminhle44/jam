/** @format */
import { NavLink } from 'react-router-dom';

import Typography, { TypographyVariants } from '@/components/Typography';

import styles from '../../header.module.css';
import { FormattedMessage } from 'react-intl';
import LoggedInNav from '../LoggedInNav';

const DesktopNav = ({ handleLogout, openMenu }) => {
  const userInfo = JSON.parse(localStorage.getItem('user'));

  return (
    <div className={styles.navigate}>
      <NavLink className={styles.navItem} to='/about'>
        <Typography variant={TypographyVariants.Body1}>
          <FormattedMessage id='header.about' />
        </Typography>
      </NavLink>

      <div className={styles.categoriesNav}>
        <Typography variant={TypographyVariants.Body1}>
          <FormattedMessage id='header.categories' />
        </Typography>
      </div>

      {userInfo ? (
        <LoggedInNav
          openMenu={openMenu}
          handleLogout={handleLogout}
          userInfo={userInfo}
        />
      ) : (
        <NavLink className={styles.navItem} to='/login'>
          <Typography variant={TypographyVariants.Body1}>
            <FormattedMessage id='header.signin' />
          </Typography>
        </NavLink>
      )}
    </div>
  );
};

export default DesktopNav;
