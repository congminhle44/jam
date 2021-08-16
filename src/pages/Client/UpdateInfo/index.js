/** @format */

import Alert, { AlertVariants } from '@/components/Alert';
import Typography, { TypographyVariants } from '@/components/Typography';
import { useProfile, useUpdateProfile } from '@/queries/hooks/users';
import { showAlertAtom } from '@/store/alert';
import { useAtom } from 'jotai';
import ProfileEdit from '../ProfileEdit';
import Form from './components/Form';
import styles from './info.module.css';

const UpdateInfo = () => {
  const { data: userInfo } = useProfile();
  const { mutateAsync: updateUser } = useUpdateProfile();

  const [, showAlert] = useAtom(showAlertAtom);

  const handleUpdateUser = (data) => {
    return updateUser(data)
      .then(() => {
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: 'New information saved!',
          },
        });
      })
      .catch((err) =>
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Error,
            children: err.response && err.response.data.message,
          },
        })
      );
  };

  return (
    <ProfileEdit>
      <div className={styles.container}>
        <Typography className={styles.title} variant={TypographyVariants.H6}>
          Basic Information
        </Typography>
        <Form userInfo={userInfo} updateUser={handleUpdateUser} />
      </div>
    </ProfileEdit>
  );
};

export default UpdateInfo;
