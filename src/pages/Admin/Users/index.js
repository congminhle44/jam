/** @format */

import Alert, { AlertVariants } from '@/components/Alert';
import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import DashboardTemplate from '@/components/Template/dashboard';
import { useDeleteUser, useGetUsers } from '@/queries/hooks/users';
import { showAlertAtom } from '@/store/alert';
import { showModalAtom } from '@/store/modal';
import { useAtom } from 'jotai';
import { useState } from 'react';
import DeleteUserModal from './components/DeleteUserModal';
import UserHead from './components/Head';
import UserTable from './components/Table';

import styles from './user.module.css';

const UserManage = () => {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [role, setRole] = useState('');

  const limit = 6;

  const { data: users, refetch: refetchUsers } = useGetUsers(
    page,
    limit,
    keyword,
    role
  );
  const { mutateAsync: deleteUser } = useDeleteUser();

  const [, showModal] = useAtom(showModalAtom);
  const [, showAlert] = useAtom(showAlertAtom);

  const setNewRole = (role) => setRole(role);

  const handleDeleteUser = (id) => {
    return deleteUser({ id })
      .then((result) => {
        refetchUsers();
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: `${result.fullName} was deleted successfully`,
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

  const handleShowDeleteModal = (user) => {
    showModal({
      component: DeleteUserModal,
      props: {
        userInfo: user,
        onSubmit: handleDeleteUser,
      },
    });
  };

  return (
    <DashboardTemplate
      head='Users'
      total={users && users.total}
      currentPage={page}
      setPage={setPage}
      limit={limit}
      button={
        <Button variant={ButtonVariants.Solid} size={ButtonSizes.Standard}>
          Create
        </Button>
      }>
      <div className={styles.container}>
        <UserHead setKeyword={setKeyword} role={role} setRole={setNewRole} />
        <UserTable
          handleShowDeleteModal={handleShowDeleteModal}
          users={users}
        />
      </div>
    </DashboardTemplate>
  );
};

export default UserManage;
