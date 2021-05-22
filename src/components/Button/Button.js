/** @format */

import clsx from 'clsx';

import { ButtonSizes } from './sizes';
import { ButtonVariants } from './variants';

import Typography from '../Typography';

import getFontSize from './utils/getFontSize';

import styles from './styles.module.css';

const Button = ({ children, suffix, variant, size, className, ...others }) => (
  <button
    className={clsx(
      styles.button,
      variant === ButtonVariants.Solid && styles.solid,
      variant === ButtonVariants.Outline && styles.outline,
      size === ButtonSizes.Small && styles.small,
      size === ButtonSizes.Standard && styles.standard,
      size === ButtonSizes.Large && styles.large,
      size === ButtonSizes.Huge && styles.huge,
      className
    )}
    {...others}>
    <div className={styles.icon}>{suffix}</div>
    <Typography variant={getFontSize(size)}>{children}</Typography>
  </button>
);

export default Button;
