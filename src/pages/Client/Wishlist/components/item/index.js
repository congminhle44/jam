/** @format */
import { useHistory } from 'react-router';

import ImageError from '@/assets/Images/Image-error.jpg';

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import { Cart } from '@/components/Icons';
import Typography, { TypographyVariants } from '@/components/Typography';
import styles from './item.module.css';
import { FormattedMessage } from 'react-intl';

const Wishitem = ({ wishInfo, handleRemoveWishItem, handleAddItemToCart }) => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.detail}>
          <img
            className={styles.thumb}
            onError={(e) => (e.target.src = `${ImageError}`)}
            src={wishInfo.courseImage}
            alt='brand'
          />
          <div>
            <Typography
              onClick={() => history.push(`/course/${wishInfo._id}`)}
              className={styles.name}
              variant={TypographyVariants.Title2}>
              {wishInfo.courseName}
            </Typography>
            <Typography
              className={styles.category}
              variant={TypographyVariants.Body1}>
              {wishInfo.courseType}
            </Typography>
            <div onClick={() => handleRemoveWishItem(wishInfo._id)}>
              <Typography
                className={styles.remove}
                variant={TypographyVariants.Label1}>
                <FormattedMessage id='wish.remove' />
              </Typography>
            </div>
          </div>
        </div>
        <Typography
          className={styles.description}
          variant={TypographyVariants.Body1}>
          {wishInfo.courseDescription}
        </Typography>
      </div>
      <Button
        className={styles.cart}
        onClick={() => handleAddItemToCart(wishInfo._id)}
        suffix={<Cart />}
        variant={ButtonVariants.Solid}
        size={ButtonSizes.Standard}>
        ${wishInfo.cost}
      </Button>
    </div>
  );
};

export default Wishitem;
