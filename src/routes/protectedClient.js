/** @format */

import { useAtom } from 'jotai';
import { lazy } from 'react';
import { Route } from 'react-router';
import ReactGA from 'react-ga';

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
          render={(childProps) => {
            ReactGA.pageview(childProps.location.pathname);
            return (
              <ClientLayout>
                <Component {...childProps} {...withProps} />
              </ClientLayout>
            );
          }}
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
    component: lazy(() => import('@/pages/Client/Profile')),
  },
  {
    path: config.paths.successCheckout,
    exact: false,
    component: lazy(() => import('@/pages/Client/CheckoutSuccess')),
  },
  {
    path: config.paths.errorCheckout,
    exact: false,
    component: lazy(() => import('@/pages/Client/CheckoutError')),
  },
  {
    path: config.paths.wishlist,
    exact: false,
    component: lazy(() => import('@/pages/Client/Wishlist')),
  },
  {
    path: config.paths.profileEdit,
    exact: true,
    component: lazy(() => import('@/pages/Client/UpdateInfo')),
  },
  {
    path: config.paths.changePassword,
    exact: true,
    component: lazy(() => import('@/pages/Client/ChangePassword')),
  },
];

export default ProtectedClientRoute;
