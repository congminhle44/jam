/** @format */
import MoreDetails from '../Details';

import styles from './main.module.css';

const Main = ({ checkoutItems }) => {
  return (
    <div className={styles.container}>
      <MoreDetails checkoutItems={checkoutItems} />
    </div>
  );
};

export default Main;
