/** @format */

import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import ClientRoute, { clientRoutes } from '@/routes/client';
import ProtectedClientRoute, { protectedRoutes } from './protectedClient';

import Spinner from '@/components/Spinner';
import Notfound from '@/pages/Notfound';
import ProtectedClientLesson, { clientLessonRoutes } from './lesson';
import TutorRoute, { tutorRoutes } from './tutor';

const Routes = () => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      {clientRoutes.map((route, index) => (
        <ClientRoute key={index} {...route} />
      ))}
      {protectedRoutes.map((route, index) => (
        <ProtectedClientRoute key={index} {...route} />
      ))}
      {clientLessonRoutes.map((route, index) => (
        <ProtectedClientLesson key={index} {...route} />
      ))}
      {tutorRoutes.map((route, index) => (
        <TutorRoute key={index} {...route} />
      ))}
      <Route component={Notfound} />
    </Switch>
  </Suspense>
);

export default Routes;
