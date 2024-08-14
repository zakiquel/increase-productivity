import { PDFDownloadLink } from '@react-pdf/renderer';
import { classNames } from '@repo/shared/lib';
import { Button, Card } from '@repo/shared/ui';

import { EmployeeReport } from '../EmployeeReport/EmployeeReport';

import type { Employee } from '@/entities/Employee';

interface DownloadEmployeeReportButtonProps {
  employeeId: Employee['id'];
  className?: string;
}

export function DownloadEmployeeReportButton({
  employeeId,
  className,
}: DownloadEmployeeReportButtonProps) {
  return (
    <Card
      variant="light"
      className={classNames('', {}, [className])}
      padding="16"
    >
      <PDFDownloadLink
        document={<EmployeeReport employeeId={employeeId} />}
        fileName="Отчёт"
      >
        {({ loading }) => (
          <Button
            fullWidth
            disabled={loading}
            size="m"
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
