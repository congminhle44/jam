/** @format */

import clsx from 'clsx';
import styles from './overlay.module.css';

const Overlay = ({ children, className, ...others }) => (
  <div className={clsx(styles.container, className)} {...others}>
    {children}
  </div>
);

export default Overlay;
