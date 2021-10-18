/** @format */
import { useAtom } from 'jotai';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router';

import { useGetCartItem } from '@/queries/hooks/users';
import { addCheckoutItemsAtom } from '@/store/checkout';

import Typography, { TypographyVariants } from '@/components/Typography';
import CartList from './components/CartList';
import Checkout from './components/Checkout';

import styles from './cart.module.css';
import { userAtom } from '@/store/login';

const Cart = () => {
  const history = useHistory();

  const [userInfo] = useAtom(userAtom);
  const [, addCartToCheckout] = useAtom(addCheckoutItemsAtom);

  const { data: cartItems } = useGetCartItem(userInfo);

  const handleRedirectCheckout = () => {
    addCartToCheckout(cartItems);
    history.push('/cart/checkout');
  };

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Typography className={styles.title} variant={TypographyVariants.H5}>
          <FormattedMessage id='cart.title' />
        </Typography>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <CartList cartItems={cartItems} />
          {cartItems && cartItems.length > 0 && (
            <Checkout
              handleRedirectCheckout={handleRedirectCheckout}
              cartItems={cartItems}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
