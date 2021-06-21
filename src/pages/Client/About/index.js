/** @format */
import Lucas from '@/assets/Images/lucas.jpg';

import Typography, { TypographyVariants } from '@/components/Typography';
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Typography className={styles.title} variant={TypographyVariants.H4}>
          About Jam Academy
        </Typography>
        <div className={styles.circles}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.avaWrap}>
            <img className={styles.ava} src={Lucas} alt='lucas' />
            <Typography variant={TypographyVariants.H6}>
              Lucas Johnson
            </Typography>
          </div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.ceo}>
          <Typography variant={TypographyVariants.H5}>Our founder</Typography>
          <Typography
            className={styles.description}
            variant={TypographyVariants.Body1}>
            In the epidemic times, Lucas find out that the demand of E-learning
            was rocketed. Because of that, he decided to create Jam Academy. The
            place that people can find good sources from many experiences tutor
            around the world
          </Typography>
        </div>
        <div className={styles.describe}>
          <Typography variant={TypographyVariants.H5}>
            What is our target
          </Typography>
          <Typography
            className={styles.description}
            variant={TypographyVariants.Body1}>
            We are the organization that was created to serve people that have
            demand to improve or learn new knowledge in the epidemic time by
            selling you good course from our experiences tutor. Which is very
            helpful for you in your career or job that you plan to jump to but
            not have time to learn for that knowledge in the normal time
          </Typography>
        </div>
        <div className={styles.contact}>
          <Typography variant={TypographyVariants.H5}>
            How can you contact us
          </Typography>
          <Typography
            className={styles.description}
            variant={TypographyVariants.Body1}>
            You can contact us through our email or our published phone number
            below. And if you are shy of that, you can communicate with our
            support through the chat on our page
          </Typography>
          <Typography
            className={styles.phone}
            variant={TypographyVariants.Body1}>
            Our phone number: +8412345678
          </Typography>
          <Typography variant={TypographyVariants.Body1}>
            Our email: minhlcgcs18128@f[t.edu.vn
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
