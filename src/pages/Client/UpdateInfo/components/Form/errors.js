/** @format */

import * as yup from 'yup';

export const errorSchema = yup.object().shape({
  fullName: yup.string().required().min(8).max(80),
  description: yup.string().max(200),
  address: yup.string().max(80),
});
