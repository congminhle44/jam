/** @format */
import DashboardTemplate from '@/components/Template/dashboard';
import DeleteCourseModal from './components/DeleteCourseModal';
import { useCategories } from '@/queries/hooks/categories';
import { useCourses, useDeleteCourse } from '@/queries/hooks/courses';
import { showAlertAtom } from '@/store/alert';
import { showModalAtom } from '@/store/modal';
import { useAtom } from 'jotai';
import { useState } from 'react';
import CourseHead from './components/Head';
import CourseTable from './components/Table';
import styles from './courses.module.css';
import Alert, { AlertVariants } from '@/components/Alert';

const AdminCourses = () => {
  const [page, setPage] = useState(1);
  const limit = 6;
  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');

  const { data: categories } = useCategories(1, '', '', '');
  const { data: courses, refetch: refetchCourses } = useCourses(
    page,
    limit,
    keyword,
    category
  );
  const { mutateAsync: deleteCourse } = useDeleteCourse();

  const [, showModal] = useAtom(showModalAtom);
  const [, showAlert] = useAtom(showAlertAtom);

  const handleDeleteCourse = (id) => {
    return deleteCourse({ id })
      .then((result) => {
        refetchCourses();
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: `${result.courseName} deleted`,
          },
        });
      })
      .catch((err) => {
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Error,
            children: err.response && err.response.data.message,
          },
        });
      });
  };

  const handleShowDeleteModal = (course) => {
    showModal({
      component: DeleteCourseModal,
      props: {
        courseInfo: course,
        onSubmit: handleDeleteCourse,
      },
    });
  };

  return (
    <DashboardTemplate
      head='Courses'
      setPage={setPage}
      total={courses && courses.total}
      limit={limit}
      currentPage={page}>
      <div className={styles.container}>
        <CourseHead
          categories={categories}
          category={category}
          setCategory={setCategory}
          setKeyword={setKeyword}
        />
        <CourseTable
          handleShowDeleteModal={handleShowDeleteModal}
          courses={courses}
        />
      </div>
    </DashboardTemplate>
  );
};

export default AdminCourses;
