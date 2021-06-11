/** @format */

import axios from 'axios';

import appConfig from '@/config';

axios.interceptors.request.use(
  async (config) => {
    const value = localStorage.getItem('sid');
    const token = JSON.parse(value);
    config.headers = {
      token: `${token}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => Promise.resolve(response),
  (err) => {
    const {
      response: { status, data },
    } = err;
    const { url, method } = appConfig.apis.fetchToken;
    if (status === 401 && data.message === 'Token invalid') {
      return axios({
        url: `${appConfig.app.apiHost}${url}`,
        method: method,
        data: { refreshToken: JSON.parse(localStorage.getItem('rid')) },
      })
        .then((response) => {
          localStorage.removeItem('sid');
          localStorage.setItem(
            'sid',
            JSON.stringify(response && response.data.accessToken)
          );
          err.response.config.headers['token'] =
            response && response.data.accessToken;
          return axios(err.response.config);
        })
        .catch((error) => {
          localStorage.removeItem('sid');
          localStorage.removeItem('rid');
          localStorage.removeItem('user');
          window.location.path = '/login';
          return Promise.reject(error);
        });
    }
  }
);
