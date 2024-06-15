import { memo } from 'react';

import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const {
    className,
  } = props;
  return (
    <Page className={classNames('', {}, [className])}>
      ProfilePage
    </Page>
  );
};

export default memo(ProfilePage);