import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from '@react-pdf/renderer';
import { useEffect, useState } from 'react';

import { canvasToSrc } from '../../lib/canvasToSrc';
import { formatDate } from '../../lib/formatDate';

import { StoreProvider } from '@/app/providers/StoreProvider';
import {
  CompanyMetricsChart,
  // CompanyQualityChart,
  CompanyRiskChart,
  CompanyValuesChart,
} from '@/entities/Diagrams';

Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf',
});

const styles = StyleSheet.create({
  document: {
    fontFamily: 'Roboto',
  },
  title: {
    fontSize: 44,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  mainPage: {
    height: '100%',
    fontFamily: 'Roboto',
    padding: 20,
    display: 'flex',
  },
  mainView: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartPage: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'space-between',
  },
  chartView: {},
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export function CompanyReport() {
  const [companyMetricsSrc, setCompanyMetricsSrc] = useState('');
  // const [companyQualitiesSrc, setCompanyQualitiesSrc] = useState('');
  const [companyRiskSrc, setCompanyRiskSrc] = useState('');
  const [companyValuesSrc, setCompanyValuesSrc] = useState('');

  useEffect(() => {
    const generateData = async () => {
      const companyMetricsSrc = await canvasToSrc(
        <StoreProvider>
          <CompanyMetricsChart />
        </StoreProvider>,
      );
      // const companyQualitiesSrc = await canvasToSrc(<CompanyQualityChart />);
      const companyRiskSrc = await canvasToSrc(
        <StoreProvider>
          <CompanyRiskChart />
        </StoreProvider>,
      );
      const companyValuesSrc = await canvasToSrc(
        <StoreProvider>
          <CompanyValuesChart />
        </StoreProvider>,
      );
      setCompanyMetricsSrc(companyMetricsSrc);
      // setCompanyQualitiesSrc(companyQualitiesSrc);
      setCompanyRiskSrc(companyRiskSrc);
      setCompanyValuesSrc(companyValuesSrc);
    };
    generateData();
  });

  return (
    <Document language="ru" style={styles.document}>
      <Page style={styles.mainPage}>
        <View style={styles.mainView}>
          <Text style={styles.subtitle}>Отчёт по компании</Text>
          <Text style={styles.subtitle}>{formatDate(new Date())}</Text>
        </View>
      </Page>
      <Page style={styles.chartPage}>
        <View style={styles.chartView}>
          <Image src={companyMetricsSrc} />
        </View>
        {/* <View style={styles.chartView}>
          <Image src={companyQualitiesSrc} />
        </View> */}
      </Page>
      <Page style={styles.chartPage}>
        <View style={styles.chartView}>
          <Image src={companyRiskSrc} />
        </View>
        <View style={styles.chartView}>
          <Image src={companyValuesSrc} />
        </View>
      </Page>
    </Document>
  );
}
