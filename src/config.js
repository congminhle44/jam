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
  },
  apis: {
    getCategories: {
      url: (page = '', limit = '', sort = '', keyword = '') =>
        `/categories?page=${page}&limit=${limit}&keyword=${keyword}&sort=${sort}`,
      method: 'GET',
    },
  },
};

export default config;
