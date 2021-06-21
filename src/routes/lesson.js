/** @format */

import { useAtom } from 'jotai';
import { lazy } from 'react';
import { Route } from 'react-router';

import { userAtom } from '@/store/login';

import config from '@/config';

import Notfound from '@/pages/Client/Notfound';
import ClientLessonLayout from './layout/lesson';

const ProtectedClientLesson = ({
  component: Component,
  withProps,
  ...others
}) => {
  const [userInfo] = useAtom(userAtom);

  return (
    <div>
      {userInfo ? (
        <Route
          {...others}
          render={(childProps) => (
            <ClientLessonLayout>
              <Component {...childProps} {...withProps} />
            </ClientLessonLayout>
          )}
        />
      ) : (
        <Notfound />
      )}
    </div>
  );
};

export const clientLessonRoutes = [
  {
    path: config.paths.studentLessons,
    exact: true,
    component: lazy(() => import('@/pages/Client/LessonClient')),
  },
];

export default ProtectedClientLesson;
