/** @format */
import { useHistory } from 'react-router';

import ImageError from '@/assets/Images/Image-error.jpg';
import Button, { ButtonVariants, ButtonSizes } from '@/components/Button';
import Typography, { TypographyVariants } from '@/components/Typography';

import styles from './style.module.css';
import { Fragment } from 'react';

const CategoryItem = ({ data }) => {
  const history = useHistory();

  const renderCategoryCard = () => {
    if (data) {
      return data.map((data) => {
        const redirectToCategoryDetail = () => {
          history.push(`/category/${data._id}`);
        };
        return (
          <Fragment key={data._id}>
            <div
              onClick={redirectToCategoryDetail}
              key={data._id}
              className={styles.container}>
              <img
                className={styles.thumbnails}
                src={data.thumbnail}
                onError={(e) => (e.target.src = `${ImageError}`)}
                alt={data.categoryName}
              />
              <div className={styles.information}>
                <Typography variant={TypographyVariants.Body1}>
                  {data.categoryName}
                </Typography>
              </div>
            </div>
            <Button
              onClick={redirectToCategoryDetail}
              className={styles.button}
              variant={ButtonVariants.Outline}
              size={ButtonSizes.Small}>
              {data.categoryName}
            </Button>
          </Fragment>
        );
      });
    }
  };

  return <>{renderCategoryCard()}</>;
};

export default CategoryItem;
