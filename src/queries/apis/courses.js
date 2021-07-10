/** @format */
import axios from 'axios';

import config from '@/config';

export const getAllCourses = async (key) => {
  const { url, method } = config.apis.getCourses;
  const { page, limit, keyword, category } = key && key.queryKey[1];
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
    params: { page, limit, keyword, category },
  });
  return data;
};

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

export const getTutorLessons = async (key) => {
  const { url, method } = config.apis.tutorLessons;
  const { id } = key && key.queryKey[1];
  const { data } = await axios({
    url: `${config.app.apiHost}${url(id)}`,
    method: method,
  });
  return data;
};

export const getTutorCourses = async (key) => {
  const { url, method } = config.apis.getTutorCourse;
  const { page, limit, keyword } = key && key.queryKey[1];
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
    params: { page, limit, keyword },
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

export const deleteLesson = async (requestBody) => {
  const { url, method } = config.apis.deleteLesson;
  const { courseId, lessonId } = requestBody;
  const { data } = await axios({
    url: `${config.app.apiHost}${url(courseId, lessonId)}`,
    method: method,
  });
  return data;
};

export const deleteCourse = async (requestBody) => {
  const { url, method } = config.apis.deleteCourse;
  const { id } = requestBody;
  const { data } = await axios({
    url: `${config.app.apiHost}${url(id)}`,
    method: method,
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

export const updateLesson = async (requestBody) => {
  const { url, method } = config.apis.updateLesson;
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

export const createCourse = async (requestBody) => {
  const { url, method } = config.apis.createCourse;
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
    data: requestBody,
  });
  return data;
};

export const updateCourse = async (requestBody) => {
  const { url, method } = config.apis.updateCourse;
  const { data } = await axios({
    url: `${config.app.apiHost}${url(requestBody.id)}`,
    method: method,
    data: requestBody,
  });
  return data;
};

export const publicCourse = async (requestBody) => {
  const { url, method } = config.apis.publicCourse;
  const { data } = await axios({
    url: `${config.app.apiHost}${url}`,
    method: method,
    data: requestBody,
  });
  return data;
};

export const uploadThumbs = async (requestBody) => {
  const { url, method } = config.apis.editThumbs;
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

export const createLesson = async (requestBody) => {
  const { url, method } = config.apis.addLesson;
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
