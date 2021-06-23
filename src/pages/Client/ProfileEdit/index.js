/** @format */

import Menu from './components/Menu';
import styles from './edit.module.css';

const ProfileEdit = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Menu />
        {children}
      </div>
    </div>
  );
};

export default ProfileEdit;
