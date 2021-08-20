/** @format */

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import { ErrorIco } from '@/components/Icons';
import Typography, { TypographyVariants } from '@/components/Typography';
import { useCallback, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router';
import styles from './error.module.css';

const CheckoutSuccess = () => {
  const history = useHistory();

  const [second, setSecond] = useState(5);

  const handleRedirectToHome = useCallback(() => {
    history.push('/');
  }, [history]);

  useEffect(() => {
    if (second > 0) {
      setTimeout(() => {
        setSecond(second - 1);
      }, 1000);
    }
    if (second === 0) handleRedirectToHome();
  }, [second, handleRedirectToHome]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.check}>
          <ErrorIco />
        </div>
        <Typography className={styles.title} variant={TypographyVariants.H5}>
          <FormattedMessage id='checkout.error.title' />
        </Typography>
        <Typography
          className={styles.detail}
          variant={TypographyVariants.Title1}>
          <FormattedMessage id='checkout.error.detail' />
        </Typography>
        <Typography
          className={styles.thank}
          variant={TypographyVariants.Title1}>
          <FormattedMessage id='checkout.error.thank' />
        </Typography>
        <Button
          onClick={handleRedirectToHome}
          className={styles.button}
          variant={ButtonVariants.Solid}
          size={ButtonSizes.Standard}>
          <FormattedMessage id='checkout.common.button' /> ({second})
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
