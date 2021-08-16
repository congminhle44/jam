/** @format */

import Alert, { AlertVariants } from '@/components/Alert';
import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import DashboardTemplate from '@/components/Template/dashboard';
import {
  useCreateUser,
  useDeleteUser,
  useGetUsers,
  useUpdateUser,
} from '@/queries/hooks/users';
import { showAlertAtom } from '@/store/alert';
import { showModalAtom } from '@/store/modal';
import { useAtom } from 'jotai';
import { useState } from 'react';
import CreateUserModal from './components/CreateUserModal';
import DeleteUserModal from './components/DeleteUserModal';
import UserHead from './components/Head';
import UserTable from './components/Table';
import UpdateUserModal from './components/UpdateUserModal';

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
  const { mutateAsync: createUser } = useCreateUser();
  const { mutateAsync: updateUser } = useUpdateUser();

  const [, showModal] = useAtom(showModalAtom);
  const [, showAlert] = useAtom(showAlertAtom);

  const setNewRole = (role) => setRole(role);

  const handleDeleteUser = (id) => {
    // Call delete user hook that was declared
    return deleteUser({ id })
      .then((result) => {
        // If success, it will refetch the list of users and show success alert
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
        // If error, it will show error alert include the message was sent from server
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Error,
            children: err.response && err.response.data.message,
          },
        });
      });
  };

  const handleCreateUser = (data) => {
    // Call create user hook that was declared
    return createUser(data)
      .then((result) => {
        // If success, it will refetch the list of users and show success alert
        refetchUsers();
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: `${result.fullName} was created!`,
          },
        });
      })
      .catch((err) => {
        // If error, it will show error alert include the message was sent from server
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Error,
            children: err.response && err.response.data.message,
          },
        });
      });
  };

  const handleUpdatUser = (data) => {
    return updateUser(data)
      .then((result) => {
        refetchUsers();
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: `${result.fullName} was updated!`,
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

  const handleShowCreateModal = () => {
    showModal({
      component: CreateUserModal,
      props: {
        onSubmit: handleCreateUser,
      },
    });
  };

  const handleShowUpdateModal = (user) => {
    showModal({
      component: UpdateUserModal,
      props: {
        onSubmit: handleUpdatUser,
        userInfo: user,
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
        <Button
          onClick={handleShowCreateModal}
          variant={ButtonVariants.Solid}
          size={ButtonSizes.Standard}>
          Create
        </Button>
      }>
      <div className={styles.container}>
        <UserHead setKeyword={setKeyword} role={role} setRole={setNewRole} />
        <UserTable
          handleShowUpdateModal={handleShowUpdateModal}
          handleShowDeleteModal={handleShowDeleteModal}
          users={users}
        />
      </div>
    </DashboardTemplate>
  );
};

export default UserManage;
