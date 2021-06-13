/** @format */

import Typography, { TypographyVariants } from '@/components/Typography';
import { FormattedMessage } from 'react-intl';
import styles from './detail.module.css';

const MoreDetails = ({ checkoutItems }) => {
  const renderCheckoutItems = () => {
    return checkoutItems.map((item) => {
      return (
        <div key={item._id} className={styles.item}>
          <div className={styles.left}>
            <img
              className={styles.thumb}
              src={item.courseImage}
              alt={item.courseName}
            />
            <Typography
              className={styles.name}
              variant={TypographyVariants.Body1}>
              {item.courseName}
            </Typography>
          </div>
          <Typography
            className={styles.cost}
            variant={TypographyVariants.Body1}>
            ${item.cost}
          </Typography>
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <Typography className={styles.title} variant={TypographyVariants.H6}>
        <FormattedMessage id='checkout.list' />
      </Typography>
      <div className={styles.courses}>{renderCheckoutItems()}</div>
    </div>
  );
};

export default MoreDetails;
