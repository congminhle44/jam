/** @format */

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Typography, { TypographyVariants } from '@/components/Typography';
import styles from './detail.module.css';

const LibItemDetail = ({ processData, handleRedirectUser, course }) => {
  return (
    <>
      {processData && (
        <div className={styles.container}>
          <Typography
            className={styles.name}
            variant={TypographyVariants.Body1}>
            {Object.keys(processData).length > 0
              ? processData.lesson.title
              : "You've learnt nothing yet"}
          </Typography>
          <div className={styles.button}>
            <Button
              onClick={() =>
                handleRedirectUser(
                  course._id,
                  Object.keys(processData).length > 0
                    ? processData.lesson._id
                    : course.lesson
                )
              }
              variant={ButtonVariants.Outline}
              size={ButtonSizes.Small}>
              {Object.keys(processData).length > 0 ? 'Resume' : 'Start'}{' '}
              learning
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default LibItemDetail;
