import { Button, Card, Text } from '@repo/shared/ui';

import { Employee, Note } from '@/entities/Employee';
import { AddNote } from '@/features/AddNote';
import { EditNote } from '@/features/EditNote';

import cls from './EmployeeNotes.module.scss';

const notes: Note[] = [
  { id: 1, text: 'Note', date: '2024-04-12' },
  { id: 2, text: 'another note', date: '2024-05-01' },
  { id: 3, text: 'Noooooooooote', date: '2024-06-20' },
  { id: 4, text: 'lalala', date: '2024-06-20' },
  { id: 5, text: 'Заметка от 22 июня', date: '2024-06-22' },
  { id: 6, text: 'Noooooooooote', date: '2024-06-25' },
];

interface EmployeeNotesProps {
  employee: Employee;
}

export const EmployeeNotes = (props: EmployeeNotesProps) => {
  const { employee } = props;

  return (
    <Card variant="light" padding="16" className={cls.EmployeeNotes}>
      <Text title="Заметки" size="s" bold />
      <AddNote />
      {notes && (
        <div className={cls.notes}>
          <div className={cls.notes_list}>
            {notes.slice(0, 8).map((note, key) => (
              <EditNote note={note} key={key} />
            ))}
          </div>
          {notes.length > 8 && (
            <Button variant="ghost" size="s">
              Открыть все
            </Button>
          )}
        </div>
      )}
    </Card>
  );
};
