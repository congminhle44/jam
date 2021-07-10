/** @format */

import Brand from '@/assets/Images/Brand.png';
import { Briefcase, Category, Logout, Profile, User } from '@/components/Icons';
import { useLogout } from '@/queries/hooks/users';
import { removeUserInfoAtom, userAtom } from '@/store/login';
import { removeRefreshTokenAtom } from '@/store/refreshToken';
import { removeTokenAtom } from '@/store/token';
import { useAtom } from 'jotai';
import { Link, useHistory } from 'react-router-dom';
import Navitem from './components/Navitem';

import styles from './sidebar.module.css';

const Sidebar = () => {
  const history = useHistory();

  const [userInfo] = useAtom(userAtom);
  const [, removeUserInfo] = useAtom(removeUserInfoAtom);
  const [, removeUserToken] = useAtom(removeTokenAtom);
  const [, removeUserRefreshToken] = useAtom(removeRefreshTokenAtom);

  const { mutateAsync: logoutRemoveRefreshToken } = useLogout();

  const handleLogout = () => {
    logoutRemoveRefreshToken({
      refreshToken: JSON.parse(localStorage.getItem('rid')),
    }).then((result) => {
      removeUserInfo();
      removeUserToken();
      removeUserRefreshToken();
      history.push('/');
    });
  };

  return (
    <div className={styles.container}>
      <Link to='/admin/dashboard'>
        <img className={styles.img} src={Brand} alt='brand' />
      </Link>
      <div className={styles.navList}>
        <Navitem suffix={<Profile />}>{userInfo.fullName}</Navitem>
        <Navitem isLink path='/admin/categories' suffix={<Category />}>
          Categories
        </Navitem>
        <Navitem isLink path='/admin/courses' suffix={<Briefcase />}>
          Courses
        </Navitem>
        <Navitem isLink path='/admin/users' suffix={<User />}>
          Users
        </Navitem>
        <Navitem onClick={handleLogout} suffix={<Logout />}>
          Logout
        </Navitem>
      </div>
    </div>
  );
};

export default Sidebar;
