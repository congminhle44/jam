/** @format */

import clsx from 'clsx';
import { useHistory } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

import ErrorImg from '@/assets/Images/Image-error.jpg';

import styles from './course.module.css';
import Typography, { TypographyVariants } from '@/components/Typography';
import RateStar from '../Rating';
import SkeletonLoad from '../Skeleton';

import { courseSettings } from './courseSettings';

const CourseTabs = ({ isLoading, courses }) => {
  const history = useHistory();

  const renderCourseByCategory = () => {
    if (Array.isArray(courses) && courses.length > 0) {
      return courses.map((course, index) => {
        return (
          <div
            onClick={() => history.push(`/course/${course._id}`)}
            key={index}
            className={clsx(styles.card, courses.length === 1 && styles.full)}>
            <LazyLoadImage
              effect='blur'
              className={styles.img}
              height={220}
              onError={(e) => {
                e.target.src = `${ErrorImg}`;
              }}
              src={course.courseImage}
              alt={course.courseName}
            />
            <div className={styles.information}>
              <Typography
                className={styles.name}
                variant={TypographyVariants.Body2}>
                {course.courseName}
              </Typography>
              <Typography
                className={styles.author}
                variant={TypographyVariants.Label1}>
                {course.personCreated.fullName}
              </Typography>
              <RateStar value={course.averageRate} />
              <Typography
                className={styles.price}
                variant={TypographyVariants.Paragraph2}>
                ${course.cost}
              </Typography>
            </div>
          </div>
        );
      });
    } else {
      return (
        <Typography variant={TypographyVariants.Body1}>
          <FormattedMessage id='courses.notfound' />
        </Typography>
      );
    }
  };

  return (
    <div className={styles.container}>
      {isLoading ? (
        <SkeletonLoad />
      ) : (
        <Slider {...courseSettings(courses)}>{renderCourseByCategory()}</Slider>
      )}
    </div>
  );
};

export default CourseTabs;
