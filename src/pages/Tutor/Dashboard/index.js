/** @format */
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useAtom } from 'jotai';

import { showModalAtom } from '@/store/modal';
import { showAlertAtom } from '@/store/alert';

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import { useCreateCourse, useTutorCourses } from '@/queries/hooks/courses';
import CourseList from './components/CourseLIst';

import Notfound from '@/pages/Notfound';
import CreateCourseModal from './components/CreateCourseModal';

import styles from './dashboard.module.css';
import Alert, { AlertVariants } from '@/components/Alert';
import { FormattedMessage } from 'react-intl';

const TutorDashboard = () => {
  const history = useHistory();

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [courses, setCourses] = useState([]);

  const { data: tutorCourses, error: getCourseError } = useTutorCourses(
    page,
    6,
    ''
  );
  const { mutateAsync: createCourse } = useCreateCourse();

  const [, showModal] = useAtom(showModalAtom);
  const [, showAlert] = useAtom(showAlertAtom);

  useEffect(() => {
    if (tutorCourses) {
      setCourses((oldCourses) => [...oldCourses, ...tutorCourses.data]);
      setTotal(tutorCourses.total);
    }
  }, [tutorCourses]);

  const handleCreateCourse = (course) => {
    return createCourse(course)
      .then((result) => {
        history.push(`/tutor/course/${result._id}/lessons`);
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: `${result.courseName} course was created`,
          },
        });
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

  const handleShowModal = () => {
    showModal({
      component: CreateCourseModal,
      props: {
        onSubmit: handleCreateCourse,
      },
    });
  };

  return (
    <>
      {getCourseError ? (
        <Notfound />
      ) : (
        <div className={styles.container}>
          <div className={styles.button}>
            <Button
              onClick={handleShowModal}
              variant={ButtonVariants.Solid}
              size={ButtonSizes.Standard}>
              <FormattedMessage id='tutor.dashboard.create' />
            </Button>
          </div>
          <CourseList
            courses={courses}
            next={() => setPage(page + 1)}
            total={total}
          />
        </div>
      )}
    </>
  );
};

export default TutorDashboard;