/** @format */

import { useQuery } from 'react-query';

import {
  addCourseToCart,
  getCommentsInCourse,
  getDetailCourse,
  getPublicCourses,
  removeItemFromCart,
} from '../apis/courses';
import { handleError } from '@/helpers/requests';
import useMakeMutation from '@/hooks/useMakeMutation';

export const usePublicCourses = (page, limit, keyword) =>
  useQuery(['courses', { page, limit, keyword }], getPublicCourses, {
    onError: handleError,
  });

export const useCourseDetails = (id) =>
  useQuery(['courseDetails', { id }], getDetailCourse, {
    onError: handleError,
  });

export const useCommentsInCourse = (id) =>
  useQuery(['courseComment', { id }], getCommentsInCourse, {
    onError: handleError,
  });

export const useCartItem = () => {
  const { mutation } = useMakeMutation(addCourseToCart);
  return mutation;
};

export const useRemoveCartItem = () => {
  const { mutation } = useMakeMutation(removeItemFromCart);
  return mutation;
};
