/** @format */
import image from '@/assets/Images/404.png';
import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Typography, { TypographyVariants } from '@/components/Typography';
import { useHistory } from 'react-router';

import styles from './notfound.module.css';

const Notfound = () => {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={image} alt='Not found' />
        <Typography className={styles.content} variant={TypographyVariants.H5}>
          Oops...looks like you got lost
        </Typography>
        <div className={styles.control}>
          <Button
            onClick={() => history.push('/')}
            className={styles.button}
            variant={ButtonVariants.Solid}
            size={ButtonSizes.Standard}>
            Back to homepage
          </Button>
          <Button
            onClick={() => history.goBack()}
            className={styles.button}
            variant={ButtonVariants.Outline}
            size={ButtonSizes.Standard}>
            Back to previous
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
