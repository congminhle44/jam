/** @format */

import Option from '@/components/Dropdown/Option';
import Select from '@/components/Dropdown/Select';
import Input from '@/components/Input';

import styles from './form.module.css';

const CreateCourseForm = ({
  register,
  errors,
  category,
  setCategory,
  categories,
}) => {
  const handleRenderCoursetype = () => {
    if (categories) {
      return categories.data.map((category) => {
        return (
          <Option
            key={category._id}
            value={category.categoryID}
            onChoose={() => setCategory(category.categoryID)}>
            {category.categoryName}
          </Option>
        );
      });
    }
  };

  return (
    <form className={styles.container}>
      <Input
        className={styles.name}
        label='Name'
        placeholder='Type course name'
        {...register('courseName', {
          required: true,
          minLength: 8,
          maxLength: 50,
        })}
        required
        error={errors.courseName?.message}
      />
      <Input
        className={styles.description}
        label='Description'
        textarea
        placeholder='Type course description'
        {...register('courseDescription', {
          maxLength: 500,
        })}
        error={errors.courseDescription?.message}
      />
      <Input
        className={styles.description}
        label='Cost'
        placeholder='Type course description'
        {...register('cost', {
          required: true,
          min: 50,
          max: 500,
        })}
        defaultValue='50'
        error={errors.cost?.message}
      />
      {categories && (
        <Select currentOption={category}>{handleRenderCoursetype()}</Select>
      )}
    </form>
  );
};

export default CreateCourseForm;
