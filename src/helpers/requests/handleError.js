/** @format */

import { getErrorMessage } from '@/helpers/requests';

const handleError = (error) => {
  const errorMessage = getErrorMessage(error);
  console.error(errorMessage);
};

export default handleError;
