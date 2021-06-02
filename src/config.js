/** @format */

const config = {
  app: {
    apiHost: process.env.REACT_APP_API_HOST,
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
