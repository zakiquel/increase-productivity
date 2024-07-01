import logout from '@/shared/assets/icons/logout.svg'
import { Avatar, Icon, Button } from '@repo/shared/ui'
import cls from './ProfileBlock.module.scss'
import { AppLink } from '@/shared/ui/AppLink'

export function ProfileBlock() {
	return (
		<div className={cls.ProfileBlock}>
			<div className={cls.profile_info}>
				<Avatar size={40} />
				<div className={cls.profile_text}>
					<p className={cls.name}>Александр</p>
					<p className={cls.position}>Баллы: 69</p>
				</div>
			</div>
			<div className={cls.buttons}>
				<AppLink
					to='/profile'
					className={cls.personal_page_link}
					variant='primary'
				>
					Профиль
				</AppLink>
				<Button size='s' variant='exit'>
					<Icon Svg={logout} width={14} height={14} />
				</Button>
			</div>
		</div>
	)
}
