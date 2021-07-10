/** @format */
import Modal from '@/components/Modal';
import { FormattedMessage } from 'react-intl';

const DeleteUserModal = ({ onClose, onSubmit, courseInfo, ...others }) => {
  const handleSubmit = () => {
    onSubmit(courseInfo._id).then(() => {
      onClose();
    });
  };

  return (
    <Modal
      onOk={handleSubmit}
      okText={<FormattedMessage id='common.delete' />}
      onClose={onClose}
      {...others}
      header='Delete course'>
      <FormattedMessage id='tutor.setting.modal.delete.content' />{' '}
      <b>"{courseInfo && courseInfo.courseName}"</b>?
    </Modal>
  );
};

export default DeleteUserModal;
