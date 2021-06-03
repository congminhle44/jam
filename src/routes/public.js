/** @format */

import config from '@/config';
import { lazy } from 'react';
import { Route } from 'react-router';
import Footer from './components/Footer';

import Header from './components/Header';

const LandingLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

const PublicRoute = ({ component: Component, withProps, ...others }) => {
  return (
    <Route
      {...others}
      render={(childProps) => (
        <LandingLayout>
          <Component {...childProps} {...withProps} />
        </LandingLayout>
      )}
    />
  );
};

export const publicRoutes = [
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
];

export default PublicRoute;
