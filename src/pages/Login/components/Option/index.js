/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import styles from './option.module.css';

const FormOption = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} to='/signup'>
        <Typography className={styles.item} variant={TypographyVariants.Label1}>
          <FormattedMessage id='login.register' />
        </Typography>
      </Link>
      <Link className={styles.link} to='forgot-password'>
        <Typography className={styles.item} variant={TypographyVariants.Label1}>
          <FormattedMessage id='login.forgot' />
        </Typography>
      </Link>
    </div>
  );
};

export default FormOption;
