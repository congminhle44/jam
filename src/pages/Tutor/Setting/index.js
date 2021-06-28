/** @format */
import { useAtom } from 'jotai';

import useToggle from '@/hooks/useToggle';
import {
  useCourseDetails,
  useDeleteCourse,
  usePublicCourse,
  useUpdateCourse,
} from '@/queries/hooks/courses';

import { showAlertAtom } from '@/store/alert';
import { showModalAtom } from '@/store/modal';

import Typography, { TypographyVariants } from '@/components/Typography';
import TutorCourse from '../Course';
import DangerZone from './Danger';
import CourseUpdateForm from './Form';
import Alert, { AlertVariants } from '@/components/Alert';

import styles from './setting.module.css';
import PublicCourseModal from './PublicCourseModal';
import DeleteCourseModal from './DeleteCourseModal';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const CourseSetting = ({ match }) => {
  const { id } = match.params;
  const history = useHistory();
  const preview = useToggle(false);
  const { data: courseData, refetch: refetchCourseDetail } =
    useCourseDetails(id);
  const { mutateAsync: updateCourseInformation } = useUpdateCourse();
  const { mutateAsync: publicCourse } = usePublicCourse();
  const { mutateAsync: deleteCourse } = useDeleteCourse();

  const [, showAlert] = useAtom(showAlertAtom);
  const [, showModal] = useAtom(showModalAtom);

  const handleTogglePreview = () => preview.toggle();

  const handlePublicCourse = () => {
    return publicCourse({ courseId: id })
      .then((result) => {
        refetchCourseDetail();
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: !result.isPublished
              ? `${result.courseName} is now unpublished!`
              : `${result.courseName} is now published!`,
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

  const handleDeleteCourse = () => {
    return deleteCourse({ id })
      .then((result) => {
        history.push('/tutor/dashboard');
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: `${result.courseName} deleted`,
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

  const handleRenderPublicCourseModal = () => {
    showModal({
      component: PublicCourseModal,
      props: {
        onSubmit: handlePublicCourse,
        courseData: courseData,
      },
    });
  };

  const handleRenderDeleteCourseModal = () => {
    showModal({
      component: DeleteCourseModal,
      props: {
        onSubmit: handleDeleteCourse,
        courseData: courseData,
      },
    });
  };

  return (
    <TutorCourse param={id}>
      <div className={styles.container}>
        <div className={styles.info}>
          <Typography className={styles.title} variant={TypographyVariants.H6}>
            <FormattedMessage id='tutor.course.setting.info' />
          </Typography>
          {courseData && (
            <CourseUpdateForm
              updateCourseInformation={updateCourseInformation}
              paramId={id}
              showAlert={showAlert}
              refetchCourseDetail={refetchCourseDetail}
              isPreview={preview.active}
              handleTogglePreview={handleTogglePreview}
              courseData={courseData}
            />
          )}
        </div>
        <div className={styles.danger}>
          <Typography className={styles.title} variant={TypographyVariants.H6}>
            <FormattedMessage id='tutor.course.setting.danger' />
          </Typography>
          <DangerZone
            courseData={courseData}
            handleRenderDeleteCourseModal={handleRenderDeleteCourseModal}
            handlePublicCourse={handleRenderPublicCourseModal}
          />
        </div>
      </div>
    </TutorCourse>
  );
};

export default CourseSetting;
