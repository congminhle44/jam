/** @format */

import { useAtom } from 'jotai';
import { lazy } from 'react';
import { Route } from 'react-router';

import { userAtom } from '@/store/login';

import config from '@/config';

import ClientLayout from './layout/client';
import Notfound from '@/pages/Notfound';

const ProtectedClientRoute = ({
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
            <ClientLayout>
              <Component {...childProps} {...withProps} />
            </ClientLayout>
          )}
        />
      ) : (
        <Notfound />
      )}
    </div>
  );
};

export const protectedRoutes = [
  {
    path: config.paths.profile,
    exact: true,
    component: lazy(() => import('@/pages/Profile')),
  },
];

export default ProtectedClientRoute;
