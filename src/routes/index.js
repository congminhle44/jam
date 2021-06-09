/** @format */

import { Suspense } from 'react';
import { Switch } from 'react-router-dom';

import ClientRoute, { clientRoutes } from '@/routes/client';

import Spinner from '@/components/Spinner';
// import NotFound from '@/pages/NotFound';

const Routes = () => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      {clientRoutes.map((route, index) => (
        <ClientRoute key={index} {...route} />
      ))}
      {/*<Route component={NotFound} />*/}
    </Switch>
  </Suspense>
);

export default Routes;
