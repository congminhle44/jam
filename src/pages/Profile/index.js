/** @format */
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import Background from '@/assets/Images/instructor-background.png';
import UserCover from '@/assets/Images/user-banner.png';
import {
  useAvatar,
  useLearningProcess,
  useLibrary,
  useProfile,
} from '@/queries/hooks/users';
import Information from './components/Information';
import Library from './components/Library';

import styles from './profile.module.css';

const Profile = () => {
  const history = useHistory();
  const [course, setCourse] = useState('');

  const { data: userInfo, refetch: refetUserProfile } = useProfile();
  const { data: userLibrary } = useLibrary();
  const { mutateAsync: uploadAvatar } = useAvatar();
  const { data: processData } = useLearningProcess(course);

  useEffect(() => {
    if (userLibrary) setCourse(userLibrary[0]._id);
  }, [userLibrary]);

  const handleSetCourseId = (id) => {
    setCourse(id);
  };

  const handleRedirectUser = (courseId, lessonId) => {
    history.push(`/course/${courseId}/lesson/${lessonId}`);
  };

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
        <Library
          handleRedirectUser={handleRedirectUser}
          processData={processData}
          courseId={course}
          handleSetCourseId={handleSetCourseId}
          userLibrary={userLibrary}
        />
      </div>
    </div>
  );
};

export default Profile;
