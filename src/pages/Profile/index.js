/** @format */
import Background from '@/assets/Images/instructor-background.png';
import UserCover from '@/assets/Images/user-banner.png';
import { useAvatar, useLibrary, useProfile } from '@/queries/hooks/users';
import Information from './components/Information';
import Library from './components/Library';

import styles from './profile.module.css';

const Profile = () => {
  const { data: userInfo, refetch: refetUserProfile } = useProfile();
  const { data: userLibrary } = useLibrary();

  const { mutateAsync: uploadAvatar } = useAvatar();

  return (
    <div className={styles.container}>
      <img className={styles.cover} src={UserCover} alt='User cover' />
      <img className={styles.background} src={Background} alt='background' />
      <div className={styles.wrapper}>
        <Information
          uploadAvatar={uploadAvatar}
          userInfo={userInfo}
          refetUserProfile={refetUserProfile}
        />
        <Library userLibrary={userLibrary} />
      </div>
    </div>
  );
};

export default Profile;
