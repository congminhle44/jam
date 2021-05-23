/** @format */
import { useAtom } from 'jotai';

import { showModalAtom } from '@/store/modal';
import Button, { ButtonSizes, ButtonVariants } from '../Button';
import TestModal from './Test Modal';

const ModalJotai = () => {
  const [, showModal] = useAtom(showModalAtom);

  const renderModal = () => {
    showModal({
      component: TestModal,
      props: {
        header: 'This is a test modal',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.',
      },
    });
  };

  return (
    <Button
      onClick={renderModal}
      variant={ButtonVariants.Solid}
      size={ButtonSizes.Small}>
      Modal
    </Button>
  );
};

export default ModalJotai;
