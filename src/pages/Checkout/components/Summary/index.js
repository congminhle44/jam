/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm';
import styles from './sum.module.css';

const Summary = ({ checkoutItems, handleCheckout }) => {
  const calcTotal = () => {
    return checkoutItems.reduce((total, course) => total + course.cost, 0);
  };

  const renderItemId = () => {
    return checkoutItems.map((item) => {
      return item._id;
    });
  };

  return (
    <div className={styles.container}>
      <Typography className={styles.title} variant={TypographyVariants.H6}>
        <FormattedMessage id='checkout.sum' />
      </Typography>
      <div className={styles.total}>
        <Typography variant={TypographyVariants.Title2}>
          <FormattedMessage id='checkout.total' />
        </Typography>
        <Typography variant={TypographyVariants.Title1}>
          ${calcTotal()}
        </Typography>
      </div>
      <Typography className={styles.note} variant={TypographyVariants.Label1}>
        <FormattedMessage id='checkout.note' />
      </Typography>
      <CheckoutForm
        handleCheckout={handleCheckout}
        total={calcTotal()}
        checkoutItems={renderItemId()}
      />
      <Typography variant={TypographyVariants.Label1}>
        <FormattedMessage id='checkout.subterms' />{' '}
        <Link className={styles.link} to='/terms'>
          <FormattedMessage id='checkout.terms' />
        </Link>
      </Typography>
    </div>
  );
};

export default Summary;
