/** @format */
import { useHistory } from 'react-router';

import { Right } from '@/components/Icons';
import Typography, { TypographyVariants } from '@/components/Typography';
import styles from './item.module.css';

const CourseItem = ({ course, lastItem }) => {
  const history = useHistory();

  return (
    <div
      onClick={() => history.push(`/tutor/course/${course._id}`)}
      ref={lastItem}
      className={styles.container}>
      <div className={styles.info}>
        <Typography
          className={styles.infoTitle}
          variant={TypographyVariants.Body2}>
          Course
        </Typography>
        <Typography
          className={styles.infoName}
          variant={TypographyVariants.Title2}>
          {course.courseName}
        </Typography>
      </div>
      <div className={styles.icon}>
        <Right />
      </div>
    </div>
  );
};

export default CourseItem;
