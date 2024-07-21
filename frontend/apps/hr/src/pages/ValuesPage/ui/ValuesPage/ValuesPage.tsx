import { classNames } from '@repo/shared/lib';
import { Card } from '@repo/shared/ui';
import React, { memo } from 'react';

import values from '../../model/data/tempCompanyValues2.json';
import metrics from '../../model/data/tempMetrics.json';
import { CompanyValues } from '../CompanyValues/CompanyValues';

import { Value } from '@/entities/Value';
import { Page } from '@/widgets/Page';

import cls from './ValuesPage.module.scss';

interface CompanyPageProps {
  className?: string;
}

const ValuesPage = (props: CompanyPageProps) => {
  const { className } = props;
  const testValues = values;
  const emptyValues: Value[] = [];

  return (
    <Page className={classNames(cls.CompanyPage, {}, [className])}>
      <CompanyValues values={testValues} />
      <Card variant="light" className={cls.company_metrics}>
        <div className={cls.metrics_header}>
          <h2>Метрики</h2>
          <p>
            По метрикам строятся прогнозы о состоянии сотрудников и коллектива
            компании
          </p>
        </div>
        <ul className={cls.metrics_list}>
          {metrics.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </Card>
    </Page>
  );
};

export default memo(ValuesPage);
