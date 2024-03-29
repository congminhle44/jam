/** @format */
import { yupResolver } from '@hookform/resolvers/yup';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Input from '@/components/Input';
import CoursePreview from '../Preview';
import { errorSchema } from './errors';

import styles from './form.module.css';
import { FormattedMessage } from 'react-intl';

const CourseUpdateForm = ({
  courseData,
  handleTogglePreview,
  isPreview,
  updateCourseInformation,
}) => {
  const defaultData = {
    courseName: courseData.courseName,
    courseDescription: courseData.courseDescription,
    cost: courseData.cost,
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(errorSchema),
    defaultValues: defaultData,
  });
  const courseName = getValues('courseName');
  const courseDescription = getValues('courseDescription');
  const cost = getValues('cost');

  const onSubmit = (data) => {
    const { courseName, courseDescription, cost } = data;
    let trimData = {
      courseName: courseName.trim(),
      courseDescription: courseDescription.trim(),
      cost,
    };
    updateCourseInformation(trimData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      {isPreview ? (
        <CoursePreview courseData={{ courseName, courseDescription, cost }} />
      ) : (
        <Fragment>
          <Input
            className={styles.name}
            placeholder='Type course name'
            {...register('courseName', {
              required: true,
              minLength: 8,
              maxLength: 50,
            })}
            error={errors.courseName?.message}
          />
          <Input
            className={styles.description}
            textarea
            placeholder='Type course description'
            {...register('courseDescription', {
              maxLength: 500,
            })}
            error={errors.courseDescription?.message}
          />
          <Input
            className={styles.description}
            placeholder='Type course price'
            {...register('cost', {
              required: true,
              minLength: 3,
              maxLength: 4,
            })}
            error={errors.cost?.message}
          />
        </Fragment>
      )}
      <div className={styles.control}>
        <Button
          type='button'
          onClick={handleTogglePreview}
          className={styles.preview}
          variant={ButtonVariants.Outline}
          size={ButtonSizes.Small}>
          <FormattedMessage id='tutor.course.setting.preview' />
        </Button>
        <Button
          type='submit'
          className={styles.update}
          variant={ButtonVariants.Solid}
          size={ButtonSizes.Small}>
          <FormattedMessage id='common.update' />
        </Button>
      </div>
    </form>
  );
};

export default CourseUpdateForm;
