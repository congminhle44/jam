/** @format */

import Alert from '@/components/Alert';

const AlertStatus = ({ children, onClose, ...others }) => (
  <Alert {...others} onClose={onClose}>
    {children}
  </Alert>
);

export default AlertStatus;
