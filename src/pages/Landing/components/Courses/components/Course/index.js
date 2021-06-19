/** @format */

import clsx from 'clsx';
import { useHistory } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

import ErrorImg from '@/assets/Images/Image-error.jpg';

import styles from './course.module.css';
import Typography, { TypographyVariants } from '@/components/Typography';
import RateStar from '@/components/Rating';
import SkeletonLoad from '../Skeleton';
import { useAtom } from 'jotai';

import { courseSettings } from './courseSettings';
import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import { Heart } from '@/components/Icons';
import { useCartItem } from '@/queries/hooks/courses';
import { useGetCartItem } from '@/queries/hooks/users';
import { showAlertAtom } from '@/store/alert';
import AlertStatus from '../AlertStatus';
import { AlertVariants } from '@/components/Alert';
import { derivedTokenAtom } from '@/store/token';
import { userAtom } from '@/store/login';

const CourseTabs = ({ isLoading, courses }) => {
  const history = useHistory();
  const [, showAlert] = useAtom(showAlertAtom);
  const [userInfo] = useAtom(userAtom);
  const [userToken] = useAtom(derivedTokenAtom);

  const { refetch: refetchCartList } = useGetCartItem(userToken);
  const { mutateAsync: addItemToCart } = useCartItem();

  const handleAddItemToCart = (courseId) => {
    if (userInfo) {
      return addItemToCart({ courseId, token: userToken })
        .then((result) => {
          showAlert({
            component: AlertStatus,
            props: {
              variant: AlertVariants.Success,
              children: result.message,
            },
          });
          refetchCartList();
        })
        .catch((err) => {
          showAlert({
            component: AlertStatus,
            props: {
              variant: AlertVariants.Error,
              children: err.response
                ? err.response.data.message
                : 'Can not add item to cart',
            },
          });
        });
    } else {
      history.push('/login');
    }
  };

  const renderCourseByCategory = () => {
    if (Array.isArray(courses) && courses.length > 0) {
      return courses.map((course, index) => {
        return (
          <div className={styles.cardWrap} key={index}>
            <div
              key={index}
              onClick={() => history.push(`/course/${course._id}`)}
              className={clsx(
                styles.card,
                courses.length === 1 && styles.full
              )}>
              <LazyLoadImage
                effect='blur'
                height={220}
                className={styles.img}
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
                <RateStar
                  readOnly
                  showRateInText
                  value={course.averageRate}
                  amount={course.amountOfComments}
                />
                <Typography
                  className={styles.price}
                  variant={TypographyVariants.Paragraph2}>
                  ${course.cost}
                </Typography>
              </div>
            </div>
            <div className={styles.control}>
              <Button
                onClick={() => handleAddItemToCart(course._id)}
                className={styles.button}
                variant={ButtonVariants.Solid}
                size={ButtonSizes.Small}>
                Add to cart
              </Button>
              <div className={styles.wish}>
                <div className={styles.heart}>
                  <Heart />
                </div>
              </div>
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
