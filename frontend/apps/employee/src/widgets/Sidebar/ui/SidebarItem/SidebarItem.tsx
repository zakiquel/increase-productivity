import { memo } from 'react'

import { SidebarItemType } from '../../model/types/sidebar'

import { AppLink } from '@/shared/ui/AppLink'

import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
  item: SidebarItemType
}

export const SidebarItem = memo(({ item }: SidebarItemProps) => (
  <AppLink className={cls.item} activeClassName={cls.active} to={item.path} size="s">
    <span>{item.text}</span>
  </AppLink>
))
