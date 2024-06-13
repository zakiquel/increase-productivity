import { Suspense } from 'react';

import { AuthorizationFormAsync } from '../AuthorizationForm/AuthorizationForm.async';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Modal } from '@/shared/ui/Modal/Modal';

interface AuthorizationModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const AuthorizationModal = (props: AuthorizationModalProps) => {
  const { className, isOpen, onClose } = props;
  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <AuthorizationFormAsync onSuccess={onClose} onReset={onClose} />
      </Suspense>
    </Modal>
  );
};
