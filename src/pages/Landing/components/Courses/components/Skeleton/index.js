/** @format */

import Skeleton from 'react-loading-skeleton';

import styles from './skeleton.module.css';

const SkeletonLoad = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Skeleton width={157} height={160} />
        <div className={styles.content}>
          <Skeleton width={90} height={22} />
          <div className={styles.author}>
            <Skeleton width={77} height={16} />
          </div>
          <Skeleton width={20} height={16} />
        </div>
      </div>
      <div className={styles.item}>
        <Skeleton width={157} height={160} />
        <div className={styles.content}>
          <Skeleton width={90} height={22} />
          <div className={styles.author}>
            <Skeleton width={77} height={16} />
          </div>
          <Skeleton width={20} height={16} />
        </div>
      </div>
      <div className={styles.item}>
        <Skeleton width={157} height={160} />
        <div className={styles.content}>
          <Skeleton width={90} height={22} />
          <div className={styles.author}>
            <Skeleton width={77} height={16} />
          </div>
          <Skeleton width={20} height={16} />
        </div>
      </div>
      <div className={styles.item}>
        <Skeleton width={157} height={160} />
        <div className={styles.content}>
          <Skeleton width={90} height={22} />
          <div className={styles.author}>
            <Skeleton width={77} height={16} />
          </div>
          <Skeleton width={20} height={16} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoad;
