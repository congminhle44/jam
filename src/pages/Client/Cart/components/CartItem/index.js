/** @format */

import Alert, { AlertVariants } from '@/components/Alert';
import Typography, { TypographyVariants } from '@/components/Typography';
import { useRemoveCartItem } from '@/queries/hooks/courses';
import { useGetCartItem } from '@/queries/hooks/users';
import { showAlertAtom } from '@/store/alert';
import { userAtom } from '@/store/login';
import { useAtom } from 'jotai';
import { FormattedMessage } from 'react-intl';
import ReactMarkdown from 'react-markdown';

import styles from './item.module.css';

const CartItem = ({ cartItem }) => {
  const [userInfo] = useAtom(userAtom);
  const [, showAlert] = useAtom(showAlertAtom);

  const { refetch: refetchUserCart } = useGetCartItem(userInfo);
  const { mutateAsync: removeItem } = useRemoveCartItem();

  const handleRemoveItemFromCart = (courseId) => {
    return removeItem({ courseId })
      .then((result) => {
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: result.message,
          },
        });
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
            <ReactMarkdown>{cartItem.courseDescription}</ReactMarkdown>
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
