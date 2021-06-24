/** @format */
import { useAtom } from 'jotai';

import Brand from '@/assets/Images/Brand.png';
import Typography, { TypographyVariants } from '@/components/Typography';
import { userAtom } from '@/store/login';

import styles from './header.module.css';
import User from './components/User';
import { Link } from 'react-router-dom';

const TutorHeader = () => {
  const [userInfo] = useAtom(userAtom);

  return (
    <div className={styles.container}>
      <div className={styles.brand}>
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
      </div>
      <div className={styles.user}>
        <Link to='/' className={styles.link}>
          <Typography
            className={styles.switch}
            variant={TypographyVariants.Body1}>
            Switch to client
          </Typography>
        </Link>
        <User userInfo={userInfo} />
      </div>
    </div>
  );
};

export default TutorHeader;
