/** @format */

import Select from '@/components/Dropdown/Select';
import Option from '@/components/Dropdown/Option';
import Input from '@/components/Input';

import styles from './head.module.css';
import { debounce } from 'lodash-es';

const UserHead = ({ role, setRole, setKeyword }) => {
  const handleSelectOption = (e) => {
    const { value } = e.target;
    setRole(value);
  };

  const handleSetKeyword = debounce((e) => {
    const { value } = e.target;
    setKeyword(value);
  }, 500);

  return (
    <div className={styles.head}>
      <Input
        onChange={handleSetKeyword}
        className={styles.search}
        search
        placeholder='Search user name'
      />
      <Select className currentOption={role}>
        <Option onChoose={handleSelectOption} value=''>
          All roles
        </Option>
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

export default UserHead;
