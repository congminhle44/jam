/** @format */
import Brand from '@/assets/Images/Brand.png';

import Typography, { TypographyVariants } from '@/components/Typography';
import AdminLoginForm from './components/form';
import styles from './login.module.css';

const AdminLogin = () => {
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
        <AdminLoginForm />
      </div>
    </div>
  );
};

export default AdminLogin;
