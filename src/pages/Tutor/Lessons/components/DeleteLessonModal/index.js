/** @format */
import Modal from '@/components/Modal';
import { FormattedMessage } from 'react-intl';

const DeleteLessonModal = ({ onClose, onSubmit, lessonInfo, ...others }) => {
  const handleSubmit = () => {
    onSubmit(lessonInfo._id).then(() => {
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
      <b>"{lessonInfo && lessonInfo.title}"</b>?
    </Modal>
  );
};

export default DeleteLessonModal;
