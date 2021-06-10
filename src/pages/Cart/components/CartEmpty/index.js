/** @format */
import { useHistory } from 'react-router';

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import { Cart } from '@/components/Icons';
import Typography, { TypographyVariants } from '@/components/Typography';
import styles from './empty.module.css';

const CartEmpty = () => {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.cart}>
          <Cart />
        </div>
        <Typography
          className={styles.content}
          variant={TypographyVariants.Title1}>
          Your cart is empty. Keep shopping to find a course!
        </Typography>
        <Button
          onClick={() => history.push('/')}
          className={styles.button}
          variant={ButtonVariants.Solid}
          size={ButtonSizes.Standard}>
          Keep shopping
        </Button>
      </div>
    </div>
  );
};

export default CartEmpty;
