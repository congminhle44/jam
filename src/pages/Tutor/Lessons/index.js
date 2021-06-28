/** @format */
import { Fragment, useState } from 'react';
import { useAtom } from 'jotai';
import Skeleton from 'react-loading-skeleton';

import Notfound from '@/pages/Notfound';

import {
  useCourseDetails,
  useDeleteLesson,
  useTutorLessons,
  useUpdateLesson,
} from '@/queries/hooks/courses';

import { showAlertAtom } from '@/store/alert';
import { showModalAtom } from '@/store/modal';

import Alert, { AlertVariants } from '@/components/Alert';
import Typography, { TypographyVariants } from '@/components/Typography';
import TutorCourse from '../Course';
import DeleteLessonModal from './components/DeleteLessonModal';
import EditLessonModal from './components/EditLessonModal';
import LessonLItem from './components/Item';

import styles from './lesson.module.css';
import { FormattedMessage } from 'react-intl';

const Lesson = ({ match }) => {
  const [source, setSource] = useState('');

  const { id } = match.params;
  const {
    data: lessons,
    isLoading: isLessonsLoading,
    refetch: refetchLessons,
    error: getLessonsError,
  } = useTutorLessons(id);
  const { data: courseDetail } = useCourseDetails(id);
  const { mutateAsync: deleteLesson } = useDeleteLesson();
  const { mutateAsync: updateLesson } = useUpdateLesson();

  const [, showModal] = useAtom(showModalAtom);
  const [, showAlert] = useAtom(showAlertAtom);

  const addVideoSource = (source) => setSource(source);

  const emptySource = () => setSource('');

  const handleDeleteLesson = (lessonId) => {
    return deleteLesson({ courseId: id, lessonId })
      .then((result) => {
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: `${result.title} deleted`,
          },
        });
        refetchLessons();
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

  const handleUpdateLesson = (lesson) => {
    return updateLesson(lesson)
      .then((result) => {
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: `${result.title} updated`,
          },
        });
        refetchLessons();
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

  const handleRenderDeleteLessonModal = (lesson) => {
    showModal({
      component: DeleteLessonModal,
      props: {
        lessonInfo: lesson,
        onSubmit: handleDeleteLesson,
      },
    });
  };

  const handleRenderUpdateLessonModal = (lesson) => {
    showModal({
      component: EditLessonModal,
      props: {
        lessonInfo: lesson,
        onSubmit: handleUpdateLesson,
      },
    });
  };

  const handleRenderLessons = () => {
    if (lessons) {
      return lessons.map((lesson) => {
        return (
          <LessonLItem
            key={lesson._id}
            courseDetail={courseDetail}
            handleRenderUpdateLessonModal={handleRenderUpdateLessonModal}
            handleRenderDeleteLessonModal={handleRenderDeleteLessonModal}
            lesson={lesson}
            addVideoSource={addVideoSource}
          />
        );
      });
    }
  };

  return (
    <Fragment>
      {getLessonsError ? (
        <Notfound />
      ) : (
        <TutorCourse emptySource={emptySource} source={source} param={id}>
          <div className={styles.container}>
            <Typography
              className={styles.title}
              variant={TypographyVariants.H6}>
              <FormattedMessage id='tutor.course.lesson.all' />
            </Typography>
            <div className={styles.list}>
              {isLessonsLoading ? (
                <Skeleton
                  style={{ marginBottom: '1.5rem' }}
                  width='100%'
                  height={106}
                  count={3}
                />
              ) : (
                handleRenderLessons()
              )}
            </div>
          </div>
        </TutorCourse>
      )}
    </Fragment>
  );
};

export default Lesson;
