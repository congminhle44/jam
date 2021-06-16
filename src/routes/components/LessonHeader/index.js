/** @format */
import Brand from '@/assets/Images/Brand.png';
import Typography, { TypographyVariants } from '@/components/Typography';
import { Link } from 'react-router-dom';
import ThemeMode from '../Header/components/ThemeMode';

import styles from './lesson.module.css';

const ClientLessonHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link to='/'>
          <img className={styles.brand} src={Brand} alt='Brand' />
        </Link>
        <Link className={styles.menuItem} to='/profile'>
          <Typography variant={TypographyVariants.Body1}>My Courses</Typography>
        </Link>
      </div>
      <ThemeMode />
    </div>
  );
};

export default ClientLessonHeader;
