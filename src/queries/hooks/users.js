/** @format */
import { useQuery } from 'react-query';

import useMakeMutation from '@/hooks/useMakeMutation';

import { handleError } from '@/helpers/requests';
import {
  getCartItem,
  login,
  register,
  removeRefreshTokenApi,
} from '../apis/users';

export const useLogin = () => {
  const { mutation } = useMakeMutation(login);
  return mutation;
};

export const useRegister = () => {
  const { mutation } = useMakeMutation(register);
  return mutation;
};

export const useGetCartItem = (token) =>
  useQuery(['cartItem', { token }], getCartItem, {
    onError: handleError,
  });

export const useLogout = () => {
  const { mutation } = useMakeMutation(removeRefreshTokenApi);
  return mutation;
};
