/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import ReactMarkdown from 'react-markdown';
import styles from './preview.module.css';

const CoursePreview = ({ courseData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <Typography className={styles.title} variant={TypographyVariants.Body2}>
          Name
        </Typography>
        <Typography className={styles.name} variant={TypographyVariants.Body1}>
          {courseData.courseName}
        </Typography>
      </div>
      <div className={styles.description}>
        <Typography className={styles.title} variant={TypographyVariants.Body2}>
          Description
        </Typography>
        <ReactMarkdown className={styles.markdown}>
          {courseData.courseDescription}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default CoursePreview;
