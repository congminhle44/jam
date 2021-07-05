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

export const deleteCategory = async (requestBody) => {
  const { url, method } = config.apis.deleteCategory;
  const { data } = await axios({
    url: `${config.app.apiHost}${url(requestBody.id)}`,
    method: method,
    data: requestBody,
  });
  return data;
};

export const createCategory = async (requestBody) => {
  const { url, method } = config.apis.createCategory;
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

export const updateCategory = async (requestBody) => {
  const { url, method } = config.apis.updateCategory;
  const formData = new FormData();
  for (let item in requestBody) {
    formData.append(item, requestBody[item]);
  }
  const { data } = await axios({
    url: `${config.app.apiHost}${url(requestBody.id)}`,
    method: method,
    data: formData,
  });
  return data;
};
