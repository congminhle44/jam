/** @format */

import Input from '@/components/Input';
import Typography, { TypographyVariants } from '@/components/Typography';
import styles from './form.module.css';

const UpdateCategoryForm = ({ errors, register }) => {
  return (
    <div className={styles.container}>
      <Input
        className={styles.name}
        type='text'
        label='Name'
        placeholder='Type category name'
        {...register('categoryName', {
          required: true,
          minLength: 8,
          maxLength: 80,
        })}
        error={errors.categoryName?.message}
      />
      <div className={styles.file}>
        <Typography
          className={styles.label}
          variant={TypographyVariants.Label1}>
          Thumbnail
        </Typography>
        <input
          className={styles.name}
          type='file'
          label='Full name'
          placeholder='Type user fullname'
          {...register('thumbnail', {
            required: true,
          })}
          error={errors.categoryName?.message}
        />
      </div>
    </div>
  );
};

export default UpdateCategoryForm;
