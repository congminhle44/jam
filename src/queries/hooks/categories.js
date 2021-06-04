/** @format */

import { useQuery } from 'react-query';

import { handleError } from '@/helpers/requests';

// import useMakeMutation from '@/hooks/useMakeMutation';

import { getCategories, getCourseByCategory } from '../apis/categories';

export const useCategories = (page, limit, sort, keyword) =>
  useQuery(['categories', { page, limit, sort, keyword }], getCategories, {
    onError: handleError,
  });

export const useCourseByCategory = (courseID) =>
  useQuery(['courseByCategory', { courseID }], getCourseByCategory, {
    onError: handleError,
  });
