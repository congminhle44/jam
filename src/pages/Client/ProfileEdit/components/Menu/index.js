/** @format */
import { NavLink } from 'react-router-dom';

import Typography, { TypographyVariants } from '@/components/Typography';
import styles from './menu.module.css';

const Menu = () => {
  return (
    <div className={styles.container}>
      <NavLink
        activeClassName={styles.active}
        className={styles.link}
        to='/profile/edit/info'>
        <Typography className={styles.item} variant={TypographyVariants.Title2}>
          Basic information
        </Typography>
      </NavLink>
      <NavLink
        activeClassName={styles.active}
        className={styles.link}
        to='/profile/edit/password'>
        <Typography className={styles.item} variant={TypographyVariants.Title2}>
          Change password
        </Typography>
      </NavLink>
    </div>
  );
};

export default Menu;
