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

export const getCategoryDetails = async (key) => {
  const { url, method } = config.apis.getCategoryDetails;
  const { id } = key && key.queryKey[1];
  const { data } = await axios({
    url: `${config.app.apiHost}${url(id)}`,
    method: method,
  });
  return data;
};

export const getCourseByCategory = async (key) => {
  const { url, method } = config.apis.getCourseByCategory;
  const { courseID, userId } = key && key.queryKey[1];
  if (courseID) {
    const { data } = await axios({
      url: `${config.app.apiHost}${url(courseID, userId)}`,
      method: method,
    });
    return data;
  }
};
