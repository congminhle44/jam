/** @format */

import { useQuery } from 'react-query';

import {
  getCommentsInCourse,
  getDetailCourse,
  getPublicCourses,
} from '../apis/courses';
import { handleError } from '@/helpers/requests';

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
