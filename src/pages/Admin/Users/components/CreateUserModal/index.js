/** @format */
import Modal from '@/components/Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import CreateUserForm from '../CreateUserForm';
import { errorSchema } from './error';

const CreateUserModal = ({ onClose, onSubmit, ...others }) => {
  const [role, setRole] = useState('student');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(errorSchema) });

  const handleCreate = (data) => {
    const finalizeData = {
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
      onOk={handleSubmit(handleCreate)}
      okText={<FormattedMessage id='common.create' />}
      onClose={onClose}
      {...others}
      header='Create user'>
      <CreateUserForm
        register={register}
        errors={errors}
        role={role}
        handleSelectOption={handleSelectOption}
      />
    </Modal>
  );
};

export default CreateUserModal;
