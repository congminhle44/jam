/** @format */
const getApiHost = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return process.env.REACT_APP_API_HOST_DEVELOPMENT;
    case 'production':
      return process.env.REACT_APP_API_HOST_PRODUCTION;
    default:
      return process.env.REACT_APP_API_HOST_DEVELOPMENT;
  }
};

const config = {
  app: {
    apiHost: getApiHost(),
    env: process.env.NODE_ENV || 'development',
  },
  paths: {
    landing: '/',
    login: '/login',
    signup: '/signup',
  },
  apis: {
    getCategories: {
      url: (page = '', limit = '', sort = '', keyword = '') =>
        `/api/categories?page=${page}&limit=${limit}&keyword=${keyword}&sort=${sort}`,
      method: 'GET',
    },
    getCourseByCategory: {
      url: (courseID) => `/api/categories/${courseID}/courses`,
      method: 'GET',
    },
    getPublicCourses: {
      url: (page = '', limit = '', keyword = '') =>
        `/api/courses/public?page=${page}&limit=${limit}&keyword=${keyword}`,
      method: 'GET',
    },
    login: {
      url: '/api/users/login',
      method: 'POST',
    },
    signup: {
      url: '/api/users/register',
      method: 'POST',
    },
  },
};

export default config;
