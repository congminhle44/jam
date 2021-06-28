/** @format */
import Modal from '@/components/Modal';
import { FormattedMessage } from 'react-intl';

const DeleteCourseModal = ({ onClose, onSubmit, courseData, ...others }) => {
  const handleSubmit = () => {
    onSubmit().then(() => {
      onClose();
    });
  };

  return (
    <Modal
      onOk={handleSubmit}
      okText={<FormattedMessage id='common.delete' />}
      onClose={onClose}
      {...others}
      header={<FormattedMessage id='tutor.course.modal.delete.title' />}>
      <FormattedMessage id='tutor.setting.modal.delete.content' />{' '}
      <b>"{courseData && courseData.courseName}"</b>?
    </Modal>
  );
};

export default DeleteCourseModal;
