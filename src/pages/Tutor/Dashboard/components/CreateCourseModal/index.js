/** @format */
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Modal from '@/components/Modal';
import { useCategories } from '@/queries/hooks/categories';
import { errorSchema } from '../../errors';
import CreateCourseForm from '../CreateCourseForm';

const CreateCourseModal = ({ onClose, onSubmit, ...others }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(errorSchema),
  });

  const [category, setCategory] = useState('');

  const { data: categories } = useCategories(1, '', '', '');

  useEffect(() => {
    if (categories) setCategory(categories.data[0].categoryID);
  }, [categories]);

  const onCreate = (data) => {
    const courseData = {
      ...data,
      courseType: category,
    };
    onSubmit(courseData).then(() => {
      onClose();
    });
  };

  const handleSetCategory = (newCategory) => setCategory(newCategory);
  return (
    <Modal
      onOk={handleSubmit(onCreate)}
      onClose={onClose}
      okText='Create'
      {...others}
      header='Create new course'>
      <CreateCourseForm
        register={register}
        category={category}
        errors={errors}
        categories={categories}
        setCategory={handleSetCategory}
      />
    </Modal>
  );
};

export default CreateCourseModal;
