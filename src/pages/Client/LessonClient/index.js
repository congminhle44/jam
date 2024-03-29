/** @format */

import {
  useLessonInCourseStudent,
  useLessonSource,
} from '@/queries/hooks/courses';
import { useUpdateLearningProcess } from '@/queries/hooks/users';
import Lessons from './components/Lessons';
import LessonVideo from './components/Video';

import styles from './lesson.module.css';

const LessonClient = ({ match }) => {
  const { courseId, lessonId } = match.params;

  const { mutateAsync: updateProcess } = useUpdateLearningProcess();

  const { data: lessonsInfo, isLoading: isLessonsLoading } =
    useLessonInCourseStudent(courseId);
  const { data: lessonSource } = useLessonSource(lessonId);

  return (
    <div className={styles.container}>
      <Lessons
        lessonId={lessonId}
        updateProcess={updateProcess}
        isLessonsLoading={isLessonsLoading}
        courseId={courseId}
        lessonsInfo={lessonsInfo}
      />
      <LessonVideo lessonSource={lessonSource} />
    </div>
  );
};

export default LessonClient;
