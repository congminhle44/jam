/** @format */
import { useCallback, useEffect, useRef, useState } from 'react';
import { showModalAtom } from '@/store/modal';
import { useHistory } from 'react-router';
import { useAtom } from 'jotai';

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import { useCreateCourse, useTutorCourses } from '@/queries/hooks/courses';
import CourseList from './components/CourseLIst';

import Notfound from '@/pages/Client/Notfound';
import CreateCourseModal from './components/CreateCourseModal';

import styles from './dashboard.module.css';

const TutorDashboard = () => {
  const history = useHistory();
  const { mutateAsync: createCourse } = useCreateCourse();

  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const [, showModal] = useAtom(showModalAtom);

  const {
    data: tutorCourses,
    isLoading: isTutorCoursesLoading,
    error: getCourseError,
  } = useTutorCourses(page, 6, '');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  const observer = useRef();

  const lastItem = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && courses.length < total) {
          setPage(page + 1);
        }
      }, options);
      if (node) observer.current.observe(node);
    },
    // eslint-disable-next-line
    [observer, total, courses]
  );

  const handleCreateCourse = (course) => {
    return createCourse(course).then((result) => {
      history.push(`/tutor/course/${result._id}`);
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

  useEffect(() => {
    if (tutorCourses) {
      setCourses((oldCourses) => [...oldCourses, ...tutorCourses.data]);
      setTotal(tutorCourses.total);
    }
  }, [tutorCourses]);

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
              Create new course
            </Button>
          </div>
          <CourseList
            isTutorCoursesLoading={isTutorCoursesLoading}
            courses={courses}
            lastItem={lastItem}
          />
        </div>
      )}
    </>
  );
};

export default TutorDashboard;
