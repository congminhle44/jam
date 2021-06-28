/** @format */
import { useAtom } from 'jotai';

import Brand from '@/assets/Images/Brand.png';
import Typography, { TypographyVariants } from '@/components/Typography';
import { removeUserInfoAtom, userAtom } from '@/store/login';

import styles from './header.module.css';
import User from './components/User';
import { Link, useHistory } from 'react-router-dom';
import { useLogout } from '@/queries/hooks/users';
import { removeTokenAtom } from '@/store/token';
import { removeRefreshTokenAtom } from '@/store/refreshToken';
import { FormattedMessage } from 'react-intl';

const TutorHeader = () => {
  const history = useHistory();

  const [userInfo] = useAtom(userAtom);
  const { mutateAsync: logoutRemoveRefreshToken } = useLogout();
  const [, removeUserInfo] = useAtom(removeUserInfoAtom);
  const [, removeUserToken] = useAtom(removeTokenAtom);
  const [, removeUserRefreshToken] = useAtom(removeRefreshTokenAtom);

  const handleLogout = () => {
    logoutRemoveRefreshToken({
      refreshToken: JSON.parse(localStorage.getItem('rid')),
    }).then(() => {
      removeUserInfo();
      removeUserToken();
      removeUserRefreshToken();
      history.push('/');
    });
  };

  return (
    <div className={styles.container}>
      <Link to='/tutor/dashboard' className={styles.brand}>
        <img className={styles.img} src={Brand} alt='brand' />
        <div className={styles.brandDetail}>
          <Typography
            className={styles.brandName}
            variant={TypographyVariants.Title2}>
            Jam Academy
          </Typography>
          <Typography
            className={styles.brandSide}
            variant={TypographyVariants.Title1}>
            Tutor
          </Typography>
        </div>
      </Link>
      <div className={styles.user}>
        <Link to='/' className={styles.link}>
          <Typography
            className={styles.switch}
            variant={TypographyVariants.Body1}>
            <FormattedMessage id='header.switchClient' />
          </Typography>
        </Link>
        <User handleLogout={handleLogout} userInfo={userInfo} />
      </div>
    </div>
  );
};

export default TutorHeader;
