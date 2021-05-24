/** @format */
import { Router } from 'react-router';

import NetWorkProvider from './providers/NetworkProvider';
import AlertProvider from './providers/AlertProvider';
import ModalProvider from './providers/ModalProvider';
import LoadingProvider from './providers/LoadingProvider';

import history from './helpers/history';

import Routes from './routes';

function App() {
  return (
    <LoadingProvider>
      <NetWorkProvider>
        <Router history={history}>
          <Routes />
        </Router>
        <AlertProvider />
        <ModalProvider />
      </NetWorkProvider>
    </LoadingProvider>
  );
}

export default App;
