/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import { FormattedMessage } from 'react-intl';
import CourseItem from '../CourseItem';

import styles from './list.module.css';

const CourseList = ({ courses }) => {
  const renderCourses = () => {
    if (courses) {
      return courses.map((course) => {
        return <CourseItem key={course._id} course={course} />;
      });
    }
  };

  return (
    <div className={styles.container}>
      <Typography className={styles.title} variant={TypographyVariants.Title2}>
        <FormattedMessage id='tutor.dashboard.courses' />
      </Typography>
      <div className={styles.list}>{renderCourses()}</div>
    </div>
  );
};

export default CourseList;
