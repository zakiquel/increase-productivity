import { memo, useState } from 'react';

import {
  Employee,
  EmployeeDocuments,
  EmployeeNotes,
  EmployeeProfile,
  Note,
} from '@/entities/Employee';
import { EditNoteModal } from '@/features/EditNote';
import Blanc from '@/shared/assets/images/rectangle.png';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

import cls from './EmployeePage.module.scss';

interface EmployeePageProps {
  className?: string;
}

const testEmployee: Employee = {
  id: 1,
  personalInfo: {
    firstName: 'Иван',
    lastName: 'Иванов',
    dateOfBirth: '01.01.1990',
    position: 2,
    workExperience: 3,
    salary: 100000,
    email: 'ivanov@mail.com',
    phoneNumber: '+7 800 555 35-35',
  },
  notes: [
    {
      id: 1,
      text: 'это заметка, которую можно отредактировать',
      date: '24.06.2024',
    },
    {
      id: 2,
      text: 'это еще одна заметка, которую можно отредактировать',
      date: '25.06.2024',
    },
    {
      id: 3,
      text: 'это еще одна заметка',
      date: '25.06.2024',
    },
    {
      id: 4,
      text: 'это заметка',
      date: '27.06.2024',
    },
  ],
  documents: [],
};

const EmployeePage = (props: EmployeePageProps) => {
  const { className } = props;

  const [isEditNote, setIsEditNote] = useState(false);
  const [editingNote, setEditingNode] = useState<Note | null>(null);

  const handleNoteClick = (note: Note) => {
    setIsEditNote(true);
    setEditingNode(note);
  };
  return (
    <Page className={classNames(cls.EmployeePage, {}, [className])}>
      {' '}
      <div className={cls.employee_info}>
        <EmployeeProfile data={testEmployee.personalInfo} />
        <EmployeeNotes
          notes={testEmployee.notes}
          handleEditNote={handleNoteClick}
        />
        <EmployeeDocuments />
      </div>
      <div className={cls.employee_charts}>
        <Card variant='light' padding='24' className={cls.chart_card}>
          <Text title='Динамика метрик' size='s' className={cls.title} />
          <AppImage src={Blanc} />
        </Card>
        <Card variant='light' padding='24' className={cls.chart_card}>
          <Text title='Динамика метрик' size='s' className={cls.title} />
          <AppImage src={Blanc} />
        </Card>
      </div>
      {isEditNote && editingNote && (
        <EditNoteModal
          isOpen={isEditNote}
          onClose={() => setIsEditNote(false)}
          note={editingNote}
        />
      )}
    </Page>
  );
};

export default memo(EmployeePage);
