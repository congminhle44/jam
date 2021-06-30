/** @format */

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Input from '@/components/Input';
import Typography, { TypographyVariants } from '@/components/Typography';
import { Link } from 'react-router-dom';
import styles from './form.module.css';

const AdminLoginForm = () => {
  return (
    <form className={styles.container}>
      <Input
        className={styles.input}
        type='email'
        label='Email'
        placeholder='Type your email'
      />
      <Input
        className={styles.input}
        type='password'
        label='Password'
        placeholder='Type your password'
      />
      <div className={styles.control}>
        <Button
          className={styles.button}
          variant={ButtonVariants.Solid}
          size={ButtonSizes.Standard}>
          Sign in
        </Button>
        <Link to='/'>
          <Typography
            className={styles.permission}
            variant={TypographyVariants.Label1}>
            Does not have permission?
          </Typography>
        </Link>
      </div>
    </form>
  );
};

export default AdminLoginForm;
