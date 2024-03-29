/** @format */

import { lazy } from 'react';
import { Route } from 'react-router';
import ReactGA from 'react-ga';

import config from '@/config';

import ClientLayout from './layout/client';
import { useAtom } from 'jotai';
import { userAtom } from '@/store/login';
import { Redirect } from 'react-router-dom';
import { Fragment } from 'react';

const ClientRoute = ({ component: Component, withProps, ...others }) => {
  const [userInfo] = useAtom(userAtom);

  return (
    <Fragment>
      {userInfo.userType === 'admin' ? (
        <Redirect to='/admin/dashboard' />
      ) : (
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
      )}
    </Fragment>
  );
};

export const clientRoutes = [
  {
    path: config.paths.landing,
    exact: true,
    component: lazy(() => import('@/pages/Client/Landing')),
  },
  {
    path: config.paths.login,
    exact: false,
    component: lazy(() => import('@/pages/Client/Login')),
  },
  {
    path: config.paths.signup,
    exact: false,
    component: lazy(() => import('@/pages/Client/Signup')),
  },
  {
    path: config.paths.categoryDetail,
    exact: false,
    component: lazy(() => import('@/pages/Client/Category')),
  },
  {
    path: config.paths.courseDetail,
    exact: true,
    component: lazy(() => import('@/pages/Client/Course')),
  },
  {
    path: config.paths.cart,
    exact: true,
    component: lazy(() => import('@/pages/Client/Cart')),
  },
  {
    path: config.paths.checkout,
    exact: true,
    component: lazy(() => import('@/pages/Client/Checkout')),
  },
  {
    path: config.paths.momoRedirect,
    exact: false,
    component: lazy(() => import('@/pages/Client/PaymentRedirect')),
  },
  {
    path: config.paths.terms,
    exact: false,
    component: lazy(() => import('@/pages/Client/Terms')),
  },
  {
    path: config.paths.about,
    exact: false,
    component: lazy(() => import('@/pages/Client/About')),
  },
  {
    path: config.paths.oauthRedirect,
    exact: false,
    component: lazy(() => import('@/pages/Client/OauthRedirect')),
  },
  {
    path: config.paths.forgotPassword,
    exact: false,
    component: lazy(() => import('@/pages/Client/ForgotPassword')),
  },
  {
    path: config.paths.resetPassword,
    exact: false,
    component: lazy(() => import('@/pages/Client/ResetPassword')),
  },
];

export default ClientRoute;
