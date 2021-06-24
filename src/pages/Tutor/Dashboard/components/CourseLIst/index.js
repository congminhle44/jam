/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import Skeleton from 'react-loading-skeleton';
import CourseItem from '../CourseItem';

import styles from './list.module.css';

const CourseList = ({ courses, lastItem, isTutorCoursesLoading }) => {
  const renderCourses = () => {
    if (courses) {
      return courses.map((course) => {
        return (
          <CourseItem key={course._id} course={course} lastItem={lastItem} />
        );
      });
    }
  };

  return (
    <div className={styles.container}>
      <Typography className={styles.title} variant={TypographyVariants.Title2}>
        Your courses
      </Typography>
      <div className={styles.list}>
        {renderCourses()}
        {isTutorCoursesLoading && <Skeleton width='100%' height={91} />}
      </div>
    </div>
  );
};

export default CourseList;
