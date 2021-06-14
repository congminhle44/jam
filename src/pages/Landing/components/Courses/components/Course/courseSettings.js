/** @format */

export const courseSettings = (courses) => ({
  dots: false,
  infinite: true,
  speed: 500,
  // If the item in courses array is equal or less than 1 will return 1 to prevent render 2 lines of items if there is only 1 item
  slidesToShow:
    (Array.isArray(courses) && courses.length <= 1) || !courses ? 1 : 5,
  slidesToScroll:
    (Array.isArray(courses) && courses.length <= 1) || !courses ? 1 : 5,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1280,
      // If the item in courses array is equal or less than 1 will return 1 to prevent render 2 lines of items if there is only 1 item
      settings: {
        slidesToShow:
          (Array.isArray(courses) && courses.length <= 1) || !courses ? 1 : 3,
        slidesToScroll:
          (Array.isArray(courses) && courses.length <= 1) || !courses ? 1 : 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
