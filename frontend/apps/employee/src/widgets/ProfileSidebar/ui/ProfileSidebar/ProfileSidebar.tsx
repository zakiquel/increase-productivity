import { memo, useMemo } from 'react'

import cls from './ProfileSidebar.module.scss'
import { ProfileSidebarItem } from '../ProfileSidebarItems/ProfileSidebarItems'
import { sidebarItemProfile } from '../../model'

const sidebarItemsList: sidebarItemProfile[] = [
	{
		path: '/',
		text: 'История транзакций',
	},
]

export const ProfileSidebar = memo(() => {
	const itemsList = useMemo(
		() =>
			sidebarItemsList.map((item, key) => (
				<ProfileSidebarItem item={item} key={key} />
			)),
		[sidebarItemsList]
	)

	return (
		<aside className={cls.Sidebar}>
			<div role='navigation'>{itemsList}</div>
		</aside>
	)
})
