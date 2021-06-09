/** @format */

import styles from './comments.module.css';

import Typography, { TypographyVariants } from '@/components/Typography';
import RateStar from '@/components/Rating';

const Comments = ({ comments }) => {
  const renderComments = () => {
    if (comments) {
      return comments.map((comment) => {
        return (
          <div key={comment._id} className={styles.item}>
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
                <RateStar value={comment.rate} />
                <Typography
                  className={styles.time}
                  variant={TypographyVariants.Label1}>
                  3 months ago
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

  return <div className={styles.container}>{renderComments()}</div>;
};

export default Comments;
