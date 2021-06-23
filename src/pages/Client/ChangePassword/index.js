/** @format */

import Alert, { AlertVariants } from '@/components/Alert';
import Typography, { TypographyVariants } from '@/components/Typography';
import { usePassword } from '@/queries/hooks/users';
import { showAlertAtom } from '@/store/alert';
import { useAtom } from 'jotai';
import ProfileEdit from '../ProfileEdit';
import Form from './components/Form';
import styles from './password.module.css';

const ChangePassword = () => {
  const [, showAlert] = useAtom(showAlertAtom);

  const { mutateAsync: changePassword } = usePassword();

  const handleChangePassword = (data) => {
    return changePassword(data)
      .then(() => {
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: 'New password saved!',
          },
        });
      })
      .catch((err) => {
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Error,
            children: err.response && err.response.data.message,
          },
        });
      });
  };

  return (
    <ProfileEdit>
      <div className={styles.container}>
        <Typography className={styles.title} variant={TypographyVariants.H6}>
          Change your password
        </Typography>
        <Form handleChangePassword={handleChangePassword} />
        <div className={styles.notes}>
          <Typography
            className={styles.noteTitle}
            variant={TypographyVariants.Body2}>
            Note:
          </Typography>
          <ul>
            <li className={styles.noteItem}>
              Password must have at least 6 characters
            </li>
            <li className={styles.noteItem}>
              Use a mix of upper and lower case characters
            </li>
            <li className={styles.noteItem}>Have at least 1 number</li>
          </ul>
        </div>
      </div>
    </ProfileEdit>
  );
};

export default ChangePassword;
