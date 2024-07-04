import { Avatar, Card, Text as TextTag } from '@repo/shared/ui'

import cls from './ProfilePhoto.module.scss'

export const ProfilePhoto = () => (
	<Card
		variant='light'
		padding='32'
		className={cls.Profile}
		style={{ borderRadius: '4px' }}
	>
		<Avatar size={143} alt='profile-photo' />
		<TextTag size='s' text={'Невский Александр Иванович'} />
		<TextTag size='xs' text={'Веб-разработчик'} />
	</Card>
)
