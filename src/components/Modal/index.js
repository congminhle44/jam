/** @format */

import { useEffect, useState } from 'react';

import { disableScroll, enableScroll } from '@/helpers/behaviours';

import Button, { ButtonSizes, ButtonVariants } from '../Button';
import Overlay from '../Overlay';
import Typography, { TypographyVariants } from '../Typography';

import styles from './modal.module.css';

const Modal = ({ header, body, okText, isOpen, onClose, onOk }) => {
  const [mountDownTarget, setMountDownTarget] = useState(null);

  useEffect(() => {
    if (isOpen) disableScroll();
    else enableScroll();
    return () => {
      enableScroll();
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    if (mountDownTarget !== e.target) {
      return;
    }

    setMountDownTarget(null);

    if (onClose) {
      onClose();
    }
  };

  const handleOverlayMouseDown = (e) => {
    setMountDownTarget(e.target);
  };

  return (
    <>
      {isOpen && (
        <Overlay
          onClick={handleOverlayClick}
          onMouseDown={handleOverlayMouseDown}>
          <div className={styles.container}>
            <div className={styles.header}>
              <Typography variant={TypographyVariants.H5}>{header}</Typography>
            </div>
            <div className={styles.body}>
              <Typography variant={TypographyVariants.Body1}>{body}</Typography>
            </div>
            <div className={styles.footer}>
              <div className={styles.cancel}>
                <Button
                  onClick={onClose}
                  variant={ButtonVariants.Outline}
                  size={ButtonSizes.Small}>
                  Cancel
                </Button>
              </div>
              <div className={styles.done}>
                <Button
                  onClick={onOk}
                  variant={ButtonVariants.Solid}
                  size={ButtonSizes.Small}>
                  {okText ? okText : 'Confirm'}
                </Button>
              </div>
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
};

export default Modal;