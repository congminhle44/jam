/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import styles from './option.module.css';

const FormOption = () => {
  return (
    <div className={styles.container}>
      <Typography className={styles.item} variant={TypographyVariants.Label1}>
        Register instead?
      </Typography>
      <Typography className={styles.item} variant={TypographyVariants.Label1}>
        Forgot your password?
      </Typography>
    </div>
  );
};

export default FormOption;
