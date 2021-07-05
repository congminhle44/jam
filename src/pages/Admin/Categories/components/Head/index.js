/** @format */

import Input from '@/components/Input';

import styles from './head.module.css';
import { debounce } from 'lodash-es';

const CategoryHead = ({ setKeyword }) => {
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
        placeholder='Search category name'
      />
    </div>
  );
};

export default CategoryHead;
