/** @format */

import { useQuery } from 'react-query';

import { getPublicCourses } from '../apis/courses';
import { handleError } from '@/helpers/requests';

export const usePublicCourses = (page, limit, keyword) =>
  useQuery(['courses', { page, limit, keyword }], getPublicCourses, {
    onError: handleError,
  });
