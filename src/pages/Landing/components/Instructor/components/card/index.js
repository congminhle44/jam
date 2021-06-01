/** @format */
import Typography, { TypographyVariants } from '@/components/Typography';
import { FormattedMessage } from 'react-intl';

import styles from '../../style.module.css';

const InstructorCard = ({ data }) => {
  const renderTutors = () => {
    return data.map((tutor) => {
      return (
        <div className={styles.card}>
          <img className={styles.avatar} src={tutor.avatar} alt={tutor.name} />
          <div className={styles.information}>
            <Typography
              className={styles.name}
              variant={TypographyVariants.Title2}>
              {tutor.name}
            </Typography>
            <Typography variant={TypographyVariants.Body1}>
              {tutor.major}
            </Typography>
          </div>
          <div className={styles.details}>
            <Typography
              className={styles.name}
              variant={TypographyVariants.Title2}>
              {tutor.name}
            </Typography>
            <Typography
              className={styles.major}
              variant={TypographyVariants.Label1}>
              {tutor.major}
            </Typography>
            <Typography
              className={styles.description}
              variant={TypographyVariants.Body1}>
              <FormattedMessage id={tutor.description} />
            </Typography>
          </div>
        </div>
      );
    });
  };

  return <>{renderTutors()}</>;
};

export default InstructorCard;
