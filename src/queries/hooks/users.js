/** @format */
import { useQuery } from 'react-query';

import useMakeMutation from '@/hooks/useMakeMutation';

import { handleError } from '@/helpers/requests';
import {
  changePassword,
  createUser,
  deleteUser,
  getCartItem,
  getLearningProcess,
  getUserInfo,
  getUserLibrary,
  getUsers,
  login,
  register,
  removeRefreshTokenApi,
  resetPassword,
  sendRecoverPasswordMail,
  updateLearningProcess,
  updateProfile,
  updateUser,
  uploadAvatar,
} from '../apis/users';

export const useLogin = () => {
  const { mutation } = useMakeMutation(login);
  return mutation;
};

export const useRecoverMail = () => {
  const { mutation } = useMakeMutation(sendRecoverPasswordMail);
  return mutation;
};

export const useResetPassword = () => {
  const { mutation } = useMakeMutation(resetPassword);
  return mutation;
};

export const useUpdateProfile = () => {
  const { mutation } = useMakeMutation(updateProfile);
  return mutation;
};

export const useUpdateUser = () => {
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

export const useGetUsers = (page, limit, keyword, role) =>
  useQuery(['getUser', { page, limit, keyword, role }], getUsers, {
    onError: handleError,
  });

export const useLogout = () => {
  const { mutation } = useMakeMutation(removeRefreshTokenApi);
  return mutation;
};

export const useDeleteUser = () => {
  const { mutation } = useMakeMutation(deleteUser);
  return mutation;
};

export const useCreateUser = () => {
  const { mutation } = useMakeMutation(createUser);
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
