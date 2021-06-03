/** @format */
import { Menu } from '@/components/Icons';

import styles from '../../header.module.css';

const MobileMenu = ({ onOpen }) => {
  const notiAmount = 0;
  return (
    <div onClick={onOpen} className={styles.menu}>
      <Menu />
      {notiAmount > 0 && <div className={styles.navnoti}>{notiAmount}</div>}
    </div>
  );
};

export default MobileMenu;
