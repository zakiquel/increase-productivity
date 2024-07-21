import { classNames } from '@repo/shared/lib';
import { Card, Text, AppImage } from '@repo/shared/ui';
import { memo, useState } from 'react';

import {
  Employee,
  EmployeeDocuments,
  EmployeeNotes,
  EmployeeProfile,
  Note,
} from '@/entities/Employee';
import { DownloadEmployeeReportButton } from '@/features/DownloadEmployeeReportButton';
import { EditNoteModal } from '@/features/EditNote';
import Blanc from '@/shared/assets/images/rectangle.png';
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
    position: '2',
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
        {/* TODO: Макет страницы сотрудника обновился, поэтому кнопку скорее всего нужно будет перенести */}
        <DownloadEmployeeReportButton employeeId={1} />

        <Card variant="light" padding="24" className={cls.chart_card}>
          <Text title="Динамика метрик" size="s" className={cls.title} />
          <AppImage src={Blanc} />
        </Card>
        <Card variant="light" padding="24" className={cls.chart_card}>
          <Text title="Динамика метрик" size="s" className={cls.title} />
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
