import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from '@repo/shared/ui';

import { CompanyReport } from '../CompanyReport/CompanyReport';

export function DownloadCompanyReportButton() {
  return (
    <PDFDownloadLink document={<CompanyReport />} fileName="Отчёт">
      {({ loading }) => (
        <Button fullWidth disabled={loading} size="s">
          Сформировать отчёт
        </Button>
      )}
    </PDFDownloadLink>
  );
}
