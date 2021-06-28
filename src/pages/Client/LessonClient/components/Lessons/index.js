/** @format */
import PerfectScrollbar from 'perfect-scrollbar';
import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router';

import { Right } from '@/components/Icons';
import Typography, { TypographyVariants } from '@/components/Typography';
import styles from './lessons.module.css';
import clsx from 'clsx';

const Lessons = ({ updateProcess, courseId, lessonsInfo, lessonId }) => {
  const history = useHistory();
  const lessonsWrap = useRef();

  useEffect(() => {
    const ps = new PerfectScrollbar(lessonsWrap.current);
    ps.update();
  }, [lessonsWrap]);

  const handleSwitchLesson = (info) => {
    history.push(`/course/${courseId}/lesson/${info._id}`);
    return updateProcess({ courseId, lessonId: info._id });
  };

  const handleRenderLessonsInfo = () => {
    if (lessonsInfo) {
      return lessonsInfo.map((info) => {
        return (
          <div
            onClick={() => handleSwitchLesson(info)}
            key={info._id}
            className={clsx(
              styles.lesson,
              lessonId === info._id && styles.active
            )}>
            <Typography
              className={styles.name}
              variant={TypographyVariants.Body1}>
              {info.title}
            </Typography>
            <div className={styles.right}>
              <Right />
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div ref={lessonsWrap} className={styles.container}>
      {handleRenderLessonsInfo()}
    </div>
  );
};

export default Lessons;
