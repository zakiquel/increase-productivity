import { classNames } from '@repo/shared/lib';
import { Card } from '@repo/shared/ui';
import { memo } from 'react';

import { ProfileInfo, ProfilePhoto } from '@/entities/Profile';
import { Page } from '@/widgets/Page';
import { ProfileSidebar } from '@/widgets/ProfileSidebar';

import cls from './Personal.module.scss';

interface PersonalPageProps {
  className?: string;
}
const PersonalPage = (props: PersonalPageProps) => {
  const { className } = props;
  return (
    <Page className={classNames(cls.PersonalPage, {}, [className])}>
      <div className={classNames(cls.PersonalPage_info, {}, [className])}>
        <ProfilePhoto />
        <ProfileInfo />
      </div>
      <div className={classNames(cls.PersonalPage_list, {}, [className])}>
        <ProfileSidebar />

        <Card variant="light" style={{ borderRadius: '4px' }}>
          Транзакции
        </Card>
      </div>
    </Page>
  );
};

export default memo(PersonalPage);
