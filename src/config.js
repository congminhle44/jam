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
    stripePk: process.env.REACT_APP_STRIPE_PK,
  },
  paths: {
    landing: '/',
    login: '/login',
    signup: '/signup',
    categoryDetail: '/category/:id',
    courseDetail: '/course/:id',
    cart: '/cart',
    checkout: '/cart/checkout',
    profile: '/profile',
    studentLessons: '/course/:courseId/lesson/:lessonId',
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
    getLibrary: {
      url: '/users/library/g',
      method: 'GET',
    },
    getProfile: {
      url: '/users/profile',
      method: 'GET',
    },
    getLessonInCourseStudent: {
      url: (id) => `/courses/${id}/lessons`,
      method: 'GET',
    },
    addItemToCart: {
      url: '/courses/cart/add',
      method: 'POST',
    },
    uploadAvatar: {
      url: '/users/avatar/upload',
      method: 'PATCH',
    },
    removeItemFromCart: {
      url: '/courses/cart/remove',
      method: 'POST',
    },
    getLearningProcess: {
      url: (id) => `/users/lesson/${id}/process`,
      method: 'GET',
    },
    getLessonSource: {
      url: (id) => `/courses/lesson/${id}`,
      method: 'GET',
    },
    login: {
      url: '/users/login',
      method: 'POST',
    },
    fetchToken: {
      url: '/users/token',
      method: 'POST',
    },
    updatelearningProcess: {
      url: '/users/lesson/process',
      method: 'PUT',
    },
    deleteRefreshToken: {
      url: '/users/token/delete',
      method: 'DELETE',
    },
    signup: {
      url: '/users/register',
      method: 'POST',
    },
    checkout: {
      url: '/courses/checkout',
      method: 'POST',
    },
  },
};

export default config;
