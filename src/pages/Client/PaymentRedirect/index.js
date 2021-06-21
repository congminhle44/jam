/** @format */

import Spinner from '@/components/Spinner';
import { useMomo } from '@/queries/hooks/courses';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';

const PaymentRedirect = () => {
  const history = useHistory();
  const search = useLocation().search;

  const { mutateAsync: momoCheckout } = useMomo();

  const errorCode = new URLSearchParams(search).get('errorCode');
  const courseIds = new URLSearchParams(search).get('extraData');

  useEffect(() => {
    return momoCheckout({ courseIds, errorCode })
      .then(() => history.push('/payment/success'))
      .catch(() => history.push('/payment/failed'));
    // eslint-disable-next-line
  }, []);

  return <Spinner />;
};

export default PaymentRedirect;
