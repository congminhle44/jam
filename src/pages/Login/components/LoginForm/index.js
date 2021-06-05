/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';

import Login from '@/assets/Images/login-bg.png';

import Form from '../Form/form';
import Oauth from '../Oauth';
import FormOption from '../Option';

import styles from './styles.module.css';
import { FormattedMessage } from 'react-intl';

const LoginForm = ({ handleLogin }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={Login} alt='Login banner' />
      <div className={styles.form}>
        <Typography
          className={styles.title}
          variant={TypographyVariants.Title2}>
          <FormattedMessage id='login.title' />{' '}
          <span className={styles.brand}>
            <FormattedMessage id='login.brand' />
          </span>
        </Typography>
        <Form handleLogin={handleLogin} />
        <Oauth />
        <FormOption />
      </div>
    </div>
  );
};

export default LoginForm;
