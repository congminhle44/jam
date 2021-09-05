/** @format */

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Typography, { TypographyVariants } from '@/components/Typography';
import config from '@/config';
import { userAtom } from '@/store/login';
import { useAtom } from 'jotai';
import { FormattedMessage } from 'react-intl';
import styles from './detail.module.css';

const LibItemDetail = ({ processData, handleRedirectUser, course }) => {
  const [userInfo] = useAtom(userAtom);

  const handleDownloadLessons = () => {
    window.open(
      `${config.app.apiHost}${config.apis.downloadLessons.url(
        course._id,
        userInfo._id
      )}`
    );
  };

  return (
    <>
      {processData && (
        <div className={styles.container}>
          <Typography
            className={styles.name}
            variant={TypographyVariants.Body1}>
            {Object.keys(processData).length > 0 ? (
              processData.lesson.title
            ) : (
              <FormattedMessage id='profile.course.notlearn' />
            )}
          </Typography>
          <div className={styles.button}>
            <Button
              data-toggle='tooltip'
              className={styles.learn}
              title={!course.canLearn && 'No lesson found in this course'}
              disabled={course && !course.canLearn}
              onClick={() =>
                handleRedirectUser(
                  course._id,
                  Object.keys(processData).length > 0
                    ? processData.lesson._id
                    : course.lesson
                )
              }
              variant={ButtonVariants.Solid}
              size={ButtonSizes.Small}>
              {Object.keys(processData).length > 0 ? (
                <FormattedMessage id='profile.course.resume' />
              ) : (
                <FormattedMessage id='profile.course.start' />
              )}{' '}
              <FormattedMessage id='profile.course.learn' />
            </Button>
            <Button
              onClick={handleDownloadLessons}
              disabled={course && !course.canLearn}
              className={styles.download}
              data-toggle='tooltip'
              title='Learn offline to avoid the lost connection between your learning process'
              variant={ButtonVariants.Outline}
              size={ButtonSizes.Small}>
              Download
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default LibItemDetail;
