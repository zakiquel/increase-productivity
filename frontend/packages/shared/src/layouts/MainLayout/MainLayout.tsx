import { memo, ReactElement, ReactNode } from 'react'

import cls from './MainLayout.module.scss'
import { classNames } from '../../lib/classNames/classNames'

interface MainLayoutProps {
	className?: string
	header: ReactElement
	children: ReactNode
	sidebar: ReactElement
}

export const MainLayout = memo((props: MainLayoutProps) => {
	const { className, header, children, sidebar } = props

	return (
		<div className={classNames(cls.MainLayout, {}, [className])}>
			<div className={cls.header}>{header}</div>
			<div className={cls.sidebar}>{sidebar}</div>
			<div className={cls.content}>{children}</div>
		</div>
	)
})
