/** @format */

import { useAtom } from 'jotai';
import { lazy } from 'react';
import { Route } from 'react-router';

import { userAtom } from '@/store/login';

import config from '@/config';

import Notfound from '@/pages/Client/Notfound';
import TutorLayout from './layout/tutor';

const TutorRoute = ({ component: Component, withProps, ...others }) => {
  const [userInfo] = useAtom(userAtom);

  return (
    <div>
      {userInfo && userInfo.userType === 'tutor' ? (
        <Route
          {...others}
          render={(childProps) => (
            <TutorLayout>
              <Component {...childProps} {...withProps} />
            </TutorLayout>
          )}
        />
      ) : (
        <Notfound />
      )}
    </div>
  );
};

export const tutorRoutes = [
  {
    path: config.paths.tutorDashboard,
    exact: true,
    component: lazy(() => import('@/pages/Tutor/Dashboard')),
  },
  {
    path: config.paths.tutorLesson,
    exact: true,
    component: lazy(() => import('@/pages/Tutor/Lessons')),
  },
];

export default TutorRoute;
