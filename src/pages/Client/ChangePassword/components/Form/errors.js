/** @format */

import * as yup from 'yup';

export const errorSchema = yup.object().shape({
  oldPassword: yup.string().required().min(6).max(80),
  newPassword: yup.string().required().min(6).max(80),
});
