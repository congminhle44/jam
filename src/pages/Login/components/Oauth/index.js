/** @format */

import { Facebook, Google } from '@/components/Icons';
import Typography, { TypographyVariants } from '@/components/Typography';
import styles from './auth.module.css';

const Oauth = () => {
  return (
    <div className={styles.container}>
      <Typography variant={TypographyVariants.Label2}>
        Or you can login with
      </Typography>
      <div className={styles.list}>
        <div className={styles.option}>
          <Facebook />
        </div>
        <div className={styles.option}>
          <Google />
        </div>
      </div>
    </div>
  );
};

export default Oauth;
