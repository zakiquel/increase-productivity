import { PDFDownloadLink } from '@react-pdf/renderer';
import { classNames } from '@repo/shared/lib';
import { Button, Card, Text } from '@repo/shared/ui';

import { EmployeeReport } from '../EmployeeReport/EmployeeReport';

import type { Employee } from '@/entities/Employee';

import cls from './DownloadEmployeeReportButton.module.scss';

interface DownloadEmployeeReportButtonProps {
  employee: Employee['id'];
  className?: string;
}

export function DownloadEmployeeReportButton({
  employee,
  className,
}: DownloadEmployeeReportButtonProps) {
  return (
    <Card
      variant="light"
      className={classNames('', {}, [className])}
      padding="16"
    >
      <Text title="Отчет по сотруднику" size="s" bold />
      <Text
        text="Страница в формате PDF будет загружена на ваш компьютер"
        size="s"
        variant="grey"
        className={cls.text}
      />
      <PDFDownloadLink
        document={<EmployeeReport employee={employee} />}
        fileName="Отчёт"
      >
        {({ loading }) => (
          <Button
            fullWidth
            disabled={loading}
            size="s"
            addonRight={
              <span className="material-symbols-outlined">download</span>
            }
          >
            Сформировать отчёт
          </Button>
        )}
      </PDFDownloadLink>
    </Card>
  );
}
