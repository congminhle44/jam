/** @format */

import useToggle from '@/hooks/useToggle';
import clsx from 'clsx';
import { forwardRef } from 'react';
import { Search } from '../Icons';
import Typography, { TypographyVariants } from '../Typography';
import styles from './styles.module.css';

const Input = forwardRef(
  (
    {
      children,
      placeholder,
      label,
      search,
      textarea,
      className,
      error,
      ...others
    },
    ref
  ) => {
    const toggleFocus = useToggle(false);

    const { disabled } = { ...others };

    return (
      <div className={className}>
        <div
          className={clsx(
            styles.container,
            toggleFocus.active && styles.focus,
            search && styles.search,
            textarea && styles.text,
            disabled && styles.disabled
          )}>
          {search && (
            <div className={styles.searchIco}>
              <Search />
            </div>
          )}
          {!search && (
            <label
              className={clsx(
                styles.label,
                toggleFocus.active && styles.focus,
                textarea && styles.text
              )}
              htmlFor={label}>
              {label}
            </label>
          )}
          {!textarea ? (
            <input
              id={label}
              ref={ref}
              onFocus={toggleFocus.setActive}
              onBlur={(e) => (!e.target.value ? toggleFocus.setInActive() : '')}
              className={clsx(
                styles.input,
                toggleFocus.active && styles.focus,
                search && styles.search
              )}
              placeholder={placeholder}
              {...others}
            />
          ) : (
            <textarea
              id={label}
              ref={ref}
              onFocus={toggleFocus.setActive}
              onBlur={(e) => (!e.target.value ? toggleFocus.setInActive() : '')}
              className={clsx(
                styles.input,
                toggleFocus.active && styles.focus,
                search && styles.search
              )}
              placeholder={placeholder}
              {...others}
            />
          )}
        </div>

        <Typography
          variant={TypographyVariants.Label1}
          className={styles.error}>
          {error}
        </Typography>
      </div>
    );
  }
);

export default Input;
