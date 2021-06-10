/** @format */
import axios from 'axios';

import config from '@/config';

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

export const getCartItem = async (key) => {
  const { url, method } = config.apis.getUserCart;
  const { token } = key && key.queryKey[1];
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
    headers: { token: `${token}` },
  });
  return data;
};
