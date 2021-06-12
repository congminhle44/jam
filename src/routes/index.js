/** @format */

import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import ClientRoute, { clientRoutes } from '@/routes/client';

import Spinner from '@/components/Spinner';
import Notfound from '@/pages/Notfound';

const Routes = () => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      {clientRoutes.map((route, index) => (
        <ClientRoute key={index} {...route} />
      ))}
      <Route component={Notfound} />
    </Switch>
  </Suspense>
);

export default Routes;
