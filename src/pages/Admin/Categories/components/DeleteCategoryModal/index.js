/** @format */
import Modal from '@/components/Modal';
import { FormattedMessage } from 'react-intl';

const DeleteCategoryModal = ({ onClose, onSubmit, category, ...others }) => {
  const handleSubmit = () => {
    onSubmit(category._id).then(() => {
      onClose();
    });
  };

  return (
    <Modal
      onOk={handleSubmit}
      okText={<FormattedMessage id='common.delete' />}
      onClose={onClose}
      {...others}
      header='Delete category'>
      <FormattedMessage id='tutor.setting.modal.delete.content' />{' '}
      <b>"{category && category.categoryName}"</b>?
    </Modal>
  );
};

export default DeleteCategoryModal;
