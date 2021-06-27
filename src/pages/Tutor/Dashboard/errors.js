/** @format */

import * as yup from 'yup';

export const errorSchema = yup.object().shape({
  courseName: yup.string().required().min(8).max(50),
  courseDescription: yup.string().max(500),
});
