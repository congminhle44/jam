/** @format */

import styles from './rate.module.css';
import Rating from '@material-ui/lab/Rating';

export default function RateStar({ value }) {
  return (
    <div className={styles.container}>
      <Rating name='read-only' size='small' value={value} readOnly />
    </div>
  );
}
