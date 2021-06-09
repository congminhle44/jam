/** @format */ import ReactMarkdown from 'react-markdown';

import Typography, { TypographyVariants } from '@/components/Typography';
import Comments from '../Comments';
import styles from './detail.module.css';
import Skeleton from 'react-loading-skeleton';

const CourseInfoDetail = ({ courseInfo, comments, isCourseLoading }) => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        {!isCourseLoading ? (
          <ReactMarkdown>
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
        All Comments ({courseInfo && courseInfo.amountOfComments})
        <Comments comments={comments} />
      </Typography>
    </div>
  );
};

export default CourseInfoDetail;
