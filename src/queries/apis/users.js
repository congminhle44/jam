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

export const updateLearningProcess = async (requestBody) => {
  const { url, method } = config.apis.updatelearningProcess;
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
  });
  return data;
};

export const getUserInfo = async () => {
  const { url, method } = config.apis.getProfile;
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
  });
  return data;
};

export const getLearningProcess = async (key) => {
  const { url, method } = config.apis.getLearningProcess;
  const { id } = key && key.queryKey[1];
  const { data } = await axios({
    url: `${config.app.apiHost}${url(id)}`,
    method: method,
  });
  return data;
};

export const oauthLogout = async () => {
  const { url, method } = config.apis.oauthLogout;
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
  });
  return data;
};

export const getUserLibrary = async () => {
  const { url, method } = config.apis.getLibrary;
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
  });
  return data;
};

export const uploadAvatar = async (requestBody) => {
  const { url, method } = config.apis.uploadAvatar;
  const formData = new FormData();

  for (let item in requestBody) {
    formData.append(item, requestBody[item]);
  }

  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
    data: formData,
  });
  return data;
};

export const removeRefreshTokenApi = async (requestBody) => {
  const { url, method } = config.apis.deleteRefreshToken;
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
    data: requestBody,
  });
  return data;
};
