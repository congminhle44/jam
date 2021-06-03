/** @format */

import useLoading from '@/hooks/useLoading';

import Spinner from '@/components/Spinner';

const LoadingProvider = ({ children }) => {
  const { loading } = useLoading();

  return (
    <>
      {loading && <Spinner />}
      {children}
    </>
  );
};

export default LoadingProvider;
