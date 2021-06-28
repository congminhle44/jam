/** @format */
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Modal from '@/components/Modal';
import { errorSchema } from './errors';
import EditLessonForm from '../EditLessonForm';
import { FormattedMessage } from 'react-intl';

const EditLessonModal = ({ onClose, onSubmit, lessonInfo, ...others }) => {
  const [source, setSource] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(errorSchema),
  });

  const handleSetSource = (file) => setSource(file);

  const handleEditLesson = (data) => {
    const submitData = {
      title: data.title,
      source,
    };
    onSubmit({ ...submitData, id: lessonInfo._id }).then(() => {
      onClose();
    });
  };

  return (
    <Modal
      onOk={handleSubmit(handleEditLesson)}
      okText={<FormattedMessage id='common.update' />}
      onClose={onClose}
      {...others}
      header={<FormattedMessage id='tutor.course.modal.edit.title' />}>
      <EditLessonForm
        handleSetSource={handleSetSource}
        register={register}
        errors={errors}
        lessonInfo={lessonInfo}
      />
    </Modal>
  );
};

export default EditLessonModal;
