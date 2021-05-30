/** @format */
import { useEffect, useRef } from 'react';
import { FormattedMessage } from 'react-intl';

import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import Typography, { TypographyVariants } from '@/components/Typography';
import Background from '@/assets/Images/banner.jpg';
import styles from './banner.module.css';

const Banner = () => {
  const imgref = useRef();

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = (e) => {
    let scrollPos = window.pageYOffset;
    if (imgref.current && !imgref.current.contains(e.target)) {
      imgref.current.style.transform = `translateY(-${scrollPos * 0.3}px)`;
    }
  };

  return (
    <div className={styles.container}>
      <img ref={imgref} className={styles.img} src={Background} alt='Banner' />
      <div className={styles.content}>
        <Typography className={styles.title} variant={TypographyVariants.H6}>
          <FormattedMessage id='banner.title' />
        </Typography>
        <Typography
          className={styles.describe}
          variant={TypographyVariants.Label1}>
          <FormattedMessage id='banner.description' />
        </Typography>
        <Button
          className={styles.button}
          variant={ButtonVariants.Solid}
          size={ButtonSizes.Small}>
          <FormattedMessage id='banner.button' />
        </Button>
      </div>
    </div>
  );
};

export default Banner;
