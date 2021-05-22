/** @format */

import Alert from '@/components/Alert';

import { LostConnect } from '@/components/Icons';

const LostConnectionAlert = ({ onClose, ...others }) => (
  <Alert {...others} suffix={<LostConnect />} onClose={onClose}>
    Connection Lost!
  </Alert>
);

export default LostConnectionAlert;
