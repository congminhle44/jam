/** @format */

import Alert from '@/components/Alert';

const AlertLogin = ({ children, onClose, ...others }) => (
  <Alert {...others} onClose={onClose}>
    {children}
  </Alert>
);

export default AlertLogin;
