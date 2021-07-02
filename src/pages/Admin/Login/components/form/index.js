/** @format */

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Input from '@/components/Input';
import Typography, { TypographyVariants } from '@/components/Typography';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { errorSchema } from './errors';
import styles from './form.module.css';

const AdminLoginForm = ({ handleLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(errorSchema) });

  const onSubmit = (data) => {
    handleLogin(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <Input
        className={styles.input}
        type='email'
        label='Email'
        placeholder='Type your email'
        {...register('email', {
          required: true,
          minLength: 8,
          maxLength: 80,
        })}
        error={errors.email?.message}
      />
      <Input
        className={styles.input}
        type='password'
        label='Password'
        placeholder='Type your password'
        {...register('password', {
          required: true,
          minLength: 6,
          maxLength: 50,
        })}
        error={errors.password?.message}
      />
      <div className={styles.control}>
        <Button
          type='submit'
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
