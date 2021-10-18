/** @format */

import styles from './header.module.css';
import Skeleton from 'react-loading-skeleton';

import ErrorImg from '@/assets/Images/Image-error.jpg';
import Typography, { TypographyVariants } from '@/components/Typography';
import RateStar from '@/components/Rating';
import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import { FormattedMessage } from 'react-intl';
import { Play, SolidHeart } from '@/components/Icons';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import {
  useGetWishlist,
  useRemoveWishlist,
  useWishlist,
} from '@/queries/hooks/courses';
import Alert, { AlertVariants } from '@/components/Alert';
import { showAlertAtom } from '@/store/alert';
import { userAtom } from '@/store/login';
import { useAtom } from 'jotai';

const CourseHeader = ({
  courseInfo,
  refetchCourseInfo,
  isCourseLoading,
  handleAddItemToCart,
  addItemToCheckout,
  showVideo,
}) => {
  const history = useHistory();
  const [, showAlert] = useAtom(showAlertAtom);
  const [userInfo] = useAtom(userAtom);

  const { refetch: refetchWishlist } = useGetWishlist(userInfo);
  const { mutateAsync: addItemToWishlist } = useWishlist();
  const { mutateAsync: removeItemFromWishlist } = useRemoveWishlist();

  const handleAddItemToWishlist = (courseId) => {
    if (userInfo) {
      return addItemToWishlist({ courseId })
        .then((result) => {
          showAlert({
            component: Alert,
            props: {
              variant: AlertVariants.Success,
              children: result.message,
            },
          });
          refetchWishlist();
          refetchCourseInfo();
        })
        .catch((err) => {
          showAlert({
            component: Alert,
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
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: result.message,
          },
        });
        refetchWishlist();
        refetchCourseInfo();
      })
      .catch((err) => {
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Error,
            children: err.response && err.response.data.message,
          },
        });
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrap}>
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
          <div className={styles.overlay}>
            <div
              data-toggle='tooltip'
              title={'Watch demo video'}
              onClick={showVideo}
              className={styles.play}>
              <Play />
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.infoHeader}>
            <div className={styles.titleInfo}>
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
            </div>
            {userInfo.userType !== 'tutor' && (
              <div
                className={clsx(
                  styles.wish,
                  courseInfo && courseInfo.isWished && styles.active
                )}
                onClick={() =>
                  courseInfo && courseInfo.isWished
                    ? handleRemoveItemFromWishlist(courseInfo._id)
                    : handleAddItemToWishlist(courseInfo._id)
                }>
                <SolidHeart />
              </div>
            )}
          </div>
          {courseInfo && (
            <RateStar
              readOnly
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
            size={ButtonSizes.Standard}
            disabled={userInfo.userType === 'tutor'}
            title={
              userInfo.userType === 'tutor'
                ? 'You do not have permission'
                : 'Add this course to cart'
            }>
            <FormattedMessage id='course.cart' />
          </Button>
          <Button
            onClick={() => addItemToCheckout(courseInfo)}
            className={styles.purchase}
            variant={ButtonVariants.Outline}
            size={ButtonSizes.Standard}
            disabled={userInfo.userType === 'tutor'}
            title={
              userInfo.userType === 'tutor'
                ? 'You do not have permission'
                : 'Purhcase this course now'
            }>
            <FormattedMessage id='course.purchase' />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
