/** @format */
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Input from '@/components/Input';
import Typography, { TypographyVariants } from '@/components/Typography';

import styles from './forgot.module.css';
import { useRecoverMail } from '@/queries/hooks/users';
import { useAtom } from 'jotai';
import { showAlertAtom } from '@/store/alert';
import Alert, { AlertVariants } from '@/components/Alert';

const ForgotPassword = () => {
  const { mutateAsync: sendRecoverMail } = useRecoverMail();

  const [, showAlert] = useAtom(showAlertAtom);

  const errorSchema = yup.object().shape({
    email: yup.string().required().min(8).max(80).email(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(errorSchema),
  });

  const onSubmit = (data) => {
    return sendRecoverMail({ email: data.email })
      .then(() => {
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: 'Please check your email',
          },
        });
      })
      .catch((err) => {
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Error,
            children: err.response && err.response.data.message,
          },
        });
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Typography className={styles.title} variant={TypographyVariants.H5}>
          Recover your account
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Input
            className={styles.email}
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
          <Button
            className={styles.button}
            type='submit'
            variant={ButtonVariants.Solid}
            size={ButtonSizes.Large}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
