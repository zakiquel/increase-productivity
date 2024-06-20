import { Suspense } from 'react';

import { EditQualitiesFormAsync } from '../EditQualitiesForm/EditQualitiesForm.async';

import { Value } from '@/entities/Value';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Modal } from '@/shared/ui/Modal/Modal';

interface EditQualitiesModalProps {
  value: Value;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const EditQualitiesModal = (props: EditQualitiesModalProps) => {
  const { value, className, isOpen, onClose } = props;
  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <EditQualitiesFormAsync onClose={onClose} value={value} />
      </Suspense>
    </Modal>
  );
};
