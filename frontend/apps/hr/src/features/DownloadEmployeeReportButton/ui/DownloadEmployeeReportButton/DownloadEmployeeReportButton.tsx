import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "@repo/shared/ui";

import { EmployeeReport } from "../EmployeeReport/EmployeeReport";

import type { Employee } from "@/entities/Employee";

interface DownloadEmployeeReportButtonProps {
  employeeId: Employee["id"];
}

export function DownloadEmployeeReportButton({
  employeeId,
}: DownloadEmployeeReportButtonProps) {
  return (
    <PDFDownloadLink
      document={<EmployeeReport employeeId={employeeId} />}
      fileName="Отчёт"
    >
      {({ loading }) => (
        <Button fullWidth disabled={loading}>
          Сформировать отчёт
        </Button>
      )}
    </PDFDownloadLink>
  );

  // return <Button {...props}>Сформировать отчёт</Button>;
}
