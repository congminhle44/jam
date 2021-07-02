/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './item.module.css';

const Navitem = ({ suffix, children, path, isLink, ...others }) => {
  return (
    <Fragment>
      {isLink ? (
        <NavLink
          to={path}
          exact
          activeClassName={styles.active}
          className={styles.container}
          {...others}>
          <div className={styles.icon}>{suffix}</div>
          <Typography
            className={styles.name}
            variant={TypographyVariants.Body1}>
            {children}
          </Typography>
        </NavLink>
      ) : (
        <div className={styles.container} {...others}>
          <div className={styles.icon}>{suffix}</div>
          <Typography
            className={styles.name}
            variant={TypographyVariants.Body1}>
            {children}
          </Typography>
        </div>
      )}
    </Fragment>
  );
};

export default Navitem;
