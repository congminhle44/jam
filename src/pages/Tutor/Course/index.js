/** @format */
import Alert, { AlertVariants } from '@/components/Alert';
import Overlay from '@/components/Overlay';
import { disableScroll, enableScroll } from '@/helpers/behaviours';
import {
  useCourseDetails,
  useNewLesson,
  useThumbnail,
  useTutorLessons,
} from '@/queries/hooks/courses';
import { showAlertAtom } from '@/store/alert';
import { showModalAtom } from '@/store/modal';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import CreateLessonModal from './components/CreateLessonModal';
import Header from './components/Header';
import Nav from './components/Nav';

import styles from './course.module.css';

const TutorCourse = ({ emptySource, children, param, source }) => {
  const [, showAlert] = useAtom(showAlertAtom);
  const [, showModal] = useAtom(showModalAtom);

  const { data: courseInfo, refetch: refetchCourseInfo } =
    useCourseDetails(param);
  const { mutateAsync: uploadThumbnail } = useThumbnail();
  const { mutateAsync: createLesson } = useNewLesson();
  const { refetch: refetchLessons } = useTutorLessons(param);

  useEffect(() => {
    if (source) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [source]);

  const handleUploadThumbnail = (image) => {
    return uploadThumbnail({ id: param, thumbnail: image })
      .then(() => {
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: 'Thumbnail uploaded!',
          },
        });
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

  const handleCreateNewLesson = (data) => {
    return createLesson({ ...data, id: param })
      .then(() => {
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: 'New lesson created!',
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

  const handleRenderCreateLessonModal = () => {
    showModal({
      component: CreateLessonModal,
      props: {
        onSubmit: handleCreateNewLesson,
      },
    });
  };

  return (
    <div className={styles.container}>
      {source && (
        <Overlay onClick={emptySource} className={styles.videoWrap}>
          <video
            onClick={(e) => e.stopPropagation()}
            className={styles.video}
            controls
            src={source}
          />
        </Overlay>
      )}
      {courseInfo && (
        <Header
          handleRenderCreateLessonModal={handleRenderCreateLessonModal}
          handleUploadThumbnail={handleUploadThumbnail}
          courseInfo={courseInfo}
        />
      )}
      <div className={styles.body}>
        <Nav courseId={param} />
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  );
};

export default TutorCourse;
