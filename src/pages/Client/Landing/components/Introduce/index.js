/** @format */
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Jenny from '@/assets/Images/jenny.jpg';
import Josh from '@/assets/Images/josh.jpg';
import James from '@/assets/Images/james.jpg';

import styles from './style.module.css';
import Typography, { TypographyVariants } from '@/components/Typography';
import { Quote } from '@/components/Icons';
import { introduceSettings } from './introduceSettings';

const Introduce = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.quote}>
          <Quote />
        </div>
        <Slider {...introduceSettings}>
          <div className={styles.card}>
            <div className={styles.avaWrap}>
              <LazyLoadImage
                effect='blur'
                className={styles.ava}
                src={Jenny}
                alt='Jenny'
              />
            </div>
            <div className={styles.information}>
              <Typography
                className={styles.name}
                variant={TypographyVariants.Title2}>
                Jenny Anthony
              </Typography>
              <Typography variant={TypographyVariants.Body1}>
                Visual Designer
              </Typography>
            </div>
            <div className={styles.speech}>
              <Typography variant={TypographyVariants.Body1}>
                This program is very good for those who is losing their basic to
                get back their knowledge
              </Typography>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.avaWrap}>
              <LazyLoadImage
                effect='blur'
                className={styles.ava}
                src={Josh}
                alt='Josh'
              />
            </div>
            <div className={styles.information}>
              <Typography
                className={styles.name}
                variant={TypographyVariants.Title2}>
                Jenny Thompson
              </Typography>
              <Typography variant={TypographyVariants.Body1}>
                Computer Science
              </Typography>
            </div>
            <div className={styles.speech}>
              <Typography variant={TypographyVariants.Body1}>
                This program is very good for those who is losing their basic to
                get back their knowledge
              </Typography>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.avaWrap}>
              <LazyLoadImage
                effect='blur'
                className={styles.ava}
                src={James}
                alt='James'
              />
            </div>
            <div className={styles.information}>
              <Typography
                className={styles.name}
                variant={TypographyVariants.Title2}>
                James Johnson
              </Typography>
              <Typography variant={TypographyVariants.Body1}>
                Business Analysis
              </Typography>
            </div>
            <div className={styles.speech}>
              <Typography variant={TypographyVariants.Body1}>
                This program is very good for those who is losing their basic to
                get back their knowledge
              </Typography>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Introduce;
