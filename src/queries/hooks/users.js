/** @format */
import { useQuery } from 'react-query';

import useMakeMutation from '@/hooks/useMakeMutation';

import { handleError } from '@/helpers/requests';
import { getCartItem, login, register } from '../apis/users';

export const useLogin = () => {
  const { mutation } = useMakeMutation(login);
  return mutation;
};

export const useRegister = () => {
  const { mutation } = useMakeMutation(register);
  return mutation;
};

export const useGetCartItem = () =>
  useQuery(['cartItem'], getCartItem, {
    onError: handleError,
  });
