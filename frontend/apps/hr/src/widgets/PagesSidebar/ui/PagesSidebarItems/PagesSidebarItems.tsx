import { classNames } from '@repo/shared/lib'
import { AppLink } from '@repo/shared/ui'

import cls from './PagesSidebarItems.module.scss'

interface IItem {
	text: string
	active?: boolean
	path: string
}

export const PagesSidebarItems = (props: IItem) => {
	const { text, active = false, path } = props
	return (
		<AppLink
			className={classNames(cls.item, {}, [
				active ? cls.active : undefined,
				cls.link,
			])}
			to={path}
		>
			{text}
		</AppLink>
	)
}
