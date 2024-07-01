import { memo } from 'react'

import { classNames } from '@repo/shared/lib'
import { Card } from '@repo/shared/ui'
import { Page } from '@/widgets/Page'

import cls from './Personal.module.scss'
import { ProfileInfo, ProfilePhoto } from '@/entities/Profile'
import { ProfileSidebar } from '@/widgets/ProfileSidebar'

interface PersonalageProps {
	className?: string
}
// TODO: добавить список мероприятийs
const PersonalPage = (props: PersonalageProps) => {
	const { className } = props
	return (
		<Page className={classNames(cls.PersonalPage, {}, [className])}>
			<div className={classNames(cls.PersonalPage_info, {}, [className])}>
				<ProfilePhoto />
				<ProfileInfo />
			</div>
			<div className={classNames(cls.PersonalPage_list, {}, [className])}>
				<ProfileSidebar />

				<Card variant='light' style={{ borderRadius: '4px' }}>
					Список трsанзакций
				</Card>
			</div>
		</Page>
	)
}

export default memo(PersonalPage)
