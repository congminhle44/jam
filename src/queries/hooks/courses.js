/** @format */

import { useQuery } from 'react-query';

import {
  addCourseToCart,
  checkout,
  getCommentsInCourse,
  getDetailCourse,
  getPublicCourses,
  removeItemFromCart,
  getLessonsInCourseStudent,
  getLessonSource,
  momoRedirectCheckout,
  momoCheckout,
  comment,
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

export const useLessonInCourseStudent = (id) =>
  useQuery(['lessonStudent', { id }], getLessonsInCourseStudent, {
    onError: handleError,
  });

export const useLessonSource = (id) =>
  useQuery(['lessonSource', { id }], getLessonSource, {
    onError: handleError,
  });

export const useCartItem = () => {
  const { mutation } = useMakeMutation(addCourseToCart);
  return mutation;
};

export const useComment = () => {
  const { mutation } = useMakeMutation(comment);
  return mutation;
};

export const useCheckout = () => {
  const { mutation } = useMakeMutation(checkout);
  return mutation;
};

export const useMomoRedirect = () => {
  const { mutation } = useMakeMutation(momoRedirectCheckout);
  return mutation;
};

export const useMomo = () => {
  const { mutation } = useMakeMutation(momoCheckout);
  return mutation;
};

export const useRemoveCartItem = () => {
  const { mutation } = useMakeMutation(removeItemFromCart);
  return mutation;
};
