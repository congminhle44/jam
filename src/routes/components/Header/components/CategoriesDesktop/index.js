/** @format */
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import { Right } from '@/components/Icons';
import Typography, { TypographyVariants } from '@/components/Typography';
import styles from './categories.module.css';
import { useCategories } from '@/queries/hooks/categories';

const CategoriesHeaderDesktop = () => {
  const { data: categories, isLoading } = useCategories('', '', '', '');

  const renderCategories = () => {
    if (categories) {
      return categories.map((category) => {
        return (
          <Link
            to={`/category/${category._id}`}
            key={category._id}
            className={styles.item}>
            <Typography variant={TypographyVariants.Body1}>
              {category.categoryName}
            </Typography>
            <div className={styles.right}>
              <Right />
            </div>
          </Link>
        );
      });
    }
  };

  const renderSkeleton = () => {
    return (
      <>
        <div className={styles.item}>
          <Skeleton width={120} height={20} />
          <div className={styles.right}>
            <Right />
          </div>
        </div>
        <div className={styles.item}>
          <Skeleton width={120} height={20} />
          <div className={styles.right}>
            <Right />
          </div>
        </div>
        <div className={styles.item}>
          <Skeleton width={120} height={20} />
          <div className={styles.right}>
            <Right />
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={styles.list}>
      {isLoading ? renderSkeleton() : renderCategories()}
    </div>
  );
};

export default CategoriesHeaderDesktop;
