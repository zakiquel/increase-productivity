import React, { memo } from 'react';

import { OpportunityList } from '@/widgets/OpportunityList';
import { TariffList } from '@/widgets/TariffList';

import cls from './MainPage.module.scss';

const MainPage = () => (
  <main className={cls.MainPage}>
    <OpportunityList />
    <TariffList />
  </main>
);

export default memo(MainPage);
