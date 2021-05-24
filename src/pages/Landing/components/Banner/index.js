/** @format */

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Typography, { TypographyVariants } from '@/components/Typography';
import styles from './banner.module.css';

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Typography className={styles.title} variant={TypographyVariants.H6}>
          WELCOME TO JAM ACADEMY
        </Typography>
        <Typography
          className={styles.describe}
          variant={TypographyVariants.Label1}>
          Your future is depending on what you’ve learnt today
        </Typography>
        <Button
          className={styles.button}
          variant={ButtonVariants.Solid}
          size={ButtonSizes.Small}>
          Discover now
        </Button>
      </div>
    </div>
  );
};

export default Banner;
