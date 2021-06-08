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
  const { id } = key && key.queryKey[1];
  const { data } = await axios({
    url: `${config.app.apiHost}${url(id)}`,
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
