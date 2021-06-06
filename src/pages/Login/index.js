/** @format */
import { AlertVariants } from '@/components/Alert';
import { useLogin } from '@/queries/hooks/users';
import { showAlertAtom } from '@/store/alert';
import { addUserInfoAtom, userAtom } from '@/store/login';
import { registeredAtom, removeRegisteredEmail } from '@/store/register';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import AlertLogin from './components/AlertLogin';
import LoginForm from './components/LoginForm';
import styles from './login.module.css';

const Login = () => {
  const [, showAlert] = useAtom(showAlertAtom);

  const [userLocal] = useAtom(userAtom);
  const [, addUserInfo] = useAtom(addUserInfoAtom);
  const [getRegisteredEmail] = useAtom(registeredAtom);
  const [, removeEmail] = useAtom(removeRegisteredEmail);

  const history = useHistory();

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
        addUserInfo(data.data);
        document.cookie = `sid=${data.accessToken}`;
        history.push('/');
        removeEmail();
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
      <LoginForm
        getRegisteredEmail={getRegisteredEmail}
        handleLogin={handleLogin}
      />
    </div>
  );
};

export default Login;
