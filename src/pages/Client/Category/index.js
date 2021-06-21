/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import {
  useCategoryDetails,
  useCourseByCategory,
} from '@/queries/hooks/categories';
import { useIntl } from 'react-intl';
import Skeleton from 'react-loading-skeleton';
import styles from './category.module.css';
import CategoryList from './components/CategoryList';

const CategoryDetail = ({ match }) => {
  const id = match.params.id;

  const intl = useIntl();

  const { data: category, isLoading: isCategoryLoad } = useCategoryDetails(id);

  const { data: courses } = useCourseByCategory(
    category && category.categoryID
  );

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {isCategoryLoad ? (
          <div className={styles.title}>
            <Skeleton width={200} height={30} />
          </div>
        ) : (
          <Typography className={styles.title} variant={TypographyVariants.H5}>
            {intl.formatMessage(
              { id: 'category.title' },
              { name: category && category.categoryName }
            )}
          </Typography>
        )}
        {isCategoryLoad ? (
          <div className={styles.subtitle}>
            <Skeleton width={150} height={30} />
          </div>
        ) : (
          <Typography
            className={styles.subtitle}
            variant={TypographyVariants.Body1}>
            {intl.formatMessage(
              { id: 'category.courses' },
              { name: category && category.categoryName }
            )}
          </Typography>
        )}
        <CategoryList courses={courses} />
      </div>
    </div>
  );
};

export default CategoryDetail;
