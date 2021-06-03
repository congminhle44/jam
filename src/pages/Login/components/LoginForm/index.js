/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';

import Login from '@/assets/Images/login-bg.png';

import Form from '../Form/form';
import Oauth from '../Oauth';
import FormOption from '../Option';

import styles from './styles.module.css';

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={Login} alt='Login banner' />
      <div className={styles.form}>
        <Typography
          className={styles.title}
          variant={TypographyVariants.Title2}>
          sign in to your <span className={styles.brand}>jam account</span>
        </Typography>
        <Form />
        <Oauth />
        <FormOption />
      </div>
    </div>
  );
};

export default LoginForm;
