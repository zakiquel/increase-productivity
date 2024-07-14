import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

import { formatDate } from "../../lib/formatDate";

import { Chart1 } from "./Chart1";
import { Chart2 } from "./Chart2";
import { Chart3 } from "./Chart3";
import { Chart4 } from "./Chart4";

import { Employee } from "@/entities/Employee";

Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
});

const styles = StyleSheet.create({
  document: {
    fontFamily: "Roboto",
  },
  title: {
    fontSize: 44,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
  },
  mainPage: {
    height: "100%",
    fontFamily: "Roboto",
    padding: 20,
    display: "flex",
  },
  mainView: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  chartPage: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    justifyContent: "space-between",
  },
  chartView: {},
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

interface EmployeeReportProps {
  employeeId: Employee["id"];
}

export function EmployeeReport({ employeeId }: EmployeeReportProps) {
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
          <Chart1 />
        </View>
      </Page>
      <Page style={styles.chartPage}>
        <View style={styles.chartView}>
          <Chart2 />
        </View>
        <View style={styles.chartView}>
          <Chart2 />
        </View>
      </Page>
      <Page style={styles.chartPage}>
        <View style={styles.chartView}>
          <Chart3 />
        </View>
        <View style={styles.chartView}>
          <Chart4 />
        </View>
      </Page>
    </Document>
  );
}
