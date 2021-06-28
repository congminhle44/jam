/** @format */
import ReactMarkdown from 'react-markdown';
import { FormattedMessage } from 'react-intl';

import Typography, { TypographyVariants } from '@/components/Typography';
import Comments from '../Comments';
import styles from './detail.module.css';
import Skeleton from 'react-loading-skeleton';

const CourseInfoDetail = ({
  courseInfo,
  comments,
  isCourseLoading,
  userInfo,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        {!isCourseLoading ? (
          <ReactMarkdown className={styles.markdown}>
            {courseInfo && courseInfo.courseDescription}
          </ReactMarkdown>
        ) : (
          <>
            <Skeleton width='100%' height={20} count={4} />
            <Skeleton width='50%' height={20} />
          </>
        )}
      </div>
      <Typography
        className={styles.comments}
        variant={TypographyVariants.Title2}>
        <FormattedMessage id='course.comments' /> (
        {courseInfo && courseInfo.amountOfComments})
      </Typography>
      <Comments
        courseInfo={courseInfo}
        userInfo={userInfo}
        comments={comments}
      />
    </div>
  );
};

export default CourseInfoDetail;
