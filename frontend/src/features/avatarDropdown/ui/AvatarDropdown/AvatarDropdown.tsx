import React, { memo } from 'react';

import avatar from "@/shared/assets/images/avatar.jpg";
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from "@/shared/ui/Avatar";
import { Dropdown } from "@/shared/ui/Popups";

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;

  const items = [
    {
      content: 'Профиль',
    },
    {
      content: 'Настройки',
    },
    {
      content: 'Выйти',
    },
  ];

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      direction="bottom left"
      items={items}
      trigger={<Avatar size={35} src={avatar} />}
    />
  )
});
