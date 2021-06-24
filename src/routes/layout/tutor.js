/** @format */
import TutorHeader from '../components/TutorHeader';
import Footer from '../components/Footer';

const TutorLayout = ({ children }) => {
  return (
    <div>
      <TutorHeader />
      {children}
      <Footer />
    </div>
  );
};

export default TutorLayout;
