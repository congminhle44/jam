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
    profileEdit: '/profile/edit/info',
    changePassword: '/profile/edit/password',
    studentLessons: '/course/:courseId/lesson/:lessonId',
    momoRedirect: '/payment/redirect',
    successCheckout: '/payment/success',
    errorCheckout: '/payment/failed',
    terms: '/terms',
    about: '/about',
    oauthRedirect: '/oauth/redirect',
    wishlist: '/wish',
    tutorDashboard: '/tutor/dashboard',
    tutorLesson: '/tutor/course/:id/lessons',
    tutorCourseSetting: '/tutor/course/:id/settings',
    adminLogin: '/admin/login',
    adminDashboard: '/admin/dashboard',
    adminUser: '/admin/users',
    adminCategory: '/admin/categories',
    adminCourse: '/admin/courses',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password',
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
      url: (courseID, userId = '') =>
        `/categories/${courseID}/courses?userId=${userId}`,
      method: 'GET',
    },
    getCourseDetails: {
      url: (id, userId = '') => `/courses/${id}?userId=${userId}`,
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
    comment: {
      url: (id) => `/courses/${id}/comment`,
      method: 'PUT',
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
      url: '/courses/checkout/stripe',
      method: 'POST',
    },
    momoRedirectCheckout: {
      url: '/momo',
      method: 'POST',
    },
    momoCheckout: {
      url: '/courses/checkout/momo',
      method: 'POST',
    },
    getWishlist: {
      url: '/courses/user/wishlist',
      method: 'GET',
    },
    addWishlist: {
      url: '/courses/wishlist',
      method: 'POST',
    },
    removeWishlist: {
      url: '/courses/wishlist/delete',
      method: 'POST',
    },
    updateProfile: {
      url: '/users/profile',
      method: 'PUT',
    },
    updateUser: {
      url: (id) => `/users/${id}`,
      method: 'PUT',
    },
    changePassword: {
      url: '/users/changePassword',
      method: 'PATCH',
    },
    getTutorCourse: {
      url: '/courses/tutor/g',
      method: 'get',
    },
    createCourse: {
      url: '/courses',
      method: 'POST',
    },
    tutorLessons: {
      url: (id) => `/courses/${id}/lessons/tutor`,
      method: 'GET',
    },
    editThumbs: {
      url: (id) => `/courses/${id}/thumbs/upload`,
      method: 'PATCH',
    },
    addLesson: {
      url: (id) => `/courses/${id}/lessons`,
      method: 'POST',
    },
    deleteLesson: {
      url: (courseId, lessonId) => `/courses/${courseId}/lessons/${lessonId}`,
      method: 'DELETE',
    },
    updateLesson: {
      url: (id) => `/courses/lesson/${id}`,
      method: 'PUT',
    },
    updateCourse: {
      url: (id) => `/courses/${id}`,
      method: 'PUT',
    },
    publicCourse: {
      url: '/courses/public',
      method: 'PATCH',
    },
    deleteCourse: {
      url: (id) => `/courses/${id}`,
      method: 'DELETE',
    },
    getUsers: {
      url: '/users',
      method: 'GET',
    },
    deleteUser: {
      url: (id) => `/users/user_id=${id}`,
      method: 'DELETE',
    },
    createUser: {
      url: '/users',
      method: 'POST',
    },
    deleteCategory: {
      url: (id) => `/categories/${id}`,
      method: 'DELETE',
    },
    createCategory: {
      url: '/categories',
      method: 'POST',
    },
    updateCategory: {
      url: (id) => `/categories/${id}`,
      method: 'PUT',
    },
    getCourses: {
      url: '/courses',
      method: 'GET',
    },
    downloadLessons: {
      url: (id) => `/courses/download/${id}`,
      method: 'GET',
    },
    sendRecoverPasswordMail: {
      url: '/users/recover',
      method: 'POST',
    },
    resetPassword: {
      url: '/users/recoverPassword',
      method: 'PATCH',
    },
  },
};

export default config;
