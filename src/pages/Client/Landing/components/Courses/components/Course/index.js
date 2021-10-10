/** @format */

import clsx from 'clsx';
import { useHistory } from 'react-router';
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
import { Cart, Heart } from '@/components/Icons';
import {
  useCartItem,
  useGetWishlist,
  useRemoveWishlist,
  useWishlist,
} from '@/queries/hooks/courses';
import { useGetCartItem } from '@/queries/hooks/users';
import { showAlertAtom } from '@/store/alert';
import AlertStatus from '../AlertStatus';
import { AlertVariants } from '@/components/Alert';
import { userAtom } from '@/store/login';

const CourseTabs = ({ isLoading, courses, refetchCourse }) => {
  const history = useHistory();
  const [, showAlert] = useAtom(showAlertAtom);
  const [userInfo] = useAtom(userAtom);

  const { refetch: refetchCartList } = useGetCartItem();
  const { refetch: refetchWishlist } = useGetWishlist();
  const { mutateAsync: addItemToCart } = useCartItem();
  const { mutateAsync: addItemToWishlist } = useWishlist();
  const { mutateAsync: removeItemFromWishlist } = useRemoveWishlist();

  const handleAddItemToCart = (courseId) => {
    if (userInfo) {
      return addItemToCart({ courseId })
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
              variant: AlertVariants.Warning,
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

  const handleAddItemToWishlist = (courseId) => {
    if (userInfo) {
      return addItemToWishlist({ courseId })
        .then((result) => {
          showAlert({
            component: AlertStatus,
            props: {
              variant: AlertVariants.Success,
              children: result.message,
            },
          });
          refetchWishlist();
          refetchCourse();
        })
        .catch((err) => {
          showAlert({
            component: AlertStatus,
            props: {
              variant: AlertVariants.Warning,
              children: err.response && err.response.data.message,
            },
          });
        });
    } else {
      history.push('/login');
    }
  };

  const handleRemoveItemFromWishlist = (courseId) => {
    return removeItemFromWishlist({ courseId })
      .then((result) => {
        showAlert({
          component: AlertStatus,
          props: {
            variant: AlertVariants.Success,
            children: result.message,
          },
        });
        refetchWishlist();
        refetchCourse();
      })
      .catch((err) => {
        showAlert({
          component: AlertStatus,
          props: {
            variant: AlertVariants.Error,
            children: err.response && err.response.data.message,
          },
        });
      });
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
              <div className={styles.imgWrap}>
                <img
                  className={styles.img}
                  onError={(e) => {
                    e.target.src = `${ErrorImg}`;
                  }}
                  src={course.courseImage}
                  alt={course.courseName}
                />

                <div className={styles.control}>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddItemToCart(course._id);
                    }}
                    className={styles.button}
                    variant={ButtonVariants.Solid}
                    size={ButtonSizes.Small}
                    suffix={<Cart />}>
                    Add to cart
                  </Button>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      course.isWished
                        ? handleRemoveItemFromWishlist(course._id)
                        : handleAddItemToWishlist(course._id);
                    }}
                    className={clsx(
                      styles.wish,
                      course.isWished && styles.wished
                    )}>
                    <div className={styles.heart}>
                      <Heart />
                    </div>
                    <Typography variant={TypographyVariants.Body1}>
                      Add to wish
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
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
            </div>
          </div>
        );
      });
    } else {
      return (
        <Typography
          className={styles.notfound}
          variant={TypographyVariants.Body1}>
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
