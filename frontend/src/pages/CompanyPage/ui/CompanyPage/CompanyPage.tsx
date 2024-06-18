import { memo } from 'react';

import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from '@/widgets/Page';
import { PresetList } from '@/widgets/PresetList';
import { ValuesAndQualities } from '@/widgets/ValuesAndQualities';

import cls from './CompanyPage.module.scss';

interface CompanyPageProps {
  className?: string;
}

const CompanyPage = (props: CompanyPageProps) => {
  const {
    className,
  } = props;
  return (
    <Page className={classNames(cls.CompanyPage, {}, [className])}>
      <ValuesAndQualities />
      <PresetList />
    </Page>
  );
};

export default memo(CompanyPage);
