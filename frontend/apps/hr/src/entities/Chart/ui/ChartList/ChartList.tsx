import { Button, Card, Text } from '@repo/shared/ui';
import { memo } from 'react';

import {
  CompanyMetricsChart,
  CompanyRiskChart,
  CompanyValuesChart,
} from '@/entities/Diagrams';

import cls from './ChartList.module.scss';

export const ChartList = memo(() => (
  <section className={cls.ChartList}>
    <Card variant="light" padding="16" className={cls.hello_card}>
      <Text text="Привет!" size="m" className={cls.hello} />
      <Text
        text="На этой странице будет отображаться главная информация о компании.
                  Заполни раздел «Ценности и Метрики», чтобы мы могли показать тебе статистику."
        size="m"
        className={cls.hello_text}
      />
      <Button size="s" className={cls.hello_button}>
        Кнопка
      </Button>
    </Card>

    <Card variant="light" className={cls.canvas_container}>
      <CompanyRiskChart />
    </Card>
    <Card variant="light" className={cls.canvas_container}>
      <CompanyValuesChart />
    </Card>
    <Card variant="light" className={cls.canvas_container}>
      <CompanyMetricsChart />
    </Card>
  </section>
));
