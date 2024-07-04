import { Button } from '@repo/shared/ui'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import cls from './EventCardModal.module.scss'
import { Text as TextTag } from '@repo/shared/ui'
import event from '@/shared/assets/images/event.png'
import { IEventCard } from '../../model/types/eventCard'
import { Tag } from '@/shared/ui/Tag'
import { TVariant } from '@/shared/ui/Tag/Tag'

interface IProductItemModal {
	isOpen: boolean
	setOpen: (arg: boolean) => void
}

export const EventCardModal: React.FC<IProductItemModal & IEventCard> = ({
	title,
	img = '',
	description,
	price,
	isOpen,
	setOpen,
	date,
	tag,
}) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					onClick={() => setOpen(false)}
					className={cls.background}
				>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						onClick={e => e.stopPropagation()}
						className={cls.Modal}
					>
						<div className={cls.img_wrapper}>
							<Image
								src={event}
								alt='event'
								width={493}
								height={315}
								className={cls.img}
							/>
							<Tag TagVariant={tag as TVariant} className={cls.tag}>
								{tag}
							</Tag>
						</div>

						<div className={cls.text_wrapper}>
							<div>
								<TextTag size='s' title={title} />
								<TextTag size='s' className={cls.text} text={description} />
							</div>
							<div className={cls.wrapper}>
								<div>
									<TextTag text={price?.toString() + ' Б'} />
									<p className={cls.date}>{date}</p>
								</div>
								{tag === 'Новые' && <Button>Принять участие</Button>}
								{tag === 'Ожидание' && (
									<Button variant='secondary' size='l'>
										Отменить
									</Button>
								)}
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
