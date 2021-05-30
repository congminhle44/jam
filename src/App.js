/** @format */
import { Router } from 'react-router';

import NetWorkProvider from './providers/NetworkProvider';
import AlertProvider from './providers/AlertProvider';
import ModalProvider from './providers/ModalProvider';
import LoadingProvider from './providers/LoadingProvider';

import history from './helpers/history';
import { translationMessages } from './helpers/i18n';

import Routes from './routes';
import LanguageProvider from './providers/LanguageProvider';
import { useAtom } from 'jotai';
import { langAtom } from '@/store/lang';

function App() {
  const [language] = useAtom(langAtom);

  return (
    <LanguageProvider locale={language} messages={translationMessages}>
      <LoadingProvider>
        <NetWorkProvider>
          <Router history={history}>
            <Routes />
          </Router>
          <AlertProvider />
          <ModalProvider />
        </NetWorkProvider>
      </LoadingProvider>
    </LanguageProvider>
  );
}

export default App;
