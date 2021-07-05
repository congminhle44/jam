/** @format */
import { useHistory } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ImageError from '@/assets/Images/Image-error.jpg';
import Typography, { TypographyVariants } from '@/components/Typography';

import styles from './style.module.css';

const CategoryItem = ({ data }) => {
  const history = useHistory();

  const renderCategoryCard = () => {
    if (data) {
      return data.data.map((data) => {
        const redirectToCategoryDetail = () => {
          history.push(`/category/${data._id}`);
        };
        return (
          <div
            key={data._id}
            onClick={redirectToCategoryDetail}
            className={styles.container}>
            <LazyLoadImage
              className={styles.thumbnails}
              effect='opacity'
              delayTime={500}
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

  return <div className={styles.cardWrap}>{renderCategoryCard()}</div>;
};

export default CategoryItem;
