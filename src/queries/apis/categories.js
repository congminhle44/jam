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
