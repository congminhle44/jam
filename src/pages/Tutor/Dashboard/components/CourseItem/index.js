/** @format */
import { useHistory } from 'react-router';

import { Right } from '@/components/Icons';
import Typography, { TypographyVariants } from '@/components/Typography';
import styles from './item.module.css';
import { FormattedMessage } from 'react-intl';

const CourseItem = ({ course }) => {
  const history = useHistory();

  return (
    <div
      onClick={() => history.push(`/tutor/course/${course._id}/lessons`)}
      className={styles.container}>
      <div className={styles.info}>
        <Typography
          className={styles.infoTitle}
          variant={TypographyVariants.Body2}>
          <FormattedMessage id='tutor.dashboard.courseTitle' />
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
