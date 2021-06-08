/** @format */

import styles from './header.module.css';

import ErrorImg from '@/assets/Images/Image-error.jpg';
import Typography, { TypographyVariants } from '@/components/Typography';
import RateStar from '@/components/Rating';
import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';

const CourseHeader = ({ courseInfo }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.thumb}
        src={courseInfo && courseInfo.courseImage}
        onError={(e) => (e.target.src = `${ErrorImg}`)}
        alt={courseInfo && courseInfo.courseName}
      />
      <div className={styles.info}>
        <Typography
          className={styles.title}
          variant={TypographyVariants.Title2}>
          {courseInfo && courseInfo.courseName}
        </Typography>
        <Typography
          className={styles.author}
          variant={TypographyVariants.Body1}>
          {courseInfo && courseInfo.personCreated.fullName}
        </Typography>
        {courseInfo && (
          <RateStar
            showRateInText
            value={courseInfo && courseInfo.averageRate}
            amount={courseInfo && courseInfo.amountOfComments}
          />
        )}
        <Typography className={styles.price} variant={TypographyVariants.H5}>
          $ {courseInfo && courseInfo.cost}
        </Typography>
      </div>
      <div className={styles.control}>
        <Button
          className={styles.cart}
          variant={ButtonVariants.Solid}
          size={ButtonSizes.Standard}>
          Add to cart
        </Button>
        <Button
          className={styles.purchase}
          variant={ButtonVariants.Outline}
          size={ButtonSizes.Standard}>
          Purchase now
        </Button>
      </div>
    </div>
  );
};

export default CourseHeader;
