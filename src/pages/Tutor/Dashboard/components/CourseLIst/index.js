/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import { FormattedMessage } from 'react-intl';
import Input from '@/components/Input';
import CourseItem from '../CourseItem';

import styles from './list.module.css';
import { debounce } from 'lodash';

const CourseList = ({ courses, setKeyword }) => {
  const renderCourses = () => {
    if (courses) {
      return courses.map((course) => {
        return <CourseItem key={course._id} course={course} />;
      });
    }
  };

  const handleSearch = debounce((e) => {
    const { value } = e.target;
    setKeyword(value);
  }, 500);

  return (
    <div className={styles.container}>
      <Input onChange={handleSearch} placeholder='Search' />
      <Typography className={styles.title} variant={TypographyVariants.Title2}>
        <FormattedMessage id='tutor.dashboard.courses' />
      </Typography>
      <div className={styles.list}>{renderCourses()}</div>
    </div>
  );
};

export default CourseList;
