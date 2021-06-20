/** @format */
import axios from 'axios';

import config from '@/config';

export const getPublicCourses = async (key) => {
  const { url, method } = config.apis.getPublicCourses;
  const { page, limit, keyword } = key && key.queryKey[1];
  const { data } = await axios({
    url: `${config.app.apiHost}${url(page, limit, keyword)}`,
    method: method,
  });
  return data;
};

export const getDetailCourse = async (key) => {
  const { url, method } = config.apis.getCourseDetails;
  const { id, userId } = key && key.queryKey[1];
  const { data } = await axios({
    url: `${config.app.apiHost}${url(id, userId)}`,
    method: method,
  });
  return data;
};

export const getCommentsInCourse = async (key) => {
  const { url, method } = config.apis.getCommentsInCourse;
  const { id } = key && key.queryKey[1];
  const { data } = await axios({
    url: `${config.app.apiHost}${url(id)}`,
    method: method,
  });
  return data;
};

export const getLessonsInCourseStudent = async (key) => {
  const { url, method } = config.apis.getLessonInCourseStudent;
  const { id } = key && key.queryKey[1];
  const { data } = await axios({
    url: `${config.app.apiHost}${url(id)}`,
    method: method,
  });
  return data;
};

export const getLessonSource = async (key) => {
  const { url, method } = config.apis.getLessonSource;
  const { id } = key && key.queryKey[1];
  const { data } = await axios({
    url: `${config.app.apiHost}${url(id)}`,
    method: method,
  });
  return data;
};

export const getWishlist = async () => {
  const { url, method } = config.apis.getWishlist;
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
  });
  return data;
};

export const addWishlist = async (requestBody) => {
  const { url, method } = config.apis.addWishlist;
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
    data: requestBody,
  });
  return data;
};

export const deleteWishlist = async (requestBody) => {
  const { url, method } = config.apis.removeWishlist;
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
    data: requestBody,
  });
  return data;
};

export const addCourseToCart = async (requestBody) => {
  const { url, method } = config.apis.addItemToCart;
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
    data: requestBody,
  });
  return data;
};

export const removeItemFromCart = async (requestBody) => {
  const { url, method } = config.apis.removeItemFromCart;
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
    data: requestBody,
  });
  return data;
};

export const checkout = async (requestBody) => {
  const { url, method } = config.apis.checkout;
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
    data: requestBody,
  });
  return data;
};

export const comment = async (requestBody) => {
  const { url, method } = config.apis.comment;
  const { data } = await axios({
    url: `${config.app.apiHost}${url(requestBody.courseId)}`,
    method: method,
    data: requestBody,
  });
  return data;
};

export const momoCheckout = async (requestBody) => {
  const { url, method } = config.apis.momoCheckout;
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
    data: requestBody,
  });
  return data;
};

export const momoRedirectCheckout = async (requestBody) => {
  const { url, method } = config.apis.momoRedirectCheckout;
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
    data: requestBody,
  });
  return data;
};
