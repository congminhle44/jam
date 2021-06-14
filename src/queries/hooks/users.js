/** @format */
import { useQuery } from 'react-query';

import useMakeMutation from '@/hooks/useMakeMutation';

import { handleError } from '@/helpers/requests';
import {
  getCartItem,
  getUserInfo,
  getUserLibrary,
  login,
  register,
  removeRefreshTokenApi,
  uploadAvatar,
} from '../apis/users';

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

export const useLogout = () => {
  const { mutation } = useMakeMutation(removeRefreshTokenApi);
  return mutation;
};

export const useAvatar = () => {
  const { mutation } = useMakeMutation(uploadAvatar);
  return mutation;
};

export const useProfile = () =>
  useQuery(['profile'], getUserInfo, {
    onError: handleError,
  });

export const useLibrary = () =>
  useQuery(['library'], getUserLibrary, {
    onError: handleError,
  });
