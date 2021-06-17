/** @format */

import { Up } from '@/components/Icons';
import Typography, { TypographyVariants } from '@/components/Typography';
import clsx from 'clsx';
import { FormattedMessage } from 'react-intl';
import LibItemDetail from '../ItemDetail';
import styles from './item.module.css';

const LibraryItem = ({
  userItem,
  handleSetCourseId,
  courseId,
  processData,
  handleRedirectUser,
}) => {
  return (
    <div
      className={clsx(
        styles.container,
        userItem.isArchieved && styles.archieved
      )}>
      <div
        onClick={() => handleSetCourseId(userItem._id)}
        className={clsx(
          styles.wrapper,
          userItem.isArchieved && styles.archieved
        )}>
        <div className={styles.course}>
          <Typography
            className={styles.title}
            variant={TypographyVariants.Title1}>
            <FormattedMessage id='profile.item.title' />
          </Typography>
          <div className={styles.nameWrap}>
            <Typography
              className={styles.name}
              variant={TypographyVariants.Title3}>
              {userItem.courseName}
            </Typography>
            {userItem.isArchieved && (
              <div className={styles.tag}>Archieved</div>
            )}
          </div>
        </div>
        <div className={styles.arrow}>
          <Up />
        </div>
      </div>
      {courseId === userItem._id && (
        <LibItemDetail
          handleRedirectUser={handleRedirectUser}
          course={userItem}
          processData={processData}
        />
      )}
    </div>
  );
};

export default LibraryItem;
