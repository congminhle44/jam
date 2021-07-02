/** @format */

import { useEffect, useRef } from 'react';
import clsx from 'clsx';

import Typography, { TypographyVariants } from '@/components/Typography';

import styles from './dashboard.module.css';
import { Fragment } from 'react';

const DashboardTemplate = ({
  head,
  button,
  children,
  ghost,
  currentPage,
  total,
  limit,
  setPage,
}) => {
  const pageNumbers = [];
  const pageRef = useRef();

  const totalPages = Math.ceil(total / limit);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    const currentPagePos = currentPage - 1;
    if (pageRef.current) {
      pageRef.current.style.transform = `translateX(-${
        40.75 * currentPagePos
      }px)`;
    }
    if (currentPage >= totalPages - 4) {
      pageRef.current.style.transform = `translateX(-${
        40.75 * (totalPages - 5)
      }px)`;
    }
  }, [currentPage, pageRef]);

  const renderPages = () => {
    return pageNumbers.map((page) => {
      return (
        <Typography
          key={page}
          onClick={() => setPage(page)}
          className={clsx(styles.page, currentPage === page && styles.active)}
          variant={TypographyVariants.Body1}>
          {page}
        </Typography>
      );
    });
  };

  return (
    <div className={styles.template}>
      <div className={styles.head}>
        <div className={styles.title}>
          <Typography variant={TypographyVariants.H3}>{head}</Typography>
        </div>
        <div className={styles.button}>{button}</div>
      </div>
      <div className={clsx(styles.content, ghost && styles.ghost)}>
        {children}
        <div className={styles.pageList}>
          {totalPages > 1 && (
            <Fragment>
              <Typography
                className={styles.page}
                onClick={() => setPage(1)}
                variant={TypographyVariants.Body1}>
                First
              </Typography>
              <Typography
                className={styles.page}
                onClick={() => setPage(currentPage - 1)}
                variant={TypographyVariants.Body1}>
                Prev
              </Typography>
            </Fragment>
          )}
          <div className={styles.pageWrap}>
            <div ref={pageRef} className={styles.pageDetail}>
              {renderPages()}
            </div>
          </div>
          {totalPages > 1 && (
            <Fragment>
              <Typography
                className={styles.page}
                onClick={() => setPage(currentPage + 1)}
                variant={TypographyVariants.Body1}>
                Next
              </Typography>
              <Typography
                className={styles.page}
                onClick={() => setPage(totalPages)}
                variant={TypographyVariants.Body1}>
                Last
              </Typography>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardTemplate;
