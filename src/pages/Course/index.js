/** @format */
import ErrorImg from '@/assets/Images/Image-error.jpg';
import { AlertVariants } from '@/components/Alert';
import {
  useCartItem,
  useCommentsInCourse,
  useCourseDetails,
} from '@/queries/hooks/courses';
import { useGetCartItem } from '@/queries/hooks/users';
import { showAlertAtom } from '@/store/alert';
import { addCheckoutItemsAtom } from '@/store/checkout';
import { userAtom } from '@/store/login';
import { useAtom } from 'jotai';
import { useHistory } from 'react-router';
import AlertStatus from './components/AlertStatus';
import CourseInfoDetail from './components/Details';
import CourseHeader from './components/Header';

import styles from './course.module.css';

const CourseDetails = ({ match }) => {
  const id = match.params.id;

  const history = useHistory();

  const [userInfo] = useAtom(userAtom);
  const [, showAlert] = useAtom(showAlertAtom);
  const [, addItemToCheckout] = useAtom(addCheckoutItemsAtom);

  const { data: courseInfo, isLoading: isCourseLoading } = useCourseDetails(id);
  const { data: courseComments } = useCommentsInCourse(id);
  const { mutateAsync: addItemToCart } = useCartItem();
  const { refetch: refetchCartList } = useGetCartItem();

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
      <img
        className={styles.cover}
        src={courseInfo && courseInfo.courseImage}
        onError={(e) => (e.target.src = `${ErrorImg}`)}
        alt={courseInfo && courseInfo.courseName}
      />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <CourseHeader
            addItemToCheckout={handleCheckout}
            handleAddItemToCart={handleAddItemToCart}
            isCourseLoading={isCourseLoading}
            courseInfo={courseInfo}
          />
          <CourseInfoDetail
            isCourseLoading={isCourseLoading}
            comments={courseComments}
            courseInfo={courseInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
