/** @format */
import Modal from '@/components/Modal';
import { FormattedMessage } from 'react-intl';

const DeleteUserModal = ({ onClose, onSubmit, userInfo, ...others }) => {
  const handleSubmit = () => {
    onSubmit(userInfo._id).then(() => {
      onClose();
    });
  };

  return (
    <Modal
      onOk={handleSubmit}
      okText={<FormattedMessage id='common.delete' />}
      onClose={onClose}
      {...others}
      header='Delete user'>
      <FormattedMessage id='tutor.setting.modal.delete.content' />{' '}
      <b>"{userInfo && userInfo.fullName}"</b>?
    </Modal>
  );
};

export default DeleteUserModal;
