/** @format */

import { Up } from '@/components/Icons';
import Typography, { TypographyVariants } from '@/components/Typography';
import styles from './item.module.css';

const LibraryItem = ({ userItem }) => {
  return (
    <div className={styles.container}>
      <div className={styles.course}>
        <Typography
          className={styles.title}
          variant={TypographyVariants.Title2}>
          Course
        </Typography>
        <Typography className={styles.name} variant={TypographyVariants.Title3}>
          {userItem.courseName}
        </Typography>
      </div>
      <div className={styles.arrow}>
        <Up />
      </div>
    </div>
  );
};

export default LibraryItem;
