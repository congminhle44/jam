/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';

const Nav = ({ courseId }) => {
  return (
    <div className={styles.container}>
      <NavLink
        activeClassName={styles.active}
        className={styles.link}
        to={`/tutor/course/${courseId}/lessons`}>
        <Typography variant={TypographyVariants.Body1}>Lessons</Typography>
      </NavLink>
      <NavLink
        activeClassName={styles.active}
        className={styles.link}
        to={`/tutor/course/${courseId}/settings`}>
        <Typography variant={TypographyVariants.Body1}>Settings</Typography>
      </NavLink>
    </div>
  );
};

export default Nav;
