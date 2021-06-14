/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import LibraryItem from '../LibraryItem';
import styles from './library.module.css';

const Library = ({ userLibrary }) => {
  const renderLibraryItems = () => {
    if (userLibrary) {
      return userLibrary.map((item) => {
        return <LibraryItem key={item._id} userItem={item} />;
      });
    }
  };

  return (
    <div className={styles.container}>
      <Typography className={styles.title} variant={TypographyVariants.Title3}>
        My Courses
      </Typography>
      <div className={styles.list}>{renderLibraryItems()}</div>
    </div>
  );
};

export default Library;
