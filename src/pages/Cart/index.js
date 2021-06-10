/** @format */
import CheckoutBanner from '@/assets/Images/checkout_bg.jpg';
import { useGetCartItem } from '@/queries/hooks/users';
import { derivedTokenAtom } from '@/store/token';
import { useAtom } from 'jotai';
import { Redirect } from 'react-router';

import styles from './cart.module.css';
import CartList from './components/CartList';
import Checkout from './components/Checkout';

const Cart = () => {
  const [getUserToken] = useAtom(derivedTokenAtom);

  const { data: cartItems } = useGetCartItem(getUserToken);

  return (
    <>
      {getUserToken !== '' ? (
        <div className={styles.container}>
          <img
            className={styles.banner}
            src={CheckoutBanner}
            alt='Checkout banner'
          />
          <div className={styles.wrapper}>
            <div className={styles.main}>
              <CartList cartItems={cartItems} />
              {cartItems && cartItems.length > 0 && (
                <Checkout cartItems={cartItems} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <Redirect to='/' />
      )}
    </>
  );
};

export default Cart;
