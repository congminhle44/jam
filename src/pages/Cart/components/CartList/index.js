/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import clsx from 'clsx';

import CartItem from '../CartItem';
import CartEmpty from '../CartEmpty';

import styles from './list.module.css';
import { FormattedMessage, useIntl } from 'react-intl';

const CartList = ({ cartItems }) => {
  const intl = useIntl();

  const renderCartItems = () => {
    if (cartItems) {
      return cartItems.map((cartItem) => {
        return <CartItem key={cartItem._id} cartItem={cartItem} />;
      });
    }
  };

  return (
    <div
      className={clsx(
        styles.container,
        cartItems && cartItems.length === 0 && styles.full
      )}>
      <Typography className={styles.title} variant={TypographyVariants.H5}>
        <FormattedMessage id='cart.title' />
      </Typography>
      <div className={styles.list}>
        {cartItems && cartItems.length === 0 ? (
          <CartEmpty />
        ) : (
          <Typography
            className={styles.amount}
            variant={TypographyVariants.Body2}>
            {intl.formatMessage(
              {
                id: 'cart.list',
              },
              { amount: cartItems && cartItems.length }
            )}
          </Typography>
        )}
        {renderCartItems()}
      </div>
    </div>
  );
};

export default CartList;
