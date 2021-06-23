/** @format */
import { useForm } from 'react-hook-form';

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Input from '@/components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { errorSchema } from './errors';

import styles from './form.module.css';

const Form = ({ handleChangePassword }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(errorSchema),
  });

  const onSubmit = (data) => {
    handleChangePassword(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <Input
        type='password'
        className={styles.input}
        required
        placeHolder='Type your old password'
        label='Old password'
        {...register('oldPassword', {
          required: true,
          minLength: 6,
          maxLength: 80,
        })}
        error={errors.oldPassword?.message}
      />
      <Input
        type='password'
        className={styles.input}
        required
        placeHolder='Type your new password'
        label='New password'
        {...register('newPassword', {
          required: true,
          minLength: 6,
          maxLength: 80,
        })}
        error={errors.newPassword?.message}
      />
      <div className={styles.button}>
        <Button
          type='submit'
          variant={ButtonVariants.Solid}
          size={ButtonSizes.Standard}>
          Save
        </Button>
      </div>
    </form>
  );
};

export default Form;
