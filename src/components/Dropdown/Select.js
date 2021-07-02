/** @format */
import { useRef } from 'react';
import useToggle from '@/hooks/useToggle';

import Typography, { TypographyVariants } from '../Typography';
import DropIco from '@/components/Icons/Up';
import styles from './dropdown.module.css';
import clsx from 'clsx';
import useClickOutside from '@/hooks/useClickOutside';
import parseValueToName from './utils';

const Select = ({
  children,
  placeholder,
  currentOption,
  className,
  ...others
}) => {
  const wrapperRef = useRef();

  const isFocus = useToggle(false);
  useClickOutside(wrapperRef, isFocus.setInActive);

  return (
    <div ref={wrapperRef} className={styles.wrapper} {...others}>
      <div
        onClick={() => isFocus.toggle()}
        className={clsx(
          styles.container,
          isFocus.active && styles.focus,
          className
        )}>
        <Typography variant={TypographyVariants.Body1}>
          {!currentOption
            ? placeholder
              ? placeholder
              : children[0].props.children
            : parseValueToName(currentOption)}
        </Typography>
        <div className={clsx(styles.dropIco, isFocus.active && styles.focus)}>
          <DropIco />
        </div>
      </div>
      {isFocus.active && (
        <div onClick={isFocus.setInActive} className={styles.options}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Select;
