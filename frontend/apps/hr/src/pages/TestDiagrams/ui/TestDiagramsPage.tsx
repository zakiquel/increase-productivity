import { classNames } from '@repo/shared/lib';
import { memo } from 'react';

import {
  CompanyMetricsChart,
  CompanyQualityChart,
  CompanyRiskChart,
  CompanyValuesChart,
  PersonalMetricsChart,
  PersonalQualitiesChart,
  PersonalRiskChart,
  PersonalValuesChart,
} from '@/entities/Diagrams';
import { Page } from '@/widgets/Page';

import styles from './TestDiagramsPage.module.scss';

interface TestDiagramsPageProps {
  className?: string;
}

const TestDiagramsPage = (props: TestDiagramsPageProps) => {
  const { className } = props;

  return (
    <Page className={classNames('', {}, [className])}>
      <h2>Диаграммы для компаний</h2>
      <div className={styles.diagram_container}>
        <div>
          <CompanyMetricsChart />
        </div>
        <div>
          <CompanyQualityChart />
        </div>
        <div>
          <CompanyRiskChart />
        </div>
        <div>
          <CompanyValuesChart />
        </div>
      </div>
      <br />
      <br />
      <br />
      <h2>Диаграммы по сотруднику</h2>
      <div className={styles.diagram_container}>
        <div>
          <PersonalMetricsChart />
        </div>
        <div>
          <PersonalQualitiesChart />
        </div>
        <div>
          <PersonalRiskChart />
        </div>
        <div>
          <PersonalValuesChart />
        </div>
      </div>
    </Page>
  );
};

export default memo(TestDiagramsPage);
