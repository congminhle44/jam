import { useAtom } from 'jotai';

import { closeModalAtom, derivedModalAtom } from '@/store/modal';

import Portal from '@/components/Portal';

const ModalProvider = () => {
  const [stack] = useAtom(derivedModalAtom);
  const [, closeModal] = useAtom(closeModalAtom);

  return (
    <Portal
      mount={true}
      portalDataName={'modal-provider-gate'}
      aria-label="ModalProvider"
      aria-labelledby="modal-provider"
      aria-modal={true}
    >
      {stack.map((modal) => (
        <modal.component
          key={`MODAL_${modal.id}`}
          {...modal.props}
          onClose={() => closeModal(modal.id)}
          isOpen={modal.isOpen}
        />
      ))}
    </Portal>
  );
};

export default ModalProvider;
