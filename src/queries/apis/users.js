/** @format */
import axios from 'axios';

import config from '@/config';

const token = localStorage.getItem('sid');

export const login = async (requestBody) => {
  const { url, method } = config.apis.login;
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
    data: requestBody,
  });
  return data;
};

export const register = async (requestBody) => {
  const { url, method } = config.apis.signup;
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
    data: requestBody,
  });
  return data;
};

export const getCartItem = async () => {
  const { url, method } = config.apis.getUserCart;
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
    headers: { token: `${token}` },
  });
  return data;
};
