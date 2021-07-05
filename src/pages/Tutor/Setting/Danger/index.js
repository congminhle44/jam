/** @format */

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Typography, { TypographyVariants } from '@/components/Typography';
import { FormattedMessage } from 'react-intl';
import styles from './danger.module.css';

const DangerZone = ({
  handlePublicCourse,
  handleRenderDeleteCourseModal,
  courseData,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.public}>
        <div className={styles.left}>
          <Typography
            className={styles.title}
            variant={TypographyVariants.Title2}>
            <FormattedMessage id='tutor.course.setting.public.title' />
          </Typography>
          <Typography
            className={styles.description}
            variant={TypographyVariants.Label1}>
            <FormattedMessage id='tutor.course.setting.public.description' />
          </Typography>
        </div>
        <Button
          onClick={handlePublicCourse}
          variant={ButtonVariants.Outline}
          size={ButtonSizes.Small}>
          {courseData && courseData.isPublished ? (
            <FormattedMessage id='tutor.course.setting.unpublic.button' />
          ) : (
            <FormattedMessage id='tutor.course.setting.public.button' />
          )}
        </Button>
      </div>
      <div className={styles.delete}>
        <div className={styles.left}>
          <Typography
            className={styles.title}
            variant={TypographyVariants.Title2}>
            <FormattedMessage id='tutor.course.setting.delete.title' />
          </Typography>
          <Typography
            className={styles.description}
            variant={TypographyVariants.Label1}>
            <FormattedMessage id='tutor.course.setting.delete.description' />
          </Typography>
        </div>
        <Button
          disabled={courseData && courseData.isPublished}
          variant={ButtonVariants.Outline}
          onClick={handleRenderDeleteCourseModal}
          size={ButtonSizes.Small}>
          <FormattedMessage id='common.delete' />
        </Button>
      </div>
    </div>
  );
};

export default DangerZone;
