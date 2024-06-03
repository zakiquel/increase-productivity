import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const {
    className,
  } = props;
  return (
    <div className={classNames(cls.ProfilePage, {}, [className])}>
      ProfilePage
    </div>
  );
};

export default memo(ProfilePage);
