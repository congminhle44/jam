/** @format */

import { useRegister } from '@/queries/hooks/users';
import { useAtom } from 'jotai';
import { useHistory } from 'react-router';

import { showAlertAtom } from '@/store/alert';
import { setRegisteredEmail } from '@/store/register';
import { userAtom } from '@/store/login';

import { AlertVariants } from '@/components/Alert';
import AlertRegister from './components/AlertRegister';
import SignupForm from './components/SignupForm';

import styles from './signup.module.css';
import { useEffect } from 'react';

const Signup = () => {
  const history = useHistory();

  const { mutateAsync: signupUser } = useRegister();

  const [, showAlert] = useAtom(showAlertAtom);
  const [, registeredEmail] = useAtom(setRegisteredEmail);
  const [userInfo] = useAtom(userAtom);

  useEffect(() => {
    if (userInfo) history.push('/');
  }, [history, userInfo]);

  const handleRegister = (user) => {
    return signupUser(user)
      .then((result) => {
        // If user successfully registered, system will save their email and redirect to login page with the entered email input
        registeredEmail(result.email);
        history.push('/login');
        showAlert({
          component: AlertRegister,
          props: {
            variant: AlertVariants.Success,
            children: 'Registered successfully, please sign in to your account',
          },
        });
      })
      .catch((err) => {
        showAlert({
          component: AlertRegister,
          props: {
            variant: AlertVariants.Error,
            children: err.response && err.response.data.message,
          },
        });
      });
  };

  return (
    <div className={styles.container}>
      <SignupForm handleRegister={handleRegister} />
    </div>
  );
};

export default Signup;
