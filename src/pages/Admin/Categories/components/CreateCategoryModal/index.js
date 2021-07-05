/** @format */
import Modal from '@/components/Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import CreateCategoryForm from '../CreateCategoryForm';
import { errorSchema } from './error';

const CreateCategoryModal = ({ onClose, onSubmit, ...others }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(errorSchema) });

  const handleCreate = (data) => {
    const finalizeData = {
      categoryName: data.categoryName.trim(),
      thumbnail: data.thumbnail[0],
    };
    onSubmit(finalizeData).then(() => {
      onClose();
    });
  };

  return (
    <Modal
      onOk={handleSubmit(handleCreate)}
      okText={<FormattedMessage id='common.create' />}
      onClose={onClose}
      {...others}
      header='Create category'>
      <CreateCategoryForm register={register} errors={errors} />
    </Modal>
  );
};

export default CreateCategoryModal;
