import { Button, Card, Text, TextArea } from '@repo/shared/ui';
import { useState } from 'react';

import {
  Employee,
  Note,
} from '../../../../entities/Employee/model/types/employee';

import cls from './EmployeeNotes.module.scss';

const notes: Note[] = [
  {
    id: 1,
    text: 'Текст заметки',
    date: '24.07.2024',
  },
  {
    id: 2,
    text: 'Текст заметки',
    date: '24.07.2024',
  },
  {
    id: 3,
    text: 'Текст заметки',
    date: '24.07.2024',
  },
  {
    id: 4,
    text: 'Текст заметки',
    date: '24.07.2024',
  },
  {
    id: 5,
    text: 'Текст заметки',
    date: '24.07.2024',
  },
  {
    id: 6,
    text: 'Текст заметки',
    date: '24.07.2024',
  },
  {
    id: 7,
    text: 'Текст заметки',
    date: '24.07.2024',
  },
  {
    id: 8,
    text: 'Текст заметки',
    date: '24.07.2024',
  },
];

interface EmployeeNotesProps {
  employee: Employee;
}

export const EmployeeNotes = (props: EmployeeNotesProps) => {
  const { employee } = props;
  const [note, setNote] = useState<string>('');
  const [isEditNote, setIsEditNote] = useState(false);
  const [editingNote, setEditingNode] = useState<Note | null>(null);
  const handleNoteClick = (note: Note) => {
    setIsEditNote(true);
    setEditingNode(note);
  };

  return (
    <Card variant="light" padding="16" className={cls.EmployeeNotes}>
      <Text title="Заметки" size="s" bold />
      <TextArea
        placeholder="Текст до 300 символов с пробелами. Чтобы сохранить заметку, нажмите «Enter» или кликните в пустоту."
        maxLength={300}
        value={note}
        className={cls.note}
        onChange={(event) => setNote(event.target.value)}
      />
      {notes && (
        <div className={cls.notes}>
          <div className={cls.notes_list}>
            {notes.map((note) => (
              <Button
                key={note.id}
                variant="secondary"
                size="s"
                className={cls.note_btn}
              >
                Заметка от {note.date}
              </Button>
            ))}
          </div>
          <Button variant="ghost" size="s">
            Открыть все
          </Button>
        </div>
      )}
    </Card>
  );
};
