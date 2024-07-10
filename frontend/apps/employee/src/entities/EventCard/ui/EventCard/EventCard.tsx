import Image from 'next/image'
import cls from './EventCard.module.scss'
import event from '@/shared/assets/images/event.png'
import { Card, Text as TextTag } from '@repo/shared/ui'
import { IEventCard } from '../../model/types/eventCard'
import { useState } from 'react'
import { EventCardModal } from '../EventCardModal/EventCardModal'
import { Tag } from '@/shared/ui/Tag'
import { TVariant } from '@/shared/ui/Tag/Tag'

export const EventCard = (props: IEventCard) => {
  const { tag, title, price, date } = props
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card
      padding="0"
      variant="light"
      className={cls.event_card}
      style={{ borderRadius: '8px' }}
    >
      <div onClick={() => setIsOpen(true)}>
        <Image src={event} alt="event" width={404} height={221} className={cls.img} />

        <Tag className={cls.tag} TagVariant={tag as TVariant}>
          {tag}
        </Tag>

        <div className={cls.wrapper}>
          <TextTag size="m" text={title} />
          <div className={cls.wrp}>
            <span className={cls.price}>{price?.toString() + ' Б'}</span>
            <span className={cls.date}>{date}</span>
          </div>
        </div>
      </div>
      <EventCardModal isOpen={isOpen} setOpen={() => setIsOpen(false)} {...props} />
    </Card>
  )
}
