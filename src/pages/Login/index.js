/** @format */
import { AlertVariants } from '@/components/Alert';
import { useLogin } from '@/queries/hooks/categories';
import { showAlertAtom } from '@/store/alert';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import AlertLogin from './components/AlertLogin';
import LoginForm from './components/LoginForm';
import styles from './login.module.css';

const Login = () => {
  const history = useHistory();

  const [, showAlert] = useAtom(showAlertAtom);

  const userLocal = localStorage.getItem('user');

  useEffect(() => {
    if (userLocal) history.push('/');
  }, [history, userLocal]);

  const { mutateAsync: userLogin } = useLogin();

  const handleLogin = (user) => {
    return userLogin({
      email: user.email,
      password: user.password,
    })
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(data.data));
        document.cookie = `sid=${data.accessToken}`;
        history.push('/');
        showAlert({
          component: AlertLogin,
          props: {
            variant: AlertVariants.Success,
            children: 'Login success',
          },
        });
      })
      .catch((err) => {
        showAlert({
          component: AlertLogin,
          props: {
            variant: AlertVariants.Error,
            children: err.response && err.response.data.message,
          },
        });
      });
  };

  return (
    <div className={styles.container}>
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default Login;
