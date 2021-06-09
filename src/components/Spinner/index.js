/** @format */
// import Brand from '/favicon.ico';

import styles from './spinner.module.css';

const Spinner = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <img className={styles.brand} src='/favicon.ico' alt='brand' />
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
