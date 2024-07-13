'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

import { PagesSidebarItems } from '../PagesSidebarItems/PagesSidebarItems'

import { pathNames } from '@/shared/const/route'

import cls from './PagesSidebar.module.scss'

interface IItems {
  items: (typeof pathNames)[0][]
}

export const PageSidebar = (props: IItems) => {
  const { items } = props
  const params = usePathname()?.split('/').at(-1)
  const ItemList = useMemo(
    () =>
      items.map((data, key) => (
        <PagesSidebarItems
          text={data.value}
          path={data.path}
          key={key}
          active={params === data.pathName}
        />
      )),
    [items, params]
  )
  return (
    <aside className={cls.aside}>
      <ul>{ItemList}</ul>
    </aside>
  )
}
