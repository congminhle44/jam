/** @format */

import styles from './video.module.css';

const LessonVideo = ({ lessonSource }) => {
  return (
    <div className={styles.container}>
      <video src={lessonSource} className={styles.video} controls />
    </div>
  );
};

export default LessonVideo;
