/** @format */
import Brand from '@/assets/Images/Brand.png';
import Alert, { AlertVariants } from '@/components/Alert';

import Typography, { TypographyVariants } from '@/components/Typography';
import { useLogin } from '@/queries/hooks/users';
import { showAlertAtom } from '@/store/alert';
import { addUserInfoAtom } from '@/store/login';
import { addNewRefreshTokenAtom } from '@/store/refreshToken';
import { addNewTokenAtom } from '@/store/token';
import { useAtom } from 'jotai';
import { useHistory } from 'react-router-dom';
import AdminLoginForm from './components/Form';
import styles from './login.module.css';

const AdminLogin = () => {
  const history = useHistory();
  const { mutateAsync: login } = useLogin();

  const [, showAlert] = useAtom(showAlertAtom);
  const [, setUserData] = useAtom(addUserInfoAtom);
  const [, setUserToken] = useAtom(addNewTokenAtom);
  const [, setUserRefresh] = useAtom(addNewRefreshTokenAtom);

  const handleLogin = (user) => {
    return login(user)
      .then((result) => {
        if (result.data.userType == 'admin') {
          setUserData(result.data);
          setUserToken(result.accessToken);
          setUserRefresh(result.refreshToken);
          history.push('/admin/dashboard');
        } else {
          showAlert({
            component: Alert,
            props: {
              variant: AlertVariants.Warning,
              children: 'You have no permission!',
            },
          });
        }
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
      <div className={styles.wrap}>
        <div className={styles.title}>
          <img className={styles.img} src={Brand} alt='brand' />
          <Typography
            className={styles.admin}
            variant={TypographyVariants.Title2}>
            Admin
          </Typography>
        </div>
        <AdminLoginForm handleLogin={handleLogin} />
      </div>
    </div>
  );
};

export default AdminLogin;
