/** @format */
import { Link } from 'react-router-dom';

import Typography, { TypographyVariants } from '@/components/Typography';
import Rating from '../../../../components/Rating';

import ErrorImg from '@/assets/Images/Image-error.jpg';

import styles from './item.module.css';

const CategoryItems = ({ course }) => {
  return (
    <Link to={`/course/${course._id}`} className={styles.container}>
      <div className={styles.imgWrap}>
        <img
          className={styles.img}
          onError={(e) => (e.target.src = `${ErrorImg}`)}
          src={course.courseImage}
          alt={course.courseName}
        />
      </div>
      <div className={styles.info}>
        <div>
          <Typography
            className={styles.title}
            variant={TypographyVariants.Title2}>
            {course.courseName}
          </Typography>
          <Typography
            className={styles.description}
            variant={TypographyVariants.Body1}>
            {course.courseDescription}
          </Typography>
          <Typography
            className={styles.author}
            variant={TypographyVariants.Label1}>
            {course.personCreated.fullName}
          </Typography>
          <Rating
            showRateInText
            value={course.averageRate}
            amount={course.amountOfComments}
          />
        </div>
        <div className={styles.price}>
          <Typography variant={TypographyVariants.Body2}>
            ${course.cost}
          </Typography>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItems;
