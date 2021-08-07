/** @format */

import * as yup from 'yup';

export const errorSchema = yup.object().shape({
  oldPassword: yup.string().required().min(8).max(50),
  newPassword: yup.string().required().min(8).max(50),
});
