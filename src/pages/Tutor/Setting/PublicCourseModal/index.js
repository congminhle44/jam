/** @format */
import Modal from '@/components/Modal';
import { FormattedMessage } from 'react-intl';

const PublicCourseModal = ({ onClose, onSubmit, courseData, ...others }) => {
  const handleSubmit = () => {
    onSubmit().then(() => {
      onClose();
    });
  };

  return (
    <Modal
      onOk={handleSubmit}
      okText={
        !courseData.isPublished ? (
          <FormattedMessage id='tutor.course.setting.public.button' />
        ) : (
          <FormattedMessage id='tutor.course.setting.unpublic.button' />
        )
      }
      onClose={onClose}
      {...others}
      header={<FormattedMessage id='tutor.setting.modal.public.title' />}>
      {!courseData.isPublished ? (
        <FormattedMessage id='tutor.setting.modal.public.content' />
      ) : (
        <FormattedMessage id='tutor.setting.modal.unpublic.content' />
      )}{' '}
      <b>"{courseData && courseData.courseName}"</b>?
    </Modal>
  );
};

export default PublicCourseModal;
