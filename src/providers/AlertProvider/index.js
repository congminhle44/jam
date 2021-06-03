/** @format */

import { useAtom } from 'jotai';
import { closeAlertAtom, derivedAlertAtom } from '@/store/alert';

import Portal from '@/components/Portal';

const AlertProvider = () => {
  const [stack] = useAtom(derivedAlertAtom);
  const [, closeAlert] = useAtom(closeAlertAtom);

  return (
    <Portal
      mount={true}
      aria-label='AlertProvider'
      aria-labelledby='alert-provider'
      aria-modal={true}
      portalDataName={'alert-provider-gate'}>
      {stack.map((alert) => (
        <alert.component
          key={`ALERT_${alert.id}`}
          {...alert.props}
          onClose={() => closeAlert(alert.id)}
          isOpen={alert.isOpen}
        />
      ))}
    </Portal>
  );
};

export default AlertProvider;
