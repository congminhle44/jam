/** @format */
// import Brand from '/favicon.ico';

import { Brand } from '../Icons';
import styles from './spinner.module.css';

const Spinner = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.brand}>
        <Brand />
      </div>
      <div className={styles.dots}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  </div>
);

export default Spinner;
