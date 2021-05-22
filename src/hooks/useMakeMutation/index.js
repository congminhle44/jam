/** @format */

import { useMutation } from 'react-query';

import { handleError } from '@/helpers/requests';

import useLoading from '@/hooks/useLoading';

const useMakeMutation = (mutationFn) => {
  const { setLoading } = useLoading();

  const mutation = useMutation(mutationFn, {
    onMutate: () => {
      setLoading(true);
    },
    onSettled: () => {
      setLoading(false);
    },
    onError: handleError,
  });

  return {
    mutation,
  };
};

export default useMakeMutation;
