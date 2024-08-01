import { TextArea, Toast } from '@repo/shared/ui';
import { useState } from 'react';
import { useToaster } from 'rsuite';

export const AddNote = () => {
  const [note, setNote] = useState<string>('');

  const toaster = useToaster();

  const createNote = () => {
    if (note.trim().length > 0) {
      // здесь будет отправка
      setNote('');
      toaster.push(
        <Toast
          text="Заметка добавлена!"
          size="l"
          variant="success"
          addOnLeft={
            <span className="material-symbols-outlined">check_circle</span>
          }
        />,
        { placement: 'bottomCenter' },
      );
    }
  };

  return (
    <TextArea
      placeholder="Текст до 300 символов с пробелами. Чтобы сохранить заметку, 
нажмите «Enter» или кликните в пустоту."
      maxLength={300}
      minRows={7}
      maxRows={7}
      value={note}
      onChange={(event) => setNote(event.target.value)}
      enterFunction={createNote}
      onBlur={createNote}
    />
  );
};
