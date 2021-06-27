/** @format */

import Alert, { AlertVariants } from '@/components/Alert';
import Typography, { TypographyVariants } from '@/components/Typography';
import {
  useDeleteLesson,
  useTutorLessons,
  useUpdateLesson,
} from '@/queries/hooks/courses';
import { showAlertAtom } from '@/store/alert';
import { showModalAtom } from '@/store/modal';
import { useAtom } from 'jotai';
import { useState } from 'react';
import TutorCourse from '../Course';
import DeleteLessonModal from './components/DeleteLessonModal';
import EditLessonModal from './components/EditLessonModal';
import LessonLItem from './components/Item';
import styles from './lesson.module.css';

const Lesson = ({ match }) => {
  const [source, setSource] = useState('');

  const { id } = match.params;
  const { data: lessons, refetch: refetchLessons } = useTutorLessons(id);
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
    // console.log(lesson);
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
    <TutorCourse emptySource={emptySource} source={source} param={id}>
      <div className={styles.container}>
        <Typography className={styles.title} variant={TypographyVariants.H6}>
          All lessons
        </Typography>
        <div className={styles.list}>{handleRenderLessons()}</div>
      </div>
    </TutorCourse>
  );
};

export default Lesson;
