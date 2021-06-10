/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import { useRemoveCartItem } from '@/queries/hooks/courses';
import { useGetCartItem } from '@/queries/hooks/users';
import { derivedTokenAtom } from '@/store/token';
import { useAtom } from 'jotai';
import { FormattedMessage } from 'react-intl';

import styles from './item.module.css';

const CartItem = ({ cartItem }) => {
  const [userToken] = useAtom(derivedTokenAtom);

  const { refetch: refetchUserCart } = useGetCartItem(userToken);
  const { mutateAsync: removeItem } = useRemoveCartItem(userToken);

  const handleRemoveItemFromCart = (courseId) => {
    return removeItem({ courseId, token: userToken })
      .then((result) => {
        console.log(result);
        refetchUserCart();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.thumb}
        src={cartItem.courseImage}
        alt={cartItem.courseName}
      />
      <div className={styles.info}>
        <div className={styles.left}>
          <Typography
            className={styles.name}
            variant={TypographyVariants.Body1}>
            {cartItem.courseName}
          </Typography>
          <Typography
            className={styles.description}
            variant={TypographyVariants.Label1}>
            {cartItem.courseDescription}
          </Typography>
        </div>
        <div className={styles.right}>
          <Typography
            className={styles.price}
            variant={TypographyVariants.Body2}>
            ${cartItem.cost}
          </Typography>
          <div
            className={styles.remove}
            onClick={() => handleRemoveItemFromCart(cartItem._id)}>
            <Typography variant={TypographyVariants.Label1}>
              <FormattedMessage id='cart.remove' />
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
