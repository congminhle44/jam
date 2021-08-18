/** @format */
import { useEffect, useRef } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

import Typography, { TypographyVariants } from '@/components/Typography';
import RateStar from '@/components/Rating';

import styles from './comments.module.css';

const Comments = ({ comments }) => {
  const wrapperRef = useRef();
  const itemRef = useRef();

  useEffect(() => {
    const ps = new PerfectScrollbar(wrapperRef.current);
    ps.update();
  }, [wrapperRef]);

  useEffect(() => {
    if (itemRef.current && comments) {
      wrapperRef.current.scrollTop =
        itemRef.current.getBoundingClientRect().height * comments.length;
    }
  }, [comments]);

  const renderComments = () => {
    if (comments) {
      return comments.map((comment) => {
        const yy = new Date(comment.createdAt).getFullYear();
        const mm = new Date(comment.createdAt).getMonth() + 1;
        const dd = new Date(comment.createdAt).getDate();
        return (
          <div ref={itemRef} key={comment._id} className={styles.item}>
            <img
              className={styles.avatar}
              src={comment.author.avatar}
              alt={comment.author.fullName}
            />
            <div className={styles.content}>
              <Typography
                className={styles.name}
                variant={TypographyVariants.Body1}>
                {comment.author.fullName}
              </Typography>
              <div className={styles.status}>
                <RateStar readOnly value={comment.rate} />
                <Typography
                  className={styles.time}
                  variant={TypographyVariants.Label1}>
                  {`${dd} / ${mm} / ${yy}`}
                </Typography>
              </div>
              <Typography className={styles.comment}>
                {comment.content}
              </Typography>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div ref={wrapperRef} className={styles.container}>
      {renderComments()}
    </div>
  );
};

export default Comments;
