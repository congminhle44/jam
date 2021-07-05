/** @format */

import { useQuery } from 'react-query';

import { handleError } from '@/helpers/requests';

import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryDetails,
  getCourseByCategory,
  updateCategory,
} from '../apis/categories';
import useMakeMutation from '@/hooks/useMakeMutation';

export const useCategories = (page, limit, sort, keyword) =>
  useQuery(['categories', { page, limit, sort, keyword }], getCategories, {
    onError: handleError,
  });

export const useCourseByCategory = (courseID, userId) =>
  useQuery(['courseByCategory', { courseID, userId }], getCourseByCategory, {
    onError: handleError,
  });

export const useCategoryDetails = (id) =>
  useQuery(['categoryDetails', { id }], getCategoryDetails, {
    onError: handleError,
  });

export const useDeleteCategory = () => {
  const { mutation } = useMakeMutation(deleteCategory);
  return mutation;
};

export const useCreateCategory = () => {
  const { mutation } = useMakeMutation(createCategory);
  return mutation;
};

export const useUpdateCategory = () => {
  const { mutation } = useMakeMutation(updateCategory);
  return mutation;
};
