/** @format */

import * as yup from 'yup';

export const errorSchema = yup.object().shape({
  email: yup.string().required().min(8).max(80).email(),
  password: yup.string().min(6).max(50),
});
