import { Card } from '@repo/shared/ui'

import cls from './ProfileInfo.module.scss'
import { ProfileItem } from '../../model/enums/enum'
import { Text as TextTag } from '@repo/shared/ui'

interface IData {
	title: ProfileItem
	description: string
	color?: string
}

export const getProfileItem = () => {
	const profileData: IData[] = [
		{
			title: ProfileItem.department,
			description: 'Разработки',
		},
		{
			title: ProfileItem.email,
			description: 'alexandernevski@gmail.ru',
			color: '#9800F5',
		},
		{
			title: ProfileItem.phoneNumber,
			description: '+79239532274',
			color: '#9800F5',
		},
		{
			title: ProfileItem.dateOfBirthday,
			description: '05.02.1999',
		},
		{
			title: ProfileItem.dateOfHiring,
			description: '01.01.2020',
		},
	]

	return profileData
}

export const ProfileInfo = () => (
	<Card
		variant='light'
		padding='16'
		className={cls.Profile}
		style={{ borderRadius: '4px' }}
	>
		<TextTag size='s' text={'Информация'} />
		<dl>
			{getProfileItem().map((d, key) => (
				<div key={key}>
					<dt>{d.title}</dt>
					<dd style={{ color: d.color }}>{d.description}</dd>
				</div>
			))}
		</dl>
	</Card>
)
