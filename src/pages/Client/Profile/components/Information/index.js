/** @format */
import { useAtom } from 'jotai';
import { useHistory } from 'react-router';

import Alert, { AlertVariants } from '@/components/Alert';
import { Edit } from '@/components/Icons';
import Input from '@/components/Input';
import Typography, { TypographyVariants } from '@/components/Typography';
import { showAlertAtom } from '@/store/alert';

import styles from './information.module.css';
import { addUserInfoAtom } from '@/store/login';

const Information = ({ uploadAvatar, userInfo, refetUserProfile }) => {
  const history = useHistory();

  const [, showAlert] = useAtom(showAlertAtom);
  const [, setNewUserInfo] = useAtom(addUserInfoAtom);

  const handleUploadAvatar = (e) => {
    const { files } = e.target;
    uploadAvatar({ avatar: files[0] })
      .then((result) => {
        refetUserProfile();
        setNewUserInfo(result);
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: 'Avatar uploaded',
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
    <div className={styles.container}>
      <div className={styles.avaWrap}>
        <img className={styles.avatar} src={userInfo?.avatar} alt='avatar' />
        <div className={styles.overlay}>
          <Input onChange={handleUploadAvatar} type='file' />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.detail}>
          <Typography className={styles.name} variant={TypographyVariants.H5}>
            {userInfo?.fullName}
            <div
              onClick={() => history.push('/profile/edit/info')}
              className={styles.edit}>
              <Edit />
            </div>
          </Typography>
          <Typography
            className={styles.description}
            variant={TypographyVariants.Paragraph2}>
            {userInfo?.description ? userInfo?.description : 'No bio yet'}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Information;
