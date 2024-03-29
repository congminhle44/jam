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
  getWishlist,
  addWishlist,
  deleteWishlist,
  getTutorCourses,
  createCourse,
  getTutorLessons,
  uploadThumbs,
  createLesson,
  deleteLesson,
  updateLesson,
  updateCourse,
  publicCourse,
  deleteCourse,
  getAllCourses,
} from '../apis/courses';
import { handleError } from '@/helpers/requests';
import useMakeMutation from '@/hooks/useMakeMutation';

export const useCourses = (page, limit, keyword, category) =>
  useQuery(['courses', { page, limit, keyword, category }], getAllCourses, {
    onError: handleError,
  });

export const usePublicCourses = (page, limit, keyword) =>
  useQuery(['publicCourses', { page, limit, keyword }], getPublicCourses, {
    onError: handleError,
  });

export const useCourseDetails = (id, userId) =>
  useQuery(['courseDetails', { id, userId }], getDetailCourse, {
    onError: handleError,
  });

export const useTutorLessons = (id) =>
  useQuery(['tutorLessons', { id }], getTutorLessons, {
    onError: handleError,
  });

export const useTutorCourses = (page, limit, keyword) =>
  useQuery(['courseTutor', { page, limit, keyword }], getTutorCourses, {
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

export const useGetWishlist = (userInfo) =>
  useQuery(['getWishlist', { userInfo }], getWishlist, {
    onError: handleError,
  });

export const useWishlist = () => {
  const { mutation } = useMakeMutation(addWishlist);
  return mutation;
};

export const useThumbnail = () => {
  const { mutation } = useMakeMutation(uploadThumbs);
  return mutation;
};

export const useNewLesson = () => {
  const { mutation } = useMakeMutation(createLesson);
  return mutation;
};

export const useDeleteCourse = () => {
  const { mutation } = useMakeMutation(deleteCourse);
  return mutation;
};

export const useUpdateCourse = () => {
  const { mutation } = useMakeMutation(updateCourse);
  return mutation;
};

export const usePublicCourse = () => {
  const { mutation } = useMakeMutation(publicCourse);
  return mutation;
};

export const useDeleteLesson = () => {
  const { mutation } = useMakeMutation(deleteLesson);
  return mutation;
};

export const useUpdateLesson = () => {
  const { mutation } = useMakeMutation(updateLesson);
  return mutation;
};

export const useCreateCourse = () => {
  const { mutation } = useMakeMutation(createCourse);
  return mutation;
};

export const useRemoveWishlist = () => {
  const { mutation } = useMakeMutation(deleteWishlist);
  return mutation;
};

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
