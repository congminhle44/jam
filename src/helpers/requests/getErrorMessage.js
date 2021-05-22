/** @format */

const getInstanceOfError = (error) => {
  return {
    message: error.message ? error.message : 'Something went wrong!',
  };
};

const getInstanceOfAxiosResponse = (error) => {
  if (error.data?.error?.message) {
    return error.data.error;
  }

  return {
    message: 'Something went wrong!',
  };
};

const getErrorMessage = (error) => {
  if (error instanceof Error) {
    return getInstanceOfError(error);
  }

  return getInstanceOfAxiosResponse(error);
};

export default getErrorMessage;
