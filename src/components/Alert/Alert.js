/** @format */

import { useEffect } from 'react';
import clsx from 'clsx';

import { Cancel, Check, Info } from '../Icons';
import { AlertVariants } from './variants';

import styles from './styles.module.css';

const Alert = ({ children, suffix, isOpen, onClose, variant, ...others }) => {
  useEffect(() => {
    if (isOpen)
      setTimeout(() => {
        onClose();
      }, 3000);
  }, [isOpen, onClose]);

  const switchAlertIcon = () => {
    switch (variant) {
      case AlertVariants.Success:
        return <Check />;
      default:
        return <Info />;
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className={clsx(
            styles.container,
            variant === AlertVariants.Error && styles.error,
            variant === AlertVariants.Warning && styles.warning,
            variant === AlertVariants.Success && styles.success
          )}
          {...others}>
          <div className={styles.wrapper}>
            <div className={styles.icon}>
              {suffix ? suffix : switchAlertIcon()}
            </div>
            <div className={styles.content}>{children}</div>
          </div>
          <div className={styles.close} onClick={onClose}>
            <Cancel />
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
