import { classNames } from '@repo/shared/lib';
import { memo } from 'react';

import { CompanyMetricsChart } from '@/entities/Diagrams';
import { Page } from '@/widgets/Page';

import styles from './TestDiagramsPage.module.scss';

interface TestDiagramsPageProps {
  className?: string;
}

const TestDiagramsPage = (props: TestDiagramsPageProps) => {
  const { className } = props;

  return (
    <Page className={classNames('', {}, [className])}>
      <div className={styles.diagram_grid_container}>
        <div className={styles.diagram_card}>
          <CompanyMetricsChart />
        </div>
      </div>
    </Page>
  );
};

export default memo(TestDiagramsPage);
