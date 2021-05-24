/** @format */
import Brand from '@/assets/Images/brand.png';

import styles from './spinner.module.css';

const Spinner = () => (
  <div className={styles.wrapper}>
    <img className={styles.brand} src={Brand} alt='brand' />
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Spinner;
