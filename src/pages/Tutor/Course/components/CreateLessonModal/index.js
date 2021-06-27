/** @format */
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Modal from '@/components/Modal';
import CreateLessonForm from '../CreateLessonForm';
import { errorSchema } from './errors';

const CreateLessonModal = ({ onClose, onSubmit, ...others }) => {
  const [source, setSource] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(errorSchema),
  });

  const handleSetSource = (file) => setSource(file);

  const handleCreateLessons = (data) => {
    const submitData = {
      title: data.title,
      source,
    };
    onSubmit(submitData).then(() => {
      onClose();
    });
  };

  return (
    <Modal
      okText='Create'
      onClose={onClose}
      onOk={handleSubmit(handleCreateLessons)}
      {...others}
      header='Add new lesson'>
      <CreateLessonForm
        handleSetSource={handleSetSource}
        register={register}
        errors={errors}
      />
    </Modal>
  );
};

export default CreateLessonModal;
