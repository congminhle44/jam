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
  apis: {},
};

export default config;
