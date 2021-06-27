/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import styles from './item.module.css';

const LessonLItem = ({
  lesson,
  addVideoSource,
  handleRenderDeleteLessonModal,
  handleRenderUpdateLessonModal,
}) => {
  const dd = new Date(lesson.createdAt).getDate();
  const mm = new Date(lesson.createdAt).getMonth();
  const yy = new Date(lesson.createdAt).getFullYear();
  let monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let monthName = monthNames[mm];

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Typography className={styles.title} variant={TypographyVariants.Body2}>
          {lesson.title}
        </Typography>
        <Typography className={styles.time} variant={TypographyVariants.Label1}>
          Created at {monthName} {dd} {yy}
        </Typography>
        <Typography
          onClick={() => addVideoSource(lesson.source)}
          className={styles.watch}
          variant={TypographyVariants.Label1}>
          Watch your video
        </Typography>
      </div>
      <div className={styles.right}>
        <Typography
          onClick={() => handleRenderUpdateLessonModal(lesson)}
          className={styles.edit}
          variant={TypographyVariants.Label1}>
          Edit
        </Typography>
        <Typography
          onClick={() => handleRenderDeleteLessonModal(lesson)}
          className={styles.delete}
          variant={TypographyVariants.Label1}>
          Delete
        </Typography>
      </div>
    </div>
  );
};

export default LessonLItem;
