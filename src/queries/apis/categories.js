/** @format */

import axios from 'axios';

import config from '@/config';

export const getCategories = async (key) => {
  const { url, method } = config.apis.getCategories;
  const { page, limit, sort, keyword } = key && key.queryKey[1];
  const { data } = await axios({
    url: `${config.app.apiHost}${url(page, limit, sort, keyword)}`,
    method: method,
  });
  return data;
};

export const getCourseByCategory = async (key) => {
  const { url, method } = config.apis.getCourseByCategory;
  const { courseID } = key && key.queryKey[1];
  const { data } = await axios({
    url: `${config.app.apiHost}${url(courseID)}`,
    method: method,
  });
  return data;
};

export const login = async (requestBody) => {
  const { url, method } = config.apis.login;
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
    data: requestBody,
  });
  return data;
};
