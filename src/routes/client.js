/** @format */

import loadable from '@loadable/component';
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
    component: loadable(() => import('@/pages/Landing')),
  },
  {
    path: config.paths.login,
    exact: false,
    component: loadable(() => import('@/pages/Login')),
  },
  {
    path: config.paths.signup,
    exact: false,
    component: loadable(() => import('@/pages/Signup')),
  },
  {
    path: config.paths.categoryDetail,
    exact: false,
    component: loadable(() => import('@/pages/Category')),
  },
  {
    path: config.paths.courseDetail,
    exact: false,
    component: loadable(() => import('@/pages/Course')),
  },
];

export default ClientRoute;
