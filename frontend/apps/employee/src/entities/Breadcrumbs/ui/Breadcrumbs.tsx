'use client'

import { usePathname } from 'next/navigation'
import { memo, useEffect, useState } from 'react'

import { IAllPath, getPathName } from '../model/selectors/getPathName'

import { AppLink } from '@/shared/ui/AppLink'

import cls from './Breadcrumbs.module.scss'

export const Breadcrumbs = memo(() => {
  const [pathObj, setPathObj] = useState<IAllPath[]>([])
  const params = usePathname()
  useEffect(() => {
    if (params) {
      setPathObj(getPathName(params))
    }
  }, [params])
  return (
    <div className={cls.wrapper}>
      {pathObj.map((value) => {
        const node =
          value.value !== pathObj[pathObj.length - 1].value ? (
            <AppLink
              to={value.path}
              key={value.path}
              variant="breadcrumb"
              size="m"
              className={cls.defaultBreadcrumb}
            >
              {value.value}
            </AppLink>
          ) : (
            <AppLink
              to={value.path}
              key={value.path}
              variant="breadcrumb"
              size="m"
              className={cls.greyBreadcrumb}
            >
              {value.value}
            </AppLink>
          )

        return node
      })}
    </div>
  )
})
