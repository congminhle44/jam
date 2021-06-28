/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';

const Nav = ({ courseId }) => {
  return (
    <div className={styles.container}>
      <NavLink
        activeClassName={styles.active}
        className={styles.link}
        to={`/tutor/course/${courseId}/lessons`}>
        <Typography variant={TypographyVariants.Body1}>
          <FormattedMessage id='tutor.course.nav.lesson' />
        </Typography>
      </NavLink>
      <NavLink
        activeClassName={styles.active}
        className={styles.link}
        to={`/tutor/course/${courseId}/settings`}>
        <Typography variant={TypographyVariants.Body1}>
          <FormattedMessage id='tutor.course.nav.setting' />
        </Typography>
      </NavLink>
    </div>
  );
};

export default Nav;
