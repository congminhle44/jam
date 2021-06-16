/** @format */
import { lazy, Suspense } from 'react';
import { userAtom } from '@/store/login';
import { useAtom } from 'jotai';
import Banner from './components/Banner';
import Typography, { TypographyVariants } from '@/components/Typography';

const Courses = lazy(() => import('./components/Courses'));
const Getstarted = lazy(() => import('./components/Getstart'));
const Instructor = lazy(() => import('./components/Instructor'));
const Introduce = lazy(() => import('./components/Introduce'));
const TopCategories = lazy(() => import('./components/TopCategories'));

const Landing = () => {
  const [userInfo] = useAtom(userAtom);

  return (
    <div>
      <Banner />
      <Suspense
        fallback={
          <Typography variant={TypographyVariants.H5}>Loading...</Typography>
        }>
        <Courses />
        <Instructor />
        {!userInfo && <Getstarted />}
        <TopCategories />
        <Introduce />
      </Suspense>
    </div>
  );
};

export default Landing;
