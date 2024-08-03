import { classNames } from '@repo/shared/lib';
import { Button, Loader, Modal, TextArea } from '@repo/shared/ui';
import { Suspense, useState } from 'react';

import cls from './EditNoteModal.module.scss';

interface EditNoteModalProps {
  date: string;
  text: string;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  onSave: (text: string) => void;
}

export const EditNoteModal = (props: EditNoteModalProps) => {
  const { date, text, className, isOpen, onClose, onDelete, onSave } = props;
  const [newNote, setNewNote] = useState<string>(text);
  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <div className={cls.EditNoteForm}>
          <div className={cls.header}>
            <h4>{`Заметка от ${date}`}</h4>
            <Button variant="close" size="l" onClick={onClose}>
              <span className="material-symbols-outlined">close</span>
            </Button>
          </div>
          <TextArea
            value={newNote}
            onChange={(event) => setNewNote(event.target.value)}
            maxLength={300}
          />
          <div className={cls.buttons}>
            <Button
              fullWidth
              variant="secondary"
              className={cls.form_button}
              onClick={onDelete}
            >
              Удалить
            </Button>
            <Button
              fullWidth
              className={cls.form_button}
              onClick={() => onSave(newNote)}
              disabled={newNote === text}
            >
              Сохранить
            </Button>
          </div>
        </div>
      </Suspense>
    </Modal>
  );
};
