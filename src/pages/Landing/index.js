/** @format */

import Banner from './components/Banner';
import Getstarted from './components/Getstart';
import Instructor from './components/Instructor';
import Introduce from './components/Introduce';

const Landing = () => {
  return (
    <div>
      <Banner />
      <Instructor />
      <Getstarted />
      <Introduce />
    </div>
  );
};

export default Landing;
