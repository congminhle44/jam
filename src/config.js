/** @format */

const config = {
  app: {
    apiHost: process.env.API_HOST,
    env: process.env.NODE_ENV || 'development',
    lang: process.env.LANG || 'en',
  },
  paths: {
    landing: '/',
  },
  apis: {},
};

export default config;
