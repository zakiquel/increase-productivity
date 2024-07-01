import { memo } from 'react'
import { sidebarItemProfile } from '../../model/types/sidebarProfile'

import { AppLink } from '@/shared/ui/AppLink'

interface SidebarItemProps {
	item: sidebarItemProfile
}

export const ProfileSidebarItem = memo(({ item }: SidebarItemProps) => (
	<AppLink to={item.path} variant='black' size='s'>
		{item.text}
	</AppLink>
))
