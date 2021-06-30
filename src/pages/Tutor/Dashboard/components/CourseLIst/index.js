/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FormattedMessage } from 'react-intl';
import Skeleton from 'react-loading-skeleton';
import CourseItem from '../CourseItem';

import styles from './list.module.css';

const CourseList = ({ next, courses, total }) => {
  const renderCourses = () => {
    if (courses && total > 0) {
      return (
        <InfiniteScroll
          style={{ overflow: 'visible' }}
          dataLength={total}
          next={next}
          hasMore={courses.length !== total}
          loader={<Skeleton width='100%' height={91} />}
          endMessage={
            <div style={{ textAlign: 'center' }}>
              <Typography variant={TypographyVariants.Title1}>
                You've seen it all!
              </Typography>
            </div>
          }>
          {courses.map((course) => {
            return <CourseItem key={course._id} course={course} />;
          })}
        </InfiniteScroll>
      );
    }
  };

  return (
    <div className={styles.container}>
      <Typography className={styles.title} variant={TypographyVariants.Title2}>
        <FormattedMessage id='tutor.dashboard.courses' />
      </Typography>
      <div className={styles.list}>
        {renderCourses()}
        {/*isTutorCoursesLoading && <Skeleton width='100%' height={91} />*/}
      </div>
    </div>
  );
};

export default CourseList;
