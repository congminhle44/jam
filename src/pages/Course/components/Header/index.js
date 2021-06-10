/** @format */

import styles from './header.module.css';
import Skeleton from 'react-loading-skeleton';

import ErrorImg from '@/assets/Images/Image-error.jpg';
import Typography, { TypographyVariants } from '@/components/Typography';
import RateStar from '@/components/Rating';
import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import { FormattedMessage } from 'react-intl';

const CourseHeader = ({ courseInfo, isCourseLoading, handleAddItemToCart }) => {
  return (
    <div className={styles.container}>
      {isCourseLoading ? (
        <Skeleton width={240} height={240} />
      ) : (
        <img
          className={styles.thumb}
          src={courseInfo && courseInfo.courseImage}
          onError={(e) => (e.target.src = `${ErrorImg}`)}
          alt={courseInfo && courseInfo.courseName}
        />
      )}
      <div className={styles.info}>
        {isCourseLoading ? (
          <Skeleton
            style={{ display: 'block' }}
            className={styles.title}
            width={100}
            height={20}
          />
        ) : (
          <Typography
            className={styles.title}
            variant={TypographyVariants.Title2}>
            {courseInfo && courseInfo.courseName}
          </Typography>
        )}
        {isCourseLoading ? (
          <Skeleton
            style={{ display: 'block' }}
            className={styles.author}
            width={150}
            height={20}
          />
        ) : (
          <Typography
            className={styles.author}
            variant={TypographyVariants.Body1}>
            {courseInfo && courseInfo.personCreated.fullName}
          </Typography>
        )}
        {courseInfo && (
          <RateStar
            showRateInText
            value={courseInfo && courseInfo.averageRate}
            amount={courseInfo && courseInfo.amountOfComments}
          />
        )}
        <Typography className={styles.price} variant={TypographyVariants.H5}>
          ${courseInfo && courseInfo.cost}
        </Typography>
      </div>
      <div className={styles.control}>
        <Button
          onClick={() => handleAddItemToCart(courseInfo._id)}
          className={styles.cart}
          variant={ButtonVariants.Solid}
          size={ButtonSizes.Standard}>
          <FormattedMessage id='course.cart' />
        </Button>
        <Button
          className={styles.purchase}
          variant={ButtonVariants.Outline}
          size={ButtonSizes.Standard}>
          <FormattedMessage id='course.purchase' />
        </Button>
      </div>
    </div>
  );
};

export default CourseHeader;
