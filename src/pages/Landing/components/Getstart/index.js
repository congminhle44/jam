/** @format */
import { Link } from 'react-router-dom';

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Typography, { TypographyVariants } from '@/components/Typography';
import { FormattedMessage } from 'react-intl';
import styles from './style.module.css';

const Getstarted = () => {
  return (
    <div id='getstart' className={styles.container}>
      <div className={styles.content}>
        <Typography className={styles.title} variant={TypographyVariants.H4}>
          <FormattedMessage id='getstart.title' />
        </Typography>
        <Typography
          className={styles.description}
          variant={TypographyVariants.Title2}>
          <FormattedMessage id='getstart.description' />
        </Typography>
        <Link to='/login'>
          <Button
            className={styles.button}
            variant={ButtonVariants.Solid}
            size={ButtonSizes.Small}>
            <FormattedMessage id='getstart.button' />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Getstarted;
