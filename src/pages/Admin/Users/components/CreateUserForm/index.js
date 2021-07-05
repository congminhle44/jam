/** @format */

import Select from '@/components/Dropdown/Select';
import Option from '@/components/Dropdown/Option';
import Input from '@/components/Input';
import styles from './form.module.css';

const CreateUserForm = ({ role, handleSelectOption, errors, register }) => {
  return (
    <div className={styles.container}>
      <Input
        className={styles.email}
        type='email'
        label='Email'
        placeholder='Type user email'
        {...register('email', {
          required: true,
          minLength: 8,
          maxLength: 80,
        })}
        error={errors.email?.message}
      />
      <Input
        className={styles.name}
        type='text'
        label='Full name'
        placeholder='Type user fullname'
        {...register('fullName', {
          required: true,
          minLength: 8,
          maxLength: 80,
        })}
        error={errors.fullName?.message}
      />
      <Select currentOption={role}>
        <Option onChoose={handleSelectOption} value='student'>
          Student
        </Option>
        <Option onChoose={handleSelectOption} value='tutor'>
          Tutor
        </Option>
        <Option onChoose={handleSelectOption} value='admin'>
          Admin
        </Option>
      </Select>
    </div>
  );
};

export default CreateUserForm;
