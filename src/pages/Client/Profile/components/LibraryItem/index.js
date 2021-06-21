/** @format */

import { Up } from '@/components/Icons';
import Typography, { TypographyVariants } from '@/components/Typography';
import clsx from 'clsx';
import { FormattedMessage } from 'react-intl';
import Skeleton from 'react-loading-skeleton';
import LibItemDetail from '../ItemDetail';
import styles from './item.module.css';

const LibraryItem = ({
  userItem,
  handleSetCourseId,
  courseId,
  processData,
  handleRedirectUser,
  isProcessLoading,
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
      {courseId === userItem._id &&
        (isProcessLoading ? (
          <div>
            <Skeleton
              className={styles.processSkeleton}
              width='100%'
              height={53.6}
            />
            <div className={styles.skeletonButton}>
              <Skeleton width={168} height={40} />
            </div>
          </div>
        ) : (
          <LibItemDetail
            handleRedirectUser={handleRedirectUser}
            course={userItem}
            processData={processData}
          />
        ))}
    </div>
  );
};

export default LibraryItem;
