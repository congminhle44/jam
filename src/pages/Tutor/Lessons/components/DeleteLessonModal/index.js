/** @format */
import Modal from '@/components/Modal';

const DeleteLessonModal = ({ onClose, onSubmit, lessonInfo, ...others }) => {
  const handleSubmit = () => {
    onSubmit(lessonInfo._id).then(() => {
      onClose();
    });
  };

  return (
    <Modal
      onOk={handleSubmit}
      okText='Delete'
      onClose={onClose}
      {...others}
      header='Delete lesson'>
      Are you sure you want to delete <b>"{lessonInfo && lessonInfo.title}"</b>?
    </Modal>
  );
};

export default DeleteLessonModal;
