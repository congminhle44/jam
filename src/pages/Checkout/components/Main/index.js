/** @format */
import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Typography, { TypographyVariants } from '@/components/Typography';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import CheckoutForm from '../CheckoutForm';

import styles from './main.module.css';

const Main = ({ checkoutItems, handleCheckout, momoRedirect }) => {
  const [payment, setPayment] = useState('card');

  const calcTotal = () => {
    return checkoutItems.reduce((total, course) => total + course.cost, 0);
  };
  const renderItemId = () => {
    return checkoutItems.map((item) => {
      return item._id;
    });
  };
  const handleRedirectMomoCheckout = () => {
    return momoRedirect({
      amount: `${calcTotal() * 23000}`,
      courseIds: renderItemId(),
    }).then((result) => {
      window.location.href = result.payUrl;
    });
  };

  const handleChangePayment = (e) => {
    const { value } = e.target;
    setPayment(value);
  };

  return (
    <div className={styles.container}>
      <Typography className={styles.title} variant={TypographyVariants.H5}>
        <FormattedMessage id='checkout.checkout' />
      </Typography>
      <div className={styles.radio}>
        <input
          onChange={handleChangePayment}
          id='card'
          type='radio'
          name='card'
          value='card'
          checked={payment === 'card'}
        />
        <label className={styles.label} for='card'>
          <FormattedMessage id='checkout.card' />
        </label>
      </div>
      {payment === 'card' && (
        <CheckoutForm
          handleCheckout={handleCheckout}
          total={calcTotal()}
          checkoutItems={renderItemId()}
        />
      )}
      <div className={styles.radio}>
        <input
          onChange={handleChangePayment}
          id='momo'
          type='radio'
          name='Momo'
          value='momo'
          checked={payment === 'momo'}
        />
        <label className={styles.label} for='momo'>
          <FormattedMessage id='checkout.momo' />
        </label>
      </div>
      {payment === 'momo' && (
        <Button
          onClick={handleRedirectMomoCheckout}
          className={styles.button}
          variant={ButtonVariants.Solid}
          size={ButtonSizes.Standard}>
          <FormattedMessage id='checkout.momo' />
        </Button>
      )}
    </div>
  );
};

export default Main;
