import { memo, useMemo } from 'react'

import { sidebarItemProfile } from '../../model'
import { ProfileSidebarItem } from '../ProfileSidebarItems/ProfileSidebarItems'

import cls from './ProfileSidebar.module.scss'

const sidebarItemsList: sidebarItemProfile[] = [
  {
    path: '/',
    text: 'История транзакций',
  },
]

export const ProfileSidebar = memo(() => {
  const itemsList = useMemo(
    () =>
      sidebarItemsList.map((item, key) => <ProfileSidebarItem item={item} key={key} />),
    []
  )

  return (
    <aside className={cls.Sidebar}>
      <div role="navigation">{itemsList}</div>
    </aside>
  )
})
