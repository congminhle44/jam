/** @format */
import data from './data';

import Typography, { TypographyVariants } from '@/components/Typography';
import { FormattedMessage } from 'react-intl';
import InstructorCard from './components/card';

import styles from './style.module.css';

const Instructor = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Typography className={styles.title} variant={TypographyVariants.H6}>
          <FormattedMessage id='tutor.title' />
        </Typography>
        <div className={styles.list}>
          <InstructorCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default Instructor;
