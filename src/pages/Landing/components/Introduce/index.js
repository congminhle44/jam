/** @format */
import Topping from '@/assets/Images/topping.png';
import Jenny from '@/assets/Images/jenny.jpg';
import Josh from '@/assets/Images/josh.jpg';
import James from '@/assets/Images/james.jpg';

import Typography, { TypographyVariants } from '@/components/Typography';
import styles from './style.module.css';

const Introduce = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img className={styles.background} src={Topping} alt='Topping' />
        <Typography variant={TypographyVariants.Title3}>
          What are our leaners talk about us ?
        </Typography>
        <div className={styles.conversations}>
          <div className={styles.conversation}>
            <img className={styles.ava} src={Jenny} alt='Jenny' />
            <div className={styles.content}>
              <Typography
                className={styles.name}
                variant={TypographyVariants.Body2}>
                Jenny
              </Typography>
              <div className={styles.speech}>
                <Typography
                  className={styles.mainspeech}
                  variant={TypographyVariants.Label1}>
                  This program is very good for those who is losing their basic
                  to get back their knowledge
                </Typography>
              </div>
            </div>
          </div>
          <div className={styles.conversation}>
            <img className={styles.ava} src={Josh} alt='Josh' />
            <div className={styles.content}>
              <Typography
                className={styles.name}
                variant={TypographyVariants.Body2}>
                Josh
              </Typography>
              <div className={styles.speech}>
                <Typography
                  className={styles.mainspeech}
                  variant={TypographyVariants.Label1}>
                  This program is very good for those who is losing their basic
                  to get back their knowledge
                </Typography>
              </div>
            </div>
          </div>
          <div className={styles.conversation}>
            <img className={styles.ava} src={James} alt='James' />
            <div className={styles.content}>
              <Typography
                className={styles.name}
                variant={TypographyVariants.Body2}>
                James
              </Typography>
              <div className={styles.speech}>
                <Typography
                  className={styles.mainspeech}
                  variant={TypographyVariants.Label1}>
                  This program is very good for those who is losing their basic
                  to get back their knowledge
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
