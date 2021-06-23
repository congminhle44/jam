/** @format */
import { useQuery } from 'react-query';

import useMakeMutation from '@/hooks/useMakeMutation';

import { handleError } from '@/helpers/requests';
import {
  changePassword,
  getCartItem,
  getLearningProcess,
  getUserInfo,
  getUserLibrary,
  login,
  register,
  removeRefreshTokenApi,
  updateLearningProcess,
  updateUser,
  uploadAvatar,
} from '../apis/users';

export const useLogin = () => {
  const { mutation } = useMakeMutation(login);
  return mutation;
};

export const useUpdateProfile = () => {
  const { mutation } = useMakeMutation(updateUser);
  return mutation;
};

export const usePassword = () => {
  const { mutation } = useMakeMutation(changePassword);
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

export const useUpdateLearningProcess = () => {
  const { mutation } = useMakeMutation(updateLearningProcess);
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

export const useLearningProcess = (id) =>
  useQuery(['process', { id }], getLearningProcess, {
    onError: handleError,
  });
