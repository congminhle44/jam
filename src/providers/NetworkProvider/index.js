/** @format */

import { useEffect } from 'react';
import { useAtom } from 'jotai';
import useToggle from '@/hooks/useToggle';

import useNetwork from '@/hooks/useNetwork';

import { showAlertAtom } from '@/store/alert';

import { AlertVariants } from '@/components/Alert';
import LostConnectionAlert from './components/LostConnectionAlert';
import ReconnectedAlert from './components/ReconnectedAlert';

const NetWorkProvider = ({ children }) => {
  const network = useNetwork();

  const canShow = useToggle(false);

  const [, showAlert] = useAtom(showAlertAtom);

  // Prevent network reconnect alert at the begining of app
  useEffect(() => {
    setTimeout(() => {
      canShow.setActive();
    }, 500);
    // eslint-disable-next-line
  }, []);

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
    else if (network && canShow.active) renderConnectionConnected();
    // eslint-disable-next-line
  }, [network, showAlert]);

  return <>{children}</>;
};

export default NetWorkProvider;
