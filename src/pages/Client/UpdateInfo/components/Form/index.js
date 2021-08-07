/** @format */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Input from '@/components/Input';
import { errorSchema } from './errors';

import styles from './form.module.css';

const Form = ({ userInfo, updateUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(errorSchema),
  });

  const onSubmit = (data) => {
    updateUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <Input
        className={styles.input}
        defaultValue={userInfo && userInfo.fullName}
        placeholder='Your name'
        required
        label='Name'
        {...register('fullName', {
          required: true,
          minLength: 8,
          maxLength: 80,
        })}
        error={errors.fullName?.message}
      />
      <Input
        className={styles.input}
        defaultValue={userInfo && userInfo.description}
        placeholder='Your short description'
        label='Short Description'
        {...register('description', {
          maxLength: 200,
        })}
        error={errors.description?.message}
      />
      <Input
        className={styles.input}
        defaultValue={userInfo && userInfo.address}
        placeholder='Your short description'
        label='Address'
        {...register('address', {
          maxLength: 80,
        })}
        error={errors.address?.message}
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
