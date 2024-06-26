import { useCallback, useState } from 'react';

import { Note } from '@/entities/Employee';
import { Button } from '@/shared/ui/Button';
import { FormHeader } from '@/shared/ui/Form/FormHeader';
import { TextArea } from '@/shared/ui/TextArea';

import cls from './EditNoteForm.module.scss';

export interface EditNoteFormProps {
  note: Note;
  onClose: () => void;
}

const EditNoteForm = (props: EditNoteFormProps) => {
  const { note, onClose } = props;
  const [newNote, setNewNote] = useState<string>(note.text);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleSubmit = () => {
    onClose();
  };

  return (
    <div className={cls.EditNoteForm}>
      <FormHeader
        title={`Заметка о сотруднике от ${note.date}`}
        onClose={handleClose}
        className={cls.form_header}
      />

      <TextArea
        value={newNote}
        onChange={event => setNewNote(event.target.value)}
        maxLength={300}
      />
      <Button
        fullWidth
        className={cls.form_button}
        onClick={handleSubmit}
        disabled={newNote === note.text}
      >
        Сохранить изменения
      </Button>
    </div>
  );
};

export default EditNoteForm;
