/** @format */

import useMakeMutation from '@/hooks/useMakeMutation';

import { login, register } from '../apis/users';

export const useLogin = () => {
  const { mutation } = useMakeMutation(login);
  return mutation;
};

export const useRegister = () => {
  const { mutation } = useMakeMutation(register);
  return mutation;
};
