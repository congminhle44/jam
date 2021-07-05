/** @format */

import * as yup from 'yup';

export const errorSchema = yup.object().shape({
  categoryName: yup.string().required().min(8).max(80),
});
