/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import { FormattedMessage } from 'react-intl';
import CategoryItems from '../CategoryItems';
import styles from './list.module.css';

const CategoryList = ({ courses }) => {
  const renderCategory = () => {
    if (courses) {
      if (courses.length > 0) {
        return courses.map((course) => {
          return <CategoryItems key={course._id} course={course} />;
        });
      } else {
        return (
          <Typography
            className={styles.notfound}
            variant={TypographyVariants.Title2}>
            <FormattedMessage id='category.notfound' />
          </Typography>
        );
      }
    }
  };

  return <div className={styles.container}>{renderCategory()}</div>;
};

export default CategoryList;
