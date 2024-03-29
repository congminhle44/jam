/** @format */

import styles from './rate.module.css';
import Rating from '@material-ui/lab/Rating';
import Typography, { TypographyVariants } from '@/components/Typography';

export default function RateStar({ showRateInText, value, amount, readOnly }) {
  return (
    <div className={styles.container}>
      {showRateInText && (
        <Typography className={styles.value} variant={TypographyVariants.Body1}>
          {value.toFixed(1)}
        </Typography>
      )}
      <Rating
        name='read-only'
        size='small'
        precision={0.5}
        value={value}
        readOnly={readOnly}
      />
      {amount ? (
        <Typography
          className={styles.amount}
          variant={TypographyVariants.Label1}>
          ({amount})
        </Typography>
      ) : null}
    </div>
  );
}
