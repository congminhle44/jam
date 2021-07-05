/** @format */
import Modal from '@/components/Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import UpdateUserForm from '../UpdateUserForm';
import { errorSchema } from './error';

const UpdateUserModal = ({ onClose, onSubmit, userInfo, ...others }) => {
  const [role, setRole] = useState(userInfo.userType);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(errorSchema),
    defaultValues: {
      email: userInfo.email,
      fullName: userInfo.fullName,
    },
  });

  const handleUpdate = (data) => {
    const finalizeData = {
      id: userInfo._id,
      email: data.email.trim(),
      fullName: data.fullName.trim(),
      userType: role,
    };
    onSubmit(finalizeData).then(() => {
      onClose();
    });
  };

  const handleSelectOption = (e) => {
    const { value } = e.target;
    setRole(value);
  };

  return (
    <Modal
      onOk={handleSubmit(handleUpdate)}
      okText={<FormattedMessage id='common.update' />}
      onClose={onClose}
      {...others}
      header='Update user'>
      <UpdateUserForm
        register={register}
        errors={errors}
        role={role}
        handleSelectOption={handleSelectOption}
      />
    </Modal>
  );
};

export default UpdateUserModal;
