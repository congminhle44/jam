/** @format */

import { Suspense } from 'react';
import { Switch } from 'react-router-dom';

import PublicRoute, { publicRoutes } from '@/routes/public';

import Spinner from '@/components/Spinner';
// import NotFound from '@/screens/NotFound';

const Routes = () => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      {publicRoutes.map((route, index) => (
        <PublicRoute key={index} {...route} />
      ))}
      {/*<Route component={NotFound} />*/}
    </Switch>
  </Suspense>
);

export default Routes;
