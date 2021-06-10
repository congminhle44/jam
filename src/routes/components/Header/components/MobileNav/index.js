/** @format */
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

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
import CategoriesMobile from '../CategoriesMobile';
import useToggle from '@/hooks/useToggle';

const MobileNav = ({
  isOpen,
  onClose,
  cartItems,
  handleLogout,
  handleTypingKeyword,
  handleBlankKeyword,
}) => {
  const [userInfo] = useAtom(userAtom);
  const [, setLang] = useAtom(setLangAtom);

  const showCategory = useToggle(false);

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
      showCategory.setInActive();
      handleBlankKeyword();
    }
  };

  return (
    <>
      {isOpen && (
        <Overlay onClick={handleOverlayClick}>
          {showCategory.active && (
            <CategoriesMobile hideCategoryMenu={showCategory.setInActive} />
          )}
          <div
            onClick={(e) => e.stopPropagation()}
            className={clsx(
              styles.container,
              showCategory.active && styles.hide
            )}>
            <div className={styles.searchWrap}>
              <div className={styles.search}>
                <Input
                  onChange={handleTypingKeyword}
                  placeholder='Search'
                  search
                />
              </div>
            </div>

            <div className={styles.navlist}>
              {userInfo && (
                <>
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
                  <NavLink to='/cart' className={styles.navitem}>
                    <Typography variant={TypographyVariants.Body1}>
                      <FormattedMessage id='header.basket' />
                    </Typography>
                    <div className={styles.right}>
                      <Typography
                        className={styles.basketAmount}
                        variant={TypographyVariants.Body2}>
                        {cartItems && cartItems.length}
                      </Typography>
                    </div>
                  </NavLink>
                </>
              )}
              <div onClick={showCategory.setActive} className={styles.navitem}>
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
