import { AppLink } from '@repo/shared/ui';
import { memo } from 'react';

import { SidebarItemType } from '../../model/types/sidebar.js';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
}

export const SidebarItem = memo(({ item }: SidebarItemProps) => (
  <AppLink
    to={item.path}
    activeClassName={cls.active}
    className={cls.sidebar_button}
  >
    <span className={cls.link}>{item.text}</span>
  </AppLink>
));
