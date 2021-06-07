/** @format */

import { Facebook, Google } from '@/components/Icons';
import Typography, { TypographyVariants } from '@/components/Typography';
import { FormattedMessage } from 'react-intl';

import config from '@/config';

import styles from './auth.module.css';

const Oauth = () => {
  return (
    <div className={styles.container}>
      <Typography variant={TypographyVariants.Label2}>
        <FormattedMessage id='login.oauth' />
      </Typography>
      <div className={styles.list}>
        <a
          href={`${config.app.apiHost}/auth/facebook`}
          className={styles.option}>
          <Facebook />
        </a>
        <a href={`${config.app.apiHost}/auth/google`} className={styles.option}>
          <Google />
        </a>
      </div>
    </div>
  );
};

export default Oauth;
