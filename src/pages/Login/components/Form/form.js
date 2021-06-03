/** @format */

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Input from '@/components/Input';
import styles from './form.module.css';

const Form = () => {
  return (
    <form className={styles.container}>
      <Input className={styles.email} label='Email' placeholder='Email' />
      <Input type='password' label='Password' placeholder='Password' />
      <div className={styles.button}>
        <Button
          type='submit'
          variant={ButtonVariants.Solid}
          size={ButtonSizes.Small}>
          LOGIN
        </Button>
      </div>
    </form>
  );
};

export default Form;
