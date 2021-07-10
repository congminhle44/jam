/** @format */

import { Delete } from '@/components/Icons';
import Typography, { TypographyVariants } from '@/components/Typography';
import styles from './table.module.css';

const CourseTable = ({ courses, handleShowDeleteModal }) => {
  const handleRenderCourses = () => {
    if (courses) {
      return courses.data.map((course) => {
        return (
          <tr className={styles.row}>
            <td className={styles.content}>
              <Typography variant={TypographyVariants.Body2}>
                {course.courseName}
              </Typography>
            </td>
            <td className={styles.content}>{course.courseType}</td>
            <td className={styles.content}>
              {course.personCreated
                ? course.personCreated.fullName
                : 'Unavailable Tutor'}
            </td>
            <td className={styles.content}>
              <span
                onClick={() => handleShowDeleteModal(course)}
                className={styles.icon}>
                <Delete />
              </span>
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <table className={styles.container}>
      <thead className={styles.rowHead}>
        <tr>
          <th className={styles.title}>
            <Typography variant={TypographyVariants.Label1}>Name</Typography>
          </th>
          <th className={styles.title}>
            <Typography variant={TypographyVariants.Label1}>
              Category
            </Typography>
          </th>
          <th className={styles.title}>
            <Typography variant={TypographyVariants.Label1}>Author</Typography>
          </th>
          <th className={styles.title}>
            <Typography variant={TypographyVariants.Label1}>Action</Typography>
          </th>
        </tr>
      </thead>
      <tbody>{handleRenderCourses()}</tbody>
    </table>
  );
};

export default CourseTable;
