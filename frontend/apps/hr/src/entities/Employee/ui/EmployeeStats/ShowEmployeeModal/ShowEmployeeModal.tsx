import { classNames } from '@repo/shared/lib';
import { Loader, Modal } from '@repo/shared/ui';
import { Suspense } from 'react';

import { EmployeeCardInfo } from '../../../model/types/employee';
import { ShowEmployeeFormAsync } from '../ShowEmployeeForm/ShowEmployeeForm.async';

interface ShowEmployeeModalProps {
  employee: EmployeeCardInfo;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ShowEmployeeModal = (props: ShowEmployeeModalProps) => {
  const { employee, className, isOpen, onClose } = props;
  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <ShowEmployeeFormAsync employee={employee} onClose={onClose} />
      </Suspense>
    </Modal>
  );
};
