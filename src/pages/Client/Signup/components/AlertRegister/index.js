/** @format */

import Alert from '@/components/Alert';

const AlertRegister = ({ children, onClose, ...others }) => (
  <Alert {...others} onClose={onClose}>
    {children}
  </Alert>
);

export default AlertRegister;
