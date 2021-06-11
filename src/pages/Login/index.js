/** @format */
import { AlertVariants } from '@/components/Alert';
import { useLogin } from '@/queries/hooks/users';
import { showAlertAtom } from '@/store/alert';
import { addUserInfoAtom, userAtom } from '@/store/login';
import { registeredAtom, removeRegisteredEmail } from '@/store/register';
import { addNewTokenAtom } from '@/store/token';
import { addNewRefreshTokenAtom } from '@/store/refreshToken';
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
  const [, addUserToken] = useAtom(addNewTokenAtom);
  const [, addRefreshToken] = useAtom(addNewRefreshTokenAtom);
  const [, removeEmail] = useAtom(removeRegisteredEmail);
  const [getRegisteredEmail] = useAtom(registeredAtom);

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
        history.push('/');
        showAlert({
          component: AlertLogin,
          props: {
            variant: AlertVariants.Success,
            children: 'Login success',
          },
        });

        // Save information and token to localstorage and store to use
        addUserInfo(data.data);
        addUserToken(data.accessToken);
        addRefreshToken(data.refreshToken);
        // This remove will run when user register success and login
        removeEmail();
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
