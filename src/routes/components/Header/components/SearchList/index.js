/** @format */
import { Link } from 'react-router-dom';

import { Search } from '@/components/Icons';
import Typography, { TypographyVariants } from '@/components/Typography';
import Skeleton from 'react-loading-skeleton';
import styles from './searchlist.module.css';

const SearchList = ({ courses, isLoading }) => {
  const renderSearchItem = () => {
    if (courses) {
      if (courses.data.length > 0) {
        return courses.data.map((course) => {
          return (
            <Link
              to={`/course/${course._id}`}
              key={course._id}
              className={styles.searchItem}>
              <div className={styles.searchIco}>
                <Search />
              </div>
              <Typography
                className={styles.item}
                variant={TypographyVariants.Label1}>
                {course.courseName}
              </Typography>
            </Link>
          );
        });
      } else {
        return (
          <Typography
            className={styles.notfound}
            variant={TypographyVariants.Body1}>
            There is no course
          </Typography>
        );
      }
    }
  };

  const renderLoading = () => {
    return (
      <div className={styles.searchItem}>
        <div className={styles.searchIco}>
          <Search />
        </div>
        <Skeleton width={150} height={20} />
      </div>
    );
  };

  return (
    <div className={styles.searchList}>
      {isLoading ? renderLoading() : renderSearchItem()}
    </div>
  );
};

export default SearchList;
