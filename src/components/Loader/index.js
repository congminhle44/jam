/** @format */

import Skeleton from 'react-loading-skeleton';
import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.container}>
      <div>
        <Skeleton className={styles.title} width={300} height={25} />
      </div>
      <Skeleton className={styles.description} width={200} height={20} />
      <div>
        <Skeleton
          className={styles.description}
          width='100%'
          height={20}
          count={3}
        />
      </div>
    </div>
  );
};

export default Loader;
