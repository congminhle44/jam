/** @format */

import * as yup from 'yup';

export const errorSchema = yup.object().shape({
  email: yup.string().required().min(8).max(20).email(),
  password: yup.string().required().min(8).max(20),
});
