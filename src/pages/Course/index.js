/** @format */
import ErrorImg from '@/assets/Images/Image-error.jpg';
import { useCommentsInCourse, useCourseDetails } from '@/queries/hooks/courses';
import CourseInfoDetail from './components/Details';
import CourseHeader from './components/Header';

import styles from './course.module.css';

const CourseDetails = ({ match }) => {
  const id = match.params.id;

  const { data: courseInfo } = useCourseDetails(id);
  const { data: courseComments } = useCommentsInCourse(id);

  return (
    <div className={styles.superWrap}>
      <img
        className={styles.cover}
        src={courseInfo && courseInfo.courseImage}
        onError={(e) => (e.target.src = `${ErrorImg}`)}
        alt={courseInfo && courseInfo.courseName}
      />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <CourseHeader courseInfo={courseInfo} />
          <CourseInfoDetail comments={courseComments} courseInfo={courseInfo} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
