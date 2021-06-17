/** @format */

import { lazy } from 'react';
import { Route } from 'react-router';

import config from '@/config';

import ClientLayout from './layout/client';

const ClientRoute = ({ component: Component, withProps, ...others }) => {
  return (
    <Route
      {...others}
      render={(childProps) => (
        <ClientLayout>
          <Component {...childProps} {...withProps} />
        </ClientLayout>
      )}
    />
  );
};

export const clientRoutes = [
  {
    path: config.paths.landing,
    exact: true,
    component: lazy(() => import('@/pages/Landing')),
  },
  {
    path: config.paths.login,
    exact: false,
    component: lazy(() => import('@/pages/Login')),
  },
  {
    path: config.paths.signup,
    exact: false,
    component: lazy(() => import('@/pages/Signup')),
  },
  {
    path: config.paths.categoryDetail,
    exact: false,
    component: lazy(() => import('@/pages/Category')),
  },
  {
    path: config.paths.courseDetail,
    exact: true,
    component: lazy(() => import('@/pages/Course')),
  },
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
  {
    path: config.paths.momoRedirect,
    exact: false,
    component: lazy(() => import('@/pages/PaymentRedirect')),
  },
];

export default ClientRoute;
