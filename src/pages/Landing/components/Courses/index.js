/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import { useCategories } from '@/queries/hooks/categories';
import { FormattedMessage } from 'react-intl';

import CourseTab from './components/CouseTab';
import styles from './courses.module.css';

const Courses = () => {
  const { data } = useCategories(1, '', '', '');

  return (
    <div id='getstart' className={styles.container}>
      <Typography className={styles.title} variant={TypographyVariants.H5}>
        <FormattedMessage id='courses.title' />
      </Typography>
      <Typography
        className={styles.description}
        variant={TypographyVariants.Body1}>
        <FormattedMessage id='courses.description' />
      </Typography>
      <CourseTab categories={data} />
    </div>
  );
};

export default Courses;
