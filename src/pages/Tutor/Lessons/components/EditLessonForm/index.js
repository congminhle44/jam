/** @format */
import Alert, { AlertVariants } from '@/components/Alert';
import Input from '@/components/Input';
import Typography, { TypographyVariants } from '@/components/Typography';
import { showAlertAtom } from '@/store/alert';
import { useAtom } from 'jotai';

import styles from './form.module.css';

const EditLessonForm = ({ register, errors, handleSetSource, lessonInfo }) => {
  const [, showAlert] = useAtom(showAlertAtom);

  const handleChangeFile = (e) => {
    const { files } = e.target;
    if (files[0].size > 828330000) {
      showAlert({
        component: Alert,
        props: {
          variant: AlertVariants.Error,
          children: 'Video must less than 828Mb',
        },
      });
    }
    handleSetSource(files[0]);
  };

  return (
    <form className={styles.container}>
      <Input
        defaultValue={lessonInfo.title}
        className={styles.input}
        label='Title'
        placeholder='Type the title'
        {...register('title', {
          required: true,
          minLength: 8,
          maxLength: 50,
        })}
        error={errors.title?.message}
      />
      <div className={styles.fileWrap}>
        <Typography
          className={styles.label}
          variant={TypographyVariants.Label2}>
          Tutorial video
        </Typography>
        <input onChange={handleChangeFile} accept='video/*' type='file' />
      </div>
    </form>
  );
};

export default EditLessonForm;
