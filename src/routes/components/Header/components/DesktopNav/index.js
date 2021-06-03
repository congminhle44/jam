/** @format */
import { NavLink } from 'react-router-dom';

import Typography, { TypographyVariants } from '@/components/Typography';

import styles from '../../header.module.css';
import { FormattedMessage } from 'react-intl';

const DesktopNav = () => (
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

    <NavLink className={styles.navItem} to='/login'>
      <Typography variant={TypographyVariants.Body1}>
        <FormattedMessage id='header.signin' />
      </Typography>
    </NavLink>
  </div>
);

export default DesktopNav;
