/** @format */

import Select from '@/components/Dropdown/Select';
import Option from '@/components/Dropdown/Option';
import Input from '@/components/Input';

import styles from './head.module.css';
import { debounce } from 'lodash-es';

const CourseHead = ({ categories, category, setCategory, setKeyword }) => {
  const handleSelectOption = (e) => {
    const { value } = e.target;
    setCategory(value);
  };

  const handleSetKeyword = debounce((e) => {
    const { value } = e.target;
    setKeyword(value);
  }, 500);

  const renderCategories = () => {
    if (categories) {
      return categories.data.map((category) => {
        return (
          <Option
            key={category._id}
            onChoose={handleSelectOption}
            value={category.categoryID}>
            {category.categoryName}
          </Option>
        );
      });
    }
  };

  return (
    <div className={styles.head}>
      <Input
        onChange={handleSetKeyword}
        className={styles.search}
        search
        placeholder='Search'
      />
      <Select currentOption={category}>
        <Option onChoose={handleSelectOption} value=''>
          All categories
        </Option>
        {renderCategories()}
      </Select>
    </div>
  );
};

export default CourseHead;
