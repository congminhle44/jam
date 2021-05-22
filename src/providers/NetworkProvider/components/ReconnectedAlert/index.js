/** @format */

import Alert from '@/components/Alert';

import { ConnectSuccess } from '@/components/Icons';

const ReconnectedAlert = ({ onClose, ...others }) => (
  <Alert {...others} suffix={<ConnectSuccess />} onClose={onClose}>
    Network reconnected!
  </Alert>
);

export default ReconnectedAlert;
