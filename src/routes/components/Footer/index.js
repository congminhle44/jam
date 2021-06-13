/** @format */
import { useState } from 'react';
import { useAtom } from 'jotai';
import { Link } from 'react-router-dom';

import Select from '@/components/Dropdown/Select';
import Option from '@/components/Dropdown/Option';

import { Brand } from '@/components/Icons';

import Typography, { TypographyVariants } from '@/components/Typography';

import styles from './footer.module.css';
import { setLangAtom } from '@/store/lang';
import { FormattedMessage } from 'react-intl';

const Footer = () => {
  const defaultLang = localStorage.getItem('lang');

  const [currValue, setCurValue] = useState(
    defaultLang === 'en' ? 'english' : 'vietnamese' || 'english'
  );
  const [, setLang] = useAtom(setLangAtom);

  const handleChooseOption = (e) => {
    const { value } = e.target;
    setCurValue(value);
    setLang(value.slice(0, 2));
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.brand}>
            <Brand />
          </div>
          <div className={styles.license}>
            <Typography
              className={styles.name}
              variant={TypographyVariants.Title2}>
              Jam Academy
            </Typography>
            <Typography variant={TypographyVariants.Label1}>
              Copyright@2021Jam,Inc
            </Typography>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.lang}>
            <Select currentOption={currValue}>
              <Option onChoose={handleChooseOption} value='english'>
                English
              </Option>
              <Option onChoose={handleChooseOption} value='vietnamese'>
                Vietnamese
              </Option>
            </Select>
          </div>
          <div className={styles.linkList}>
            <Link className={styles.linkItem} to='/terms'>
              <Typography
                className={styles.term}
                variant={TypographyVariants.Label1}>
                <FormattedMessage id='footer.term' />
              </Typography>
            </Link>
            <Link className={styles.linkItem} to='/about'>
              <Typography variant={TypographyVariants.Label1}>
                <FormattedMessage id='footer.contact' />
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
