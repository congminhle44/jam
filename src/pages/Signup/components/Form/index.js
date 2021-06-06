/** @format */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Input from '@/components/Input';
import Typography, { TypographyVariants } from '@/components/Typography';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import styles from './form.module.css';
import { errorSchema } from './errors';

const Form = ({ registerAction }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(errorSchema),
  });

  const onSubmit = (data) => {
    registerAction(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <Input
        className={styles.input}
        type='email'
        label='Email'
        required
        placeholder='Type your email'
        {...register('email', { required: true, minLength: 8, maxLength: 80 })}
        error={errors.email?.message}
      />
      <Input
        type='password'
        className={styles.input}
        label='Password'
        placeholder='Type your password'
        {...register('password', {
          required: true,
          minLength: 6,
          maxLength: 50,
        })}
        required
        error={errors.password?.message}
      />
      <Input
        className={styles.input}
        label='Full name'
        placeholder='Type your fullname'
        required
        {...register('fullName', {
          required: true,
          minLength: 6,
          maxLength: 80,
        })}
        error={errors.fullName?.message}
      />
      <Input
        className={styles.input}
        label='Address'
        placeholder='Type your address'
        {...register('address', {
          minLength: 8,
          maxLength: 80,
        })}
        error={errors.address?.message}
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
