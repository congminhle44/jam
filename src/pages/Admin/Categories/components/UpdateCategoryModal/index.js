/** @format */
import Modal from '@/components/Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import CreateCategoryForm from '../CreateCategoryForm';
import { errorSchema } from './error';

const UpdateCategoryModal = ({ onClose, onSubmit, category, ...others }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(errorSchema),
    defaultValues: {
      categoryName: category.categoryName,
    },
  });

  const handleUpdate = (data) => {
    const finalizeData = {
      id: category._id,
      categoryName: data.categoryName.trim(),
      thumbnail: data.thumbnail && data.thumbnail[0],
    };
    onSubmit(finalizeData).then(() => {
      onClose();
    });
  };

  return (
    <Modal
      onOk={handleSubmit(handleUpdate)}
      okText={<FormattedMessage id='common.update' />}
      onClose={onClose}
      {...others}
      header='Update category'>
      <CreateCategoryForm register={register} errors={errors} />
    </Modal>
  );
};

export default UpdateCategoryModal;
