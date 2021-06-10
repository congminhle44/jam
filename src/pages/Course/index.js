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
import { derivedTokenAtom } from '@/store/token';
import { useAtom } from 'jotai';
import AlertStatus from './components/AlertStatus';
import CourseInfoDetail from './components/Details';
import CourseHeader from './components/Header';

import styles from './course.module.css';

const CourseDetails = ({ match }) => {
  const id = match.params.id;

  const [userToken] = useAtom(derivedTokenAtom);
  const [, showAlert] = useAtom(showAlertAtom);

  const { data: courseInfo, isLoading: isCourseLoading } = useCourseDetails(id);
  const { data: courseComments } = useCommentsInCourse(id);
  const { mutateAsync: addItemToCart } = useCartItem();
  const { refetch: refetchCartList } = useGetCartItem(userToken);

  const handleAddItemToCart = (courseId) => {
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
            children: err.response && err.response.data.message,
          },
        });
      });
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
