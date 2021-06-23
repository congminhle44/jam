/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import { FormattedMessage } from 'react-intl';
import LibraryItem from '../LibraryItem';
import styles from './library.module.css';

const Library = ({
  userLibrary,
  handleSetCourseId,
  courseId,
  processData,
  handleRedirectUser,
  isProcessLoading,
}) => {
  const renderLibraryItems = () => {
    if (userLibrary) {
      return userLibrary.map((item) => {
        return (
          <LibraryItem
            key={item._id}
            isProcessLoading={isProcessLoading}
            handleRedirectUser={handleRedirectUser}
            processData={processData}
            courseId={courseId}
            handleSetCourseId={handleSetCourseId}
            userItem={item}
          />
        );
      });
    }
  };

  return (
    <div className={styles.container}>
      <Typography className={styles.title} variant={TypographyVariants.Title3}>
        <FormattedMessage id='profile.title' />
      </Typography>
      <div className={styles.list}>
        {userLibrary && userLibrary.length > 0 ? (
          renderLibraryItems()
        ) : (
          <Typography className={styles.empty} variant={TypographyVariants.H6}>
            You didn't have any course
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Library;
