/** @format */

import { FormattedMessage } from 'react-intl';

import Typography, { TypographyVariants } from '@/components/Typography';

import { useCategories } from '@/queries/hooks/categories';

import CategoryItem from './components/CategoryItem';

import styles from './category.module.css';

const TopCategories = () => {
  const { data } = useCategories(1, 8, 'desc', '');

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Typography className={styles.title} variant={TypographyVariants.H6}>
          <FormattedMessage id='categories.title' />
        </Typography>
        <div className={styles.list}>
          <CategoryItem data={data} />
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
