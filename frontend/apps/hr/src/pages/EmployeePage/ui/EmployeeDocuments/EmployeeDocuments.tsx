import { Button, Card, File, Text } from '@repo/shared/ui';

import { Document, Employee } from '@/entities/Employee';

import cls from './EmployeeDocuments.module.scss';

const fileMock: File = {
  name: 'file.txt',
  type: 'text/plain',
  lastModified: Date.now(),
  size: 100,
  slice: () => new Blob(),
} as File;

const documents: Document[] = [
  {
    id: 1,
    file: fileMock,
    date: '24.07.2024',
  },
  {
    id: 2,
    file: fileMock,
    date: '24.07.2024',
  },
  {
    id: 3,
    file: fileMock,
    date: '24.07.2024',
  },
  {
    id: 4,
    file: fileMock,
    date: '24.07.2024',
  },
  {
    id: 5,
    file: fileMock,
    date: '24.07.2024',
  },
  {
    id: 6,
    file: fileMock,
    date: '24.07.2024',
  },
  {
    id: 7,
    file: fileMock,
    date: '24.07.2024',
  },
  {
    id: 8,
    file: fileMock,
    date: '24.07.2024',
  },
];

interface EmployeeDocumentsProps {
  employee: Employee;
}

export const EmployeeDocuments = (props: EmployeeDocumentsProps) => {
  const { employee } = props;

  return (
    <Card variant="light" padding="16" className={cls.EmployeeDocuments}>
      <Text title="Документы" size="s" className={cls.title} bold />
      <File className={cls.file} />
      {documents && (
        <div className={cls.documents}>
          <div className={cls.documents_list}>
            {documents.map((document) => (
              <Button
                key={document.id}
                variant="secondary"
                size="s"
                className={cls.document_btn}
              >
                Название документа
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
