/** @format */
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Input from '@/components/Input';

import { errorSchema } from './errors';

import styles from './form.module.css';

const Form = ({ handleLogin, getRegisteredEmail }) => {
  // Declare react hook form to handle form validation for us
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(errorSchema),
  });

  const onSubmit = (data) => {
    handleLogin(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <Input
        className={styles.email}
        type='email'
        label='Email'
        defaultValue={getRegisteredEmail}
        placeholder='Email'
        {...register('email', { required: true, minLength: 8, maxLength: 80 })}
        error={errors.email?.message}
      />
      <Input
        type='password'
        className={styles.password}
        label='Password'
        placeholder='Password'
        {...register('password', {
          required: true,
          minLength: 6,
          maxLength: 50,
        })}
        error={errors.password?.message}
      />
      <div className={styles.button}>
        <Button
          type='submit'
          variant={ButtonVariants.Solid}
          size={ButtonSizes.Small}>
          <FormattedMessage id='login.button' />
        </Button>
      </div>
    </form>
  );
};

export default Form;
