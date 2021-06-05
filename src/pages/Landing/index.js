/** @format */
import Banner from './components/Banner';
import Courses from './components/Courses';
import Getstarted from './components/Getstart';
import Instructor from './components/Instructor';
import Introduce from './components/Introduce';
import TopCategories from './components/TopCategories';

const Landing = () => {
  return (
    <div>
      <Banner />
      <Courses />
      <Instructor />
      <Getstarted />
      <TopCategories />
      <Introduce />
    </div>
  );
};

export default Landing;
