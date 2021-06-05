/** @format */

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Input from '@/components/Input';
import Typography, { TypographyVariants } from '@/components/Typography';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import styles from './form.module.css';

const Form = () => {
  return (
    <form className={styles.container}>
      <Input
        className={styles.input}
        label='Email'
        placeholder='Type your email'
      />
      <Input
        type='password'
        className={styles.input}
        label='Password'
        placeholder='Type your password'
      />
      <Input
        className={styles.input}
        label='Fullname'
        placeholder='Type your fullname'
      />
      <Input
        className={styles.input}
        label='Address'
        placeholder='Type your address'
      />
      <div className={styles.controler}>
        <Link className={styles.link} to='/login'>
          <Typography variant={TypographyVariants.Label1}>
            <FormattedMessage id='signup.login' />
          </Typography>
        </Link>
        <Button
          type='submit'
          className={styles.button}
          variant={ButtonVariants.Solid}
          size={ButtonSizes.Small}>
          <FormattedMessage id='signup.button' />
        </Button>
      </div>
    </form>
  );
};

export default Form;
