/** @format */

import { Link } from 'react-router-dom';

import { useCategories } from '@/queries/hooks/categories';

import { Right } from '@/components/Icons';
import Typography, { TypographyVariants } from '@/components/Typography';

import styles from './category.module.css';
import Skeleton from 'react-loading-skeleton';

const CategoriesMobile = ({ hideCategoryMenu }) => {
  const { data: categories, isLoading } = useCategories('', '', '', '');

  const renderCategory = () => {
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

  const renderCategoriesLoad = () => {
    return (
      <>
        <div className={styles.item}>
          <Skeleton width={150} height={20} />
          <div className={styles.right}>
            <Right />
          </div>
        </div>
        <div className={styles.item}>
          <Skeleton width={150} height={20} />
          <div className={styles.right}>
            <Right />
          </div>
        </div>
        <div className={styles.item}>
          <Skeleton width={150} height={20} />
          <div className={styles.right}>
            <Right />
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div
        onClick={(e) => {
          hideCategoryMenu();
          e.stopPropagation();
        }}
        className={styles.back}>
        <Right />
      </div>
      <div className={styles.list}>
        {isLoading ? renderCategoriesLoad() : renderCategory()}
      </div>
    </div>
  );
};

export default CategoriesMobile;
