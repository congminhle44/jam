/** @format */

import { useAtom } from 'jotai';
import { lazy } from 'react';
import { Route } from 'react-router';

import { userAtom } from '@/store/login';

import config from '@/config';

import Notfound from '@/pages/Notfound';
import AdminLayout from './layout/admin';

const AdminRoute = ({ component: Component, withProps, ...others }) => {
  const [userInfo] = useAtom(userAtom);

  return (
    <div>
      {userInfo && userInfo.userType === 'admin' ? (
        <Route
          {...others}
          render={(childProps) => (
            <AdminLayout>
              <Component {...childProps} {...withProps} />
            </AdminLayout>
          )}
        />
      ) : (
        <Notfound />
      )}
    </div>
  );
};

export const adminRoutes = [
  {
    path: config.paths.adminDashboard,
    exact: true,
    component: lazy(() => import('@/pages/Admin/Dashboard')),
  },
  {
    path: config.paths.adminUser,
    exact: true,
    component: lazy(() => import('@/pages/Admin/Users')),
  },
  {
    path: config.paths.adminCategory,
    exact: true,
    component: lazy(() => import('@/pages/Admin/Categories')),
  },
];

export default AdminRoute;
