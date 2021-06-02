/** @format */
import ImageError from '@/assets/Images/Image-error.jpg';
import Typography, { TypographyVariants } from '@/components/Typography';

import styles from './style.module.css';

const CategoryItem = ({ data }) => {
  const renderCategoryCard = () => {
    if (data) {
      return data.map((data) => {
        return (
          <div key={data._id} className={styles.container}>
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
        );
      });
    }
  };

  return <>{renderCategoryCard()}</>;
};

export default CategoryItem;
