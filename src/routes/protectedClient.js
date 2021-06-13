/** @format */

import { useAtom } from 'jotai';
import { lazy } from 'react';
import { Redirect, Route } from 'react-router';

import { userAtom } from '@/store/login';

import config from '@/config';

import ClientLayout from './layout/client';

const ProtectedClientRoute = ({
  component: Component,
  withProps,
  ...others
}) => {
  const [userInfo] = useAtom(userAtom);

  return (
    <>
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
        <Redirect to='/' />
      )}
    </>
  );
};

export const protectedRoutes = [
  {
    path: config.paths.cart,
    exact: true,
    component: lazy(() => import('@/pages/Cart')),
  },
  {
    path: config.paths.checkout,
    exact: true,
    component: lazy(() => import('@/pages/Checkout')),
  },
];

export default ProtectedClientRoute;
