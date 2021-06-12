/** @format */

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import { Up } from '@/components/Icons';
import Typography, { TypographyVariants } from '@/components/Typography';
import useClickOutside from '@/hooks/useClickOutside';
import useToggle from '@/hooks/useToggle';
import clsx from 'clsx';
import { useRef } from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './checkout.module.css';

const Checkout = ({ cartItems, handleRedirectCheckout }) => {
  const checkoutRef = useRef();
  const showfullForm = useToggle(false);

  useClickOutside(checkoutRef, showfullForm.setInActive);

  const renderTotalPrice = () => {
    if (cartItems) {
      return cartItems.reduce((total, course) => total + course.cost, 0);
    }
  };

  return (
    <div ref={checkoutRef} className={styles.wrapper}>
      <div
        className={clsx(styles.container, showfullForm.active && styles.show)}>
        <div onClick={() => showfullForm.toggle()} className={styles.head}>
          <div className={styles.total}>
            <Typography
              className={styles.totalTitle}
              variant={TypographyVariants.Paragraph1}>
              <FormattedMessage id='cart.total' />
            </Typography>
            <Typography
              className={styles.amount}
              variant={TypographyVariants.H5}>
              ${renderTotalPrice()}
            </Typography>
          </div>
          <div
            className={clsx(styles.up, showfullForm.active && styles.rotate)}>
            <Up />
          </div>
        </div>
        <div className={styles.body}>
          <Typography
            className={styles.note}
            variant={TypographyVariants.Label2}>
            <FormattedMessage id='cart.note' />
          </Typography>
        </div>
        <Button
          onClick={handleRedirectCheckout}
          className={styles.button}
          variant={ButtonVariants.Solid}
          size={ButtonSizes.Large}>
          <FormattedMessage id='cart.checkout' />
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
