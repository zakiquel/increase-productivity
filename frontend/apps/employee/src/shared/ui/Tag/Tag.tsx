import { ReactNode } from 'react'
import cls from './Tag.module.scss'
import { classNames } from '@repo/shared/lib'

export type TVariant = 'Новые' | 'Ожидание' | 'Отказ' | 'Отказ'

const TagType = {
	Новые: 'new',
	Ожидание: 'wait',
	Отказ: 'refused',
	Одобрено: 'approved',
}

interface ITag {
	children: ReactNode
	className?: string
	TagVariant?: TVariant
}

export const Tag = ({ children, className, TagVariant = 'Новые' }: ITag) => {
	return (
		<div
			className={classNames(cls.tag, {}, [className, cls[TagType[TagVariant]]])}
		>
			<p>{children}</p>
		</div>
	)
}
