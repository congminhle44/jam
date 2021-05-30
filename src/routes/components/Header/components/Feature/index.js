/** @format */
import { useRef } from 'react';
import clsx from 'clsx';

import useToggle from '@/hooks/useToggle';
import useClickOutside from '@/hooks/useClickOutside';

import Input from '@/components/Input';
import { Search, Sun } from '@/components/Icons';

import styles from '../../header.module.css';

const HeaderFeature = () => {
  const searchRef = useRef();
  const isSearch = useToggle(false);

  useClickOutside(searchRef, isSearch.setInActive);

  return (
    <div className={styles.feature}>
      <div ref={searchRef} className={styles.search}>
        <div
          className={clsx(styles.searchWrap, isSearch.active && styles.show)}>
          <div
            onClick={isSearch.setActive}
            className={clsx(styles.searchIco, isSearch.active && styles.hide)}>
            <Search />
          </div>
          <Input placeholder='Search' search />
        </div>
      </div>
      <div className={styles.toggleTheme}>
        <Sun />
      </div>
    </div>
  );
};

export default HeaderFeature;
