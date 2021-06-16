/** @format */
import ClientLessonHeader from '../components/LessonHeader';

const ClientLessonLayout = ({ children }) => {
  return (
    <div>
      <ClientLessonHeader />
      {children}
    </div>
  );
};

export default ClientLessonLayout;
