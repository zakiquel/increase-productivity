import { Button, Card, Icon, Text, TextArea } from '@repo/shared/ui';
import { useState } from 'react';

import { Note } from '../../model/types/employee';

import cancel from '@/shared/assets/icons/cancel.svg';

import cls from './EmployeeNotes.module.scss';

interface EmployeeNotesProps {
  notes?: Note[];
  handleEditNote?: (note: Note) => void;
}

export const EmployeeNotes = (props: EmployeeNotesProps) => {
  const { notes, handleEditNote } = props;
  const [note, setNote] = useState<string>('');
  return (
    <Card variant="light" padding="24" className={cls.EmployeeNotes}>
      <Text title="Заметки о сотруднике" size="s" className={cls.title} />
      <TextArea
        placeholder="Текст сообщения (до 300 символов)"
        maxLength={300}
        value={note}
        onChange={(event) => setNote(event.target.value)}
      />
      {notes && handleEditNote && (
        <div className={cls.notes}>
          {notes.map((note) => (
            <Button
              key={note.id}
              variant="outline"
              size="s"
              onClick={() => handleEditNote(note)}
              addonRight={<Icon Svg={cancel} />}
            >
              Заметка от {note.date}
            </Button>
          ))}
        </div>
      )}
      <Button>Добавить заметку</Button>
    </Card>
  );
};
