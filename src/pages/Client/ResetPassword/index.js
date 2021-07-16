/** @format */
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Input from '@/components/Input';
import Typography, { TypographyVariants } from '@/components/Typography';

import styles from './forgot.module.css';
import { useAtom } from 'jotai';
import { showAlertAtom } from '@/store/alert';
import { useResetPassword } from '@/queries/hooks/users';
import { useHistory, useLocation } from 'react-router-dom';
import Alert, { AlertVariants } from '@/components/Alert';

const ResetPassword = () => {
  const history = useHistory();
  const search = useLocation().search;

  const token = new URLSearchParams(search).get('token');

  const { mutateAsync: resetPassword } = useResetPassword();
  const [, showAlert] = useAtom(showAlertAtom);

  const errorSchema = yup.object().shape({
    password: yup.string().required().min(6).max(80),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(errorSchema),
  });

  const onSubmit = (data) => {
    return resetPassword({ password: data.password, token })
      .then(() => {
        history.push('/login');
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: 'Your password has been reset successfully',
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
          Reset your password
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Input
            className={styles.password}
            type='password'
            label='Password'
            placeholder='Type your password'
            {...register('password', {
              required: true,
              minLength: 6,
              maxLength: 80,
            })}
            error={errors.password?.message}
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

export default ResetPassword;
