/** @format */
import { userAtom } from '@/store/login';
import { useAtom } from 'jotai';
import Banner from './components/Banner';
import Courses from './components/Courses';
import Getstarted from './components/Getstart';
import Instructor from './components/Instructor';
import Introduce from './components/Introduce';
import TopCategories from './components/TopCategories';

const Landing = () => {
  const [userInfo] = useAtom(userAtom);

  return (
    <div>
      <Banner />
      <Courses />
      <Instructor />
      {!userInfo && <Getstarted />}
      <TopCategories />
      <Introduce />
    </div>
  );
};

export default Landing;
