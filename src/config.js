/** @format */
const getApiHost = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return process.env.REACT_APP_API_HOST_DEVELOPMENT;
    case 'production':
      return process.env.REACT_APP_API_HOST_PRODUCTION;
    default:
      return process.env.REACT_APP_API_HOST_DEVELOPMENT;
  }
};

const config = {
  app: {
    apiHost: getApiHost(),
    env: process.env.NODE_ENV || 'development',
  },
  paths: {
    landing: '/',
    login: '/login',
    signup: '/signup',
    categoryDetail: '/category/:id',
    courseDetail: '/course/:id',
    cart: '/cart',
  },
  apis: {
    getCategories: {
      url: (page = '', limit = '', sort = '', keyword = '') =>
        `/categories?page=${page}&limit=${limit}&keyword=${keyword}&sort=${sort}`,
      method: 'GET',
    },
    getCategoryDetails: {
      url: (id) => `/categories/${id}`,
      method: 'GET',
    },
    getCourseByCategory: {
      url: (courseID) => `/categories/${courseID}/courses`,
      method: 'GET',
    },
    getCourseDetails: {
      url: (id) => `/courses/${id}`,
      method: 'GET',
    },
    getCommentsInCourse: {
      url: (id) => `/courses/${id}/comments`,
      method: 'GET',
    },
    getPublicCourses: {
      url: (page = '', limit = '', keyword = '') =>
        `/courses/public?page=${page}&limit=${limit}&keyword=${keyword}`,
      method: 'GET',
    },
    getUserCart: {
      url: '/users/cart/courses',
      method: 'GET',
    },
    addItemToCart: {
      url: '/courses/cart/add',
      method: 'POST',
    },
    removeItemFromCart: {
      url: '/courses/cart/remove',
      method: 'POST',
    },
    login: {
      url: '/users/login',
      method: 'POST',
    },
    signup: {
      url: '/users/register',
      method: 'POST',
    },
  },
};

export default config;
