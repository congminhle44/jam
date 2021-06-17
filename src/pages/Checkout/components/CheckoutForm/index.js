/** @format */

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { FormattedMessage } from 'react-intl';

import styles from './form.module.css';

const CheckoutForm = ({ handleCheckout, total, checkoutItems }) => {
  const stripe = useStripe();
  const element = useElements();

  const options = {
    style: {
      base: {
        color: '#919191',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '1.25rem',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    stripe
      .createPaymentMethod({
        type: 'card',
        card: element.getElement(CardElement),
      })
      .then((results) => {
        const { id } = results.paymentMethod;
        handleCheckout(id, total, checkoutItems);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.cardWrap}>
        <div className={styles.cardInfo}>
          <CardElement className={styles.cardInput} options={options} />
        </div>
      </div>
      <Button
        type='submit'
        disabled={!stripe}
        className={styles.button}
        variant={ButtonVariants.Outline}
        size={ButtonSizes.Standard}>
        <FormattedMessage id='checkout.button' /> ${total}
      </Button>
    </form>
  );
};

export default CheckoutForm;
