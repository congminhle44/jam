/** @format */

import Spinner from '@/components/Spinner';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';

const PaymentRedirect = () => {
  const history = useHistory();
  const search = useLocation().search;
  const errorCode = new URLSearchParams(search).get('errorCode');
  const courseIds = new URLSearchParams(search).get('extraData');

  useEffect(() => {
    if (errorCode === '0') history.push('/payment/success');
    else history.push('/payment/failed');
    // eslint-disable-next-line
  }, []);

  return <Spinner />;
};

export default PaymentRedirect;
