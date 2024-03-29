/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import Form from '../Form';

import Banner from '@/assets/Images/signup-bg.png';

import styles from './signupform.module.css';
import { FormattedMessage } from 'react-intl';

const SignupForm = ({ handleRegister }) => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Typography
          className={styles.title}
          variant={TypographyVariants.Title2}>
          <FormattedMessage id='signup.title' />{' '}
          <span className={styles.brand}>
            <FormattedMessage id='signup.brand' />
          </span>
        </Typography>
        <Form registerAction={handleRegister} />
      </div>
      <img className={styles.img} src={Banner} alt='Register banner' />
    </div>
  );
};

export default SignupForm;
