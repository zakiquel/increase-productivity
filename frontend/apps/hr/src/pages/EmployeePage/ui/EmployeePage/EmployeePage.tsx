import { classNames } from '@repo/shared/lib';
import { memo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { EmployeeInfo } from '../EmployeeInfo/EmployeeInfo';
import { EmployeeValues } from '../EmployeeValues/EmployeeValues';

import { Note } from '@/entities/Employee';
import { Page } from '@/widgets/Page';

import cls from './EmployeePage.module.scss';

interface EmployeePageProps {
  className?: string;
}

const EmployeePage = (props: EmployeePageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  const [isEditNote, setIsEditNote] = useState(false);
  const [editingNote, setEditingNode] = useState<Note | null>(null);

  if (!id) {
    return null;
  }

  const handleNoteClick = (note: Note) => {
    setIsEditNote(true);
    setEditingNode(note);
  };

  return (
    <Page className={classNames(cls.EmployeePage, {}, [className])}>
      <EmployeeInfo />
      <EmployeeValues />
    </Page>
  );
};

export default memo(EmployeePage);

/* <EmployeeNotes
  notes={testEmployee.notes}
  handleEditNote={handleNoteClick}
/>
<EmployeeDocuments />
{isEditNote && editingNote && (
  <EditNoteModal
    isOpen={isEditNote}
    onClose={() => setIsEditNote(false)}
    note={editingNote}
  />
)}
<div className={cls.employee_charts}>
  <Card variant="light" padding="24" className={cls.chart_card}>
    <Text title="Динамика метрик" size="s" className={cls.title} />
    <AppImage src={Blanc} />
  </Card>
  <Card variant="light" padding="24" className={cls.chart_card}>
    <Text title="Динамика метрик" size="s" className={cls.title} />
    <AppImage src={Blanc} />
  </Card>
</div> */
