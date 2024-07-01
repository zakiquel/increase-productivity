import { classNames } from '@repo/shared/lib';
import { Loader, Modal } from '@repo/shared/ui';
import { Suspense } from 'react';

import EditNoteForm from '../EditNoteForm/EditNoteForm';

import { Note } from '@/entities/Employee';

interface EditNoteModalProps {
  note: Note;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const EditNoteModal = (props: EditNoteModalProps) => {
  const { note, className, isOpen, onClose } = props;
  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <EditNoteForm onClose={onClose} note={note} />
      </Suspense>
    </Modal>
  );
};
