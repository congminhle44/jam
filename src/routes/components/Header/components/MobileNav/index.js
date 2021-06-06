/** @format */
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { disableScroll, enableScroll } from '@/helpers/behaviours';

import { Right, Us, Vietnam } from '@/components/Icons';
import Input from '@/components/Input';
import Overlay from '@/components/Overlay';
import Typography, { TypographyVariants } from '@/components/Typography';

import styles from './style.module.css';
import { FormattedMessage } from 'react-intl';
import { useAtom } from 'jotai';
import { setLangAtom } from '@/store/lang';
import { userAtom } from '@/store/login';

const MobileNav = ({ isOpen, onClose, handleLogout }) => {
  const [userInfo] = useAtom(userAtom);

  const [, setLang] = useAtom(setLangAtom);

  useEffect(() => {
    if (isOpen) disableScroll();
    else enableScroll();
    return () => {
      enableScroll();
    };
  }, [isOpen]);

  const handleOverlayClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <Overlay onClick={handleOverlayClick}>
          <div className={styles.container}>
            <div className={styles.search}>
              <Input placeholder='Search' search />
            </div>
            <div className={styles.navlist}>
              {userInfo && (
                <NavLink to='/profile' className={styles.navitem}>
                  <div className={styles.info}>
                    <img
                      className={styles.avatar}
                      src={userInfo.avatar}
                      alt={userInfo.fullName}
                    />
                    <Typography variant={TypographyVariants.Body1}>
                      {userInfo.fullName}
                    </Typography>
                  </div>
                  <div className={styles.right}>
                    <Right />
                  </div>
                </NavLink>
              )}
              <div className={styles.navitem}>
                <Typography variant={TypographyVariants.Body1}>
                  <FormattedMessage id='header.categories' />
                </Typography>
                <div className={styles.right}>
                  <Right />
                </div>
              </div>
              <NavLink to='/about' className={styles.navitem}>
                <Typography variant={TypographyVariants.Body1}>
                  <FormattedMessage id='header.about' />
                </Typography>
                <div className={styles.right}>
                  <Right />
                </div>
              </NavLink>
              {userInfo ? (
                <div onClick={handleLogout} className={styles.navitem}>
                  <Typography variant={TypographyVariants.Body1}>
                    <FormattedMessage id='common.logout' />
                  </Typography>
                  <div className={styles.right}>
                    <Right />
                  </div>
                </div>
              ) : (
                <NavLink to='/login' className={styles.navitem}>
                  <Typography variant={TypographyVariants.Body1}>
                    <FormattedMessage id='header.signin' />
                  </Typography>
                  <div className={styles.right}>
                    <Right />
                  </div>
                </NavLink>
              )}
            </div>
            <div className={styles.lang}>
              <Typography variant={TypographyVariants.Label1}>
                <FormattedMessage id='common.languages' />
              </Typography>
              <div className={styles.langList}>
                <div onClick={() => setLang('en')} className={styles.langItem}>
                  <Us />
                </div>
                <div onClick={() => setLang('vi')} className={styles.langItem}>
                  <Vietnam />
                </div>
              </div>
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
};

export default MobileNav;
