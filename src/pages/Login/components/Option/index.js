/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import { FormattedMessage } from 'react-intl';
import styles from './option.module.css';

const FormOption = () => {
  return (
    <div className={styles.container}>
      <Typography className={styles.item} variant={TypographyVariants.Label1}>
        <FormattedMessage id='login.register' />
      </Typography>
      <Typography className={styles.item} variant={TypographyVariants.Label1}>
        <FormattedMessage id='login.forgot' />
      </Typography>
    </div>
  );
};

export default FormOption;
