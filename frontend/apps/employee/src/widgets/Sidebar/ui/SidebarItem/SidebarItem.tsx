import { memo } from 'react'

import { SidebarItemType } from '../../model/types/sidebar'

import cls from './SidebarItem.module.scss'
import { AppLink } from '@/shared/ui/AppLink'

interface SidebarItemProps {
	item: SidebarItemType
}

export const SidebarItem = memo(({ item }: SidebarItemProps) => (
	<AppLink className={cls.item} activeClassName={cls.active}  to={item.path} size='xs'>
		<span className={cls.link}>{item.text}</span>
	</AppLink>
))
