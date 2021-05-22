/** @format */

import { useEffect } from 'react';
import { useAtom } from 'jotai';

import useNetwork from '@/hooks/useNetwork';

import { showAlertAtom } from '@/store/alert';

import { AlertVariants } from '@/components/Alert';
import LostConnectionAlert from './components/LostConnectionAlert';
import ReconnectedAlert from './components/ReconnectedAlert';

const NetWorkProvider = ({ children }) => {
  const network = useNetwork();

  const [, showAlert] = useAtom(showAlertAtom);

  useEffect(() => {
    const renderLostConnectionAlert = () => {
      showAlert({
        component: LostConnectionAlert,
        props: {
          variant: AlertVariants.Error,
        },
      });
    };
    const renderConnectionConnected = () => {
      showAlert({
        component: ReconnectedAlert,
        props: {
          variant: AlertVariants.Success,
        },
      });
    };
    if (!network) renderLostConnectionAlert();
    else renderConnectionConnected();
  }, [network, showAlert]);

  return <>{children}</>;
};

export default NetWorkProvider;
