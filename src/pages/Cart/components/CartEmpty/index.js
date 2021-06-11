/** @format */
import { useHistory } from 'react-router';
import { FormattedMessage } from 'react-intl';

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
          <FormattedMessage id='cart.empty.content' />
        </Typography>
        <Button
          onClick={() => history.push('/')}
          className={styles.button}
          variant={ButtonVariants.Solid}
          size={ButtonSizes.Standard}>
          <FormattedMessage id='cart.empty.button' />
        </Button>
      </div>
    </div>
  );
};

export default CartEmpty;
