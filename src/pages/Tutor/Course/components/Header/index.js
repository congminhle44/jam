/** @format */
import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Typography, { TypographyVariants } from '@/components/Typography';

import styles from './header.module.css';

const Header = ({
  courseInfo,
  handleUploadThumbnail,
  handleRenderCreateLessonModal,
}) => {
  const handleChangeImage = (e) => {
    const { files } = e.target;
    handleUploadThumbnail(files[0]);
  };

  return (
    <div className={styles.head}>
      <div className={styles.left}>
        <img
          className={styles.thumb}
          src={courseInfo.courseImage}
          alt={courseInfo.courseName}
        />
        <div className={styles.changeThumb}>
          <input onChange={handleChangeImage} type='file' />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.info}>
          <Typography className={styles.title} variant={TypographyVariants.H6}>
            {courseInfo.courseName}
          </Typography>
          <Typography
            className={styles.lessonsAmount}
            variant={TypographyVariants.Body1}>
            {courseInfo.lessonsAmount} lessons
          </Typography>
        </div>
        <Button
          onClick={handleRenderCreateLessonModal}
          className={styles.button}
          variant={ButtonVariants.Solid}
          size={ButtonSizes.Small}>
          Add Lesson
        </Button>
      </div>
    </div>
  );
};

export default Header;
