'use client'

import { Page } from '@/widgets/Page'
import cls from './EventPage.module.scss'
import dataCommon from '../model/data/tempData.json'
import dataUser from '../model/data/tempDataUser.json'
import { EventCard } from '@/entities/EventCard'
import { memo } from 'react'
const EventPage = () => {
	return (
		<Page>
			<div className={cls.wrapper}>
				{dataCommon.map(event => (
					<EventCard key={event.id} {...event} />
				))}
			</div>
			<div className={cls.wrapper}>
				{dataUser.map(event => (
					<EventCard key={event.id} {...event} />
				))}
			</div>
		</Page>
	)
}

export default memo(EventPage)