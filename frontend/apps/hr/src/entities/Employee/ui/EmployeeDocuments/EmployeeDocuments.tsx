import { Card, File, Text } from "@repo/shared/ui";

import cls from "./EmployeeDocuments.module.scss";

export const EmployeeDocuments = () => (
  <Card variant="light" padding="24" className={cls.EmployeeDocuments}>
    <Text title="Документы о сотруднике" size="s" className={cls.title} />
    <File />
  </Card>
);
