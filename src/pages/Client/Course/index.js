/** @format */
import { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useAtom } from 'jotai';
import { useHistory } from 'react-router';
import Rating from '@material-ui/lab/Rating';

import { showAlertAtom } from '@/store/alert';
import { addCheckoutItemsAtom } from '@/store/checkout';
import { userAtom } from '@/store/login';

import { AlertVariants } from '@/components/Alert';
import Overlay from '@/components/Overlay';

import {
  useCartItem,
  useCommentsInCourse,
  useCourseDetails,
} from '@/queries/hooks/courses';
import { useGetCartItem } from '@/queries/hooks/users';
import { useComment } from '@/queries/hooks/courses';

import AlertStatus from './components/AlertStatus';
import CourseInfoDetail from './components/Details';
import CourseHeader from './components/Header';
import Input from '@/components/Input';
import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Typography, { TypographyVariants } from '@/components/Typography';

import ErrorImg from '@/assets/Images/Image-error.jpg';
import styles from './course.module.css';
import { disableScroll, enableScroll } from '@/helpers/behaviours';

const CourseDetails = ({ match }) => {
  const id = match.params.id;

  const history = useHistory();
  const intl = useIntl();

  const [showVideo, setShowVideo] = useState(false);
  const [comment, setComment] = useState({
    content: '',
    rate: 5,
  });

  const [userInfo] = useAtom(userAtom);
  const [, showAlert] = useAtom(showAlertAtom);
  const [, addItemToCheckout] = useAtom(addCheckoutItemsAtom);

  const {
    data: courseInfo,
    isLoading: isCourseLoading,
    refetch: refetchCourseInfo,
  } = useCourseDetails(id, userInfo._id);
  const { data: courseComments, refetch: refetchComment } =
    useCommentsInCourse(id);
  const { mutateAsync: addItemToCart } = useCartItem();
  const { refetch: refetchCartList } = useGetCartItem();

  const { mutateAsync: uploadComment } = useComment();

  useEffect(() => {
    if (showVideo) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [showVideo]);

  const handleComment = (e) => {
    e.preventDefault();
    return uploadComment({
      courseId: courseInfo._id,
      content: comment.content.trim(),
      rate: comment.rate,
    })
      .then(() => {
        setComment({
          content: '',
          rate: 5,
        });
        refetchComment();
        refetchCourseInfo();
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
              variant: AlertVariants.Error,
              children: err.response && err.response.data.message,
            },
          });
        });
    } else {
      history.push('/login');
    }
  };

  const handleCheckout = (item) => {
    addItemToCheckout([item]);
    if (userInfo) {
      history.push('/cart/checkout');
    } else {
      history.push('/login');
    }
  };

  return (
    <div className={styles.superWrap}>
      {showVideo && (
        <Overlay
          onClick={() => setShowVideo(false)}
          className={styles.videoWrap}>
          <video
            src={courseInfo && courseInfo.demoVideo}
            className={styles.video}
            controls
          />
        </Overlay>
      )}
      <img
        className={styles.cover}
        src={courseInfo && courseInfo.courseImage}
        onError={(e) => (e.target.src = `${ErrorImg}`)}
        alt={courseInfo && courseInfo.courseName}
      />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <CourseHeader
            showVideo={() => setShowVideo(true)}
            refetchCourseInfo={refetchCourseInfo}
            addItemToCheckout={handleCheckout}
            handleAddItemToCart={handleAddItemToCart}
            isCourseLoading={isCourseLoading}
            courseInfo={courseInfo}
          />
          <div style={{ width: '100%' }}>
            <CourseInfoDetail
              refetchComment={refetchComment}
              userInfo={userInfo}
              isCourseLoading={isCourseLoading}
              comments={courseComments}
              courseInfo={courseInfo}
            />
            {courseInfo && courseInfo.canComment && (
              <form onSubmit={handleComment} className={styles.comment}>
                <Typography
                  className={styles.commentTitle}
                  variant={TypographyVariants.Body2}>
                  <FormattedMessage id='course.comment.title' />
                </Typography>
                <Input
                  value={comment.content}
                  className={styles.input}
                  onChange={(e) =>
                    setComment({ ...comment, content: e.target.value })
                  }
                  placeholder={intl.formatMessage({
                    id: 'course.comment.placeholder',
                  })}
                />
                <div className={styles.control}>
                  <Rating
                    name='simple-controlled'
                    value={comment.rate}
                    precision={0.5}
                    onChange={(event, newValue) => {
                      setComment({ ...comment, rate: newValue });
                    }}
                  />
                  <Button
                    type='submit'
                    className={styles.button}
                    variant={ButtonVariants.Solid}
                    size={ButtonSizes.Standard}
                    disabled={comment.content === ''}>
                    <FormattedMessage id='course.comment.button' />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
