/** @format */

import Alert, { AlertVariants } from '@/components/Alert';
import config from '@/config';
import { useCheckout, useMomoRedirect } from '@/queries/hooks/courses';
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
  const { mutateAsync: momoRedirect } = useMomoRedirect();

  const handleCheckout = (id, amount, courseIds) => {
    return checkout({ id, amount, courseIds })
      .then((result) => {
        history.push('/payment/success');
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
              err.response &&
              `${err.response.data.message}, you will be back to homepage in 5s`,
          },
        });
        setTimeout(() => {
          history.push('/');
        }, 5000);
      });
  };

  return (
    <>
      {checkoutItems.length > 0 ? (
        <div className={styles.container}>
          <Elements stripe={stripePromise}>
            <div className={styles.wrapper}>
              <Main
                momoRedirect={momoRedirect}
                handleCheckout={handleCheckout}
                checkoutItems={checkoutItems}
              />
              <Summary checkoutItems={checkoutItems} />
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
