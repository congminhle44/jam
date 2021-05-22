/** @format */

import { Route, Router } from 'react-router';

import Hello from '@/pages';
import history from './helpers/history';
import NetWorkProvider from './providers/NetworkProvider';
import AlertProvider from './providers/AlertProvider';

function App() {
  return (
    <NetWorkProvider>
      <Router history={history}>
        <Route path='/' exact component={Hello} />
      </Router>
      <AlertProvider />
    </NetWorkProvider>
  );
}

export default App;
