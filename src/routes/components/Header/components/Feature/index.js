/** @format */
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

import useToggle from '@/hooks/useToggle';
import useClickOutside from '@/hooks/useClickOutside';

import Input from '@/components/Input';
import { Search } from '@/components/Icons';

import styles from '../../header.module.css';
import SearchList from '../SearchList';
import ThemeMode from '../ThemeMode';

const HeaderFeature = ({
  handleTypingKeyword,
  keyword,
  courses,
  isLoading,
  showInput,
  hideInput,
  isActive,
}) => {
  const isSearch = useToggle(false);
  const isKeywordType = useToggle(false);

  const searchListRef = useRef();
  const searchRef = useRef();

  useEffect(() => {
    keyword !== '' ? isKeywordType.setActive() : isKeywordType.setInActive();
  }, [keyword, isKeywordType]);

  useClickOutside(searchListRef, isKeywordType.setInActive);
  useClickOutside(searchRef, hideInput);

  return (
    <div className={styles.feature}>
      <div ref={searchListRef} className={styles.listSearchWrap}>
        <div ref={searchRef} className={styles.search}>
          <div className={styles.searchWrap}>
            {!isActive && (
              <div
                onClick={showInput}
                className={clsx(
                  styles.searchIco,
                  isSearch.active && styles.hide
                )}>
                <Search />
              </div>
            )}
            {isActive && (
              <Input
                onChange={handleTypingKeyword}
                placeholder='Search'
                search
              />
            )}
          </div>
        </div>
        {isKeywordType.active && (
          <SearchList courses={courses} isLoading={isLoading} />
        )}
      </div>
      <ThemeMode />
    </div>
  );
};

export default HeaderFeature;
