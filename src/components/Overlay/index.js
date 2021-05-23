/** @format */

import styles from './overlay.module.css';

const Overlay = ({ children, ...others }) => (
  <div className={styles.container} {...others}>
    {children}
  </div>
);

export default Overlay;
