import { lazy } from 'react'

export const RequestsEventsPageAsync = lazy(
	() => import('./RequestsEventsPage')
)
