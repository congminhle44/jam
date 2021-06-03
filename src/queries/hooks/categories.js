/** @format */

import { useQuery } from 'react-query';

import { handleError } from '@/helpers/requests';

// import useMakeMutation from '@/hooks/useMakeMutation';

import { getCategories } from '../apis/categories';

export const useCategories = (page, limit, sort, keyword) =>
  useQuery(['categories', { page, limit, sort, keyword }], getCategories, {
    onError: handleError,
  });
