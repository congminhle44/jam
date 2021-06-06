/** @format */

import clsx from 'clsx';
import { useHistory } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Slider from 'react-slick';

import ErrorImg from '@/assets/Images/Image-error.jpg';

import styles from './course.module.css';
import Typography, { TypographyVariants } from '@/components/Typography';
import RateStar from '../Rating';
import SkeletonLoad from '../Skeleton';
import { FormattedMessage } from 'react-intl';

const CourseTabs = ({ isLoading, courses }) => {
  const history = useHistory();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // If the item in courses array is equal or less than 1 will return 1 to prevent render 2 lines of items if there is only 1 item
    slidesToShow: Array.isArray(courses) && courses.length <= 1 ? 1 : 5,
    slidesToScroll: Array.isArray(courses) && courses.length <= 1 ? 1 : 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        // If the item in courses array is equal or less than 1 will return 1 to prevent render 2 lines of items if there is only 1 item
        settings: {
          slidesToShow: Array.isArray(courses) && courses.length <= 1 ? 1 : 3,
          slidesToScroll: Array.isArray(courses) && courses.length <= 1 ? 1 : 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
        <Slider {...settings}>{renderCourseByCategory()}</Slider>
      )}
    </div>
  );
};

export default CourseTabs;
