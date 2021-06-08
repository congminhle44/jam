/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import Comments from '../Comments';
import styles from './detail.module.css';

const CourseInfoDetail = ({ courseInfo, comments }) => {
  return (
    <div className={styles.container}>
      {courseInfo && courseInfo.courseDescription}
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
