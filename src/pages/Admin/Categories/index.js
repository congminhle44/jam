/** @format */

import Alert, { AlertVariants } from '@/components/Alert';
import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import DashboardTemplate from '@/components/Template/dashboard';
import {
  useCategories,
  useCreateCategory,
  useDeleteCategory,
  useUpdateCategory,
} from '@/queries/hooks/categories';
import { showAlertAtom } from '@/store/alert';
import { showModalAtom } from '@/store/modal';
import { useAtom } from 'jotai';
import { useState } from 'react';

import styles from './category.module.css';
import CreateCategoryModal from './components/CreateCategoryModal';
import DeleteCategoryModal from './components/DeleteCategoryModal';
import CategoryHead from './components/Head';
import CategoryTable from './components/Table';
import UpdateCategoryModal from './components/UpdateCategoryModal';

const Categories = () => {
  const [page, setPage] = useState(1);
  const limit = 6;
  const [keyword, setKeyword] = useState('');

  const [, showModal] = useAtom(showModalAtom);
  const [, showAlert] = useAtom(showAlertAtom);

  const { data: categories, refetch: refetchCategories } = useCategories(
    page,
    limit,
    '',
    keyword
  );
  const { mutateAsync: deleteCategory } = useDeleteCategory();
  const { mutateAsync: createCategory } = useCreateCategory();
  const { mutateAsync: updateCategory } = useUpdateCategory();

  const handleDeleteCategory = (id) => {
    return deleteCategory({ id })
      .then((result) => {
        refetchCategories();
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: `${result.categoryName} was deleted`,
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

  const handleCreateCategory = (data) => {
    return createCategory(data)
      .then((result) => {
        refetchCategories();
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: `${result.categoryName} was created`,
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

  const handleUpdateCategory = (data) => {
    return updateCategory(data)
      .then((result) => {
        refetchCategories();
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: `${result.categoryName} was updated`,
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

  const handleShowDeleteModal = (category) => {
    showModal({
      component: DeleteCategoryModal,
      props: {
        onSubmit: handleDeleteCategory,
        category,
      },
    });
  };

  const handleShowCreateModal = () => {
    showModal({
      component: CreateCategoryModal,
      props: {
        onSubmit: handleCreateCategory,
      },
    });
  };

  const handleShowUpdateModal = (category) => {
    showModal({
      component: UpdateCategoryModal,
      props: {
        onSubmit: handleUpdateCategory,
        category,
      },
    });
  };

  return (
    <DashboardTemplate
      head='Categories'
      total={categories && categories.total}
      limit={limit}
      currentPage={page}
      setPage={setPage}
      button={
        <Button
          onClick={handleShowCreateModal}
          variant={ButtonVariants.Solid}
          size={ButtonSizes.Standard}>
          Create
        </Button>
      }>
      <div className={styles.container}>
        <CategoryHead setKeyword={setKeyword} />
        <CategoryTable
          handleShowUpdateModal={handleShowUpdateModal}
          handleShowDeleteModal={handleShowDeleteModal}
          categories={categories}
        />
      </div>
    </DashboardTemplate>
  );
};

export default Categories;
