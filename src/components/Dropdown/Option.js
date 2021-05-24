/** @format */
import Typography, { TypographyVariants } from '../Typography';
import styles from './dropdown.module.css';

const Option = ({ children, onChoose, ...others }) => {
  return (
    <Typography variant={TypographyVariants.Body1}>
      <option className={styles.option} onClick={onChoose} {...others}>
        {children}
      </option>
    </Typography>
  );
};

export default Option;
