/** @format */

import Alert, { AlertVariants } from '@/components/Alert';
import config from '@/config';
import { useCheckout } from '@/queries/hooks/courses';
import { showAlertAtom } from '@/store/alert';
import { derivedCheckoutItemsAtom } from '@/store/checkout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useAtom } from 'jotai';
import { Redirect, useHistory } from 'react-router';
import styles from './checkout.module.css';
import Main from './components/Main';
import Summary from './components/Summary';

const stripePromise = loadStripe(config.app.stripePk);

const Checkout = () => {
  const history = useHistory();

  const [checkoutItems] = useAtom(derivedCheckoutItemsAtom);
  const [, showAlert] = useAtom(showAlertAtom);

  const { mutateAsync: checkout } = useCheckout();

  const handleCheckout = (id, amount, courseIds) => {
    return checkout({ id, amount, courseIds })
      .then((result) => {
        history.push('/');
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: result.message,
          },
        });
      })
      .catch((err) => {
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Error,
            children:
              'Checkout process failed, please check your card before retry',
          },
        });
      });
  };

  return (
    <>
      {checkoutItems.length > 0 ? (
        <div className={styles.container}>
          <Elements stripe={stripePromise}>
            <div className={styles.wrapper}>
              <Main checkoutItems={checkoutItems} />
              <Summary
                handleCheckout={handleCheckout}
                checkoutItems={checkoutItems}
              />
            </div>
          </Elements>
        </div>
      ) : (
        <Redirect to='/' />
      )}
    </>
  );
};

export default Checkout;
