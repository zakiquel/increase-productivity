'use client'
import cls from './Breadcrumbs.module.scss'
import { IAllPath, getPathName } from '../model/selectors/getPathName'
import { memo, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AppLink } from '@/shared/ui/AppLink'

export const Breadcrumbs = memo(() => {
	const [pathObj, setPathObj] = useState<IAllPath[]>([])
	const params = usePathname()
	useEffect(() => {
		params && setPathObj(getPathName(params))
	}, [params])
	return (
		<div className={cls.Breadcrumbs}>
			{pathObj.map(value => (
				<AppLink to={value.path} key={value.path} variant='black'>
					{value.value}
				</AppLink>
			))}
			<p className={cls.balance}>Баланс: 100000</p>
		</div>
	)
})
