import { classNames } from "@repo/shared/lib";
import { Loader, Modal,  } from "@repo/shared/ui";
import { Suspense } from 'react';

import { AuthorizationFormAsync } from '../AuthorizationForm/AuthorizationForm.async';

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
