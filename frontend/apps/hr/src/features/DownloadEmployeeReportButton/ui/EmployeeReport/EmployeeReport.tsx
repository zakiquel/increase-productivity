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

import {
  PersonalMetricsChart,
  PersonalQualitiesChart,
  PersonalRiskChart,
  PersonalValuesChart,
} from '@/entities/Diagrams';
import { Employee } from '@/entities/Employee';

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

interface EmployeeReportProps {
  employeeId: Employee['id'];
}

export function EmployeeReport({ employeeId }: EmployeeReportProps) {
  const [persinalMetricsSrc, setPersonalMetricsSrc] = useState('');
  const [personalQualitiesSrc, setPersonalQualitiesSrc] = useState('');
  const [personalRiskSrc, setPersonalRiskSrc] = useState('');
  const [personalValuesSrc, setPersonalValuesSrc] = useState('');

  useEffect(() => {
    const generateData = async () => {
      const personalMetricsSrc = await canvasToSrc(<PersonalMetricsChart />);
      const personalQualitiesSrc = await canvasToSrc(
        <PersonalQualitiesChart />,
      );
      const personalRiskSrc = await canvasToSrc(<PersonalRiskChart />);
      const personalValuesSrc = await canvasToSrc(<PersonalValuesChart />);
      setPersonalMetricsSrc(personalMetricsSrc);
      setPersonalQualitiesSrc(personalQualitiesSrc);
      setPersonalRiskSrc(personalRiskSrc);
      setPersonalValuesSrc(personalValuesSrc);
    };
    generateData();
  });

  return (
    <Document language="ru" style={styles.document}>
      <Page style={styles.mainPage}>
        <View style={styles.mainView}>
          <Text style={styles.subtitle}>Отчёт по сотруднику</Text>
          <Text style={[styles.title, { marginTop: 24 }]}>Иван</Text>
          <Text style={[styles.title, { marginBottom: 24 }]}>Иванов</Text>
          <Text style={styles.subtitle}>{formatDate(new Date())}</Text>
        </View>
      </Page>
      <Page style={styles.chartPage}>
        <View style={styles.chartView}>
          <Image src={persinalMetricsSrc} />
        </View>
        <View style={styles.chartView}>
          <Image src={personalQualitiesSrc} />
        </View>
      </Page>
      <Page style={styles.chartPage}>
        <View style={styles.chartView}>
          <Image src={personalRiskSrc} />
        </View>
        <View style={styles.chartView}>
          <Image src={personalValuesSrc} />
        </View>
      </Page>
    </Document>
  );
}
