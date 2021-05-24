/** @format */

import { lazy } from 'react';
import { Route } from 'react-router';

import Header from './components/Header';

const LandingLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

const PublicRoute = ({ component: Component, props, ...others }) => {
  return (
    <Route
      {...others}
      render={(props) => (
        <LandingLayout>
          <Component {...props} />
        </LandingLayout>
      )}
    />
  );
};

export const publicRoutes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('@/pages/Landing')),
  },
];

export default PublicRoute;
