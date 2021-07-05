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
import DashboardTemplate from '@/components/Template/dashboard';

const TutorDashboard = () => {
  const history = useHistory();

  const [page, setPage] = useState(1);
  const limit = 6;

  const { data: tutorCourses, error: getCourseError } = useTutorCourses(
    page,
    limit,
    ''
  );
  const { mutateAsync: createCourse } = useCreateCourse();

  const [, showModal] = useAtom(showModalAtom);
  const [, showAlert] = useAtom(showAlertAtom);

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
          <DashboardTemplate
            className={styles.template}
            setPage={setPage}
            total={tutorCourses && tutorCourses.total}
            limit={limit}
            currentPage={page}
            ghost>
            <div className={styles.button}>
              <Button
                onClick={handleShowModal}
                variant={ButtonVariants.Solid}
                size={ButtonSizes.Standard}>
                <FormattedMessage id='tutor.dashboard.create' />
              </Button>
            </div>
            <CourseList courses={tutorCourses && tutorCourses.data} />
          </DashboardTemplate>
        </div>
      )}
    </>
  );
};

export default TutorDashboard;
