import { Card } from '@/shared/ui/Card';
import { File } from '@/shared/ui/File';
import { Text } from '@/shared/ui/Text';

import cls from './EmployeeDocuments.module.scss';

export const EmployeeDocuments = () => (
  <Card variant='light' padding='24' className={cls.EmployeeDocuments}>
    <Text title='Документы о сотруднике' size='s' className={cls.title} />
    <File />
  </Card>
);
