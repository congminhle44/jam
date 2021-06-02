/** @format */
import { Router } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query';

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

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
