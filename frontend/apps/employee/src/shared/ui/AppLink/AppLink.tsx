'use client'

import { memo, ReactNode } from 'react'
import { usePathname } from 'next/navigation'

import { classNames } from '@repo/shared/lib'

import cls from './AppLink.module.scss'
import Link from 'next/link'

export type AppLinkVariant =
  | 'primary'
  | 'white'
  | 'black'
  | 'filled'
  | 'breadcrumb'
  | 'sidebarItem'
export type AppLinkSize = 'xxs' | 'xs' | 's' | 'm' | 'l'

interface AppLinkProps {
  className?: string
  variant?: AppLinkVariant
  size?: AppLinkSize
  children?: ReactNode
  activeClassName?: string
  to: string
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    activeClassName = '',
    children,
    variant = 'primary',
    size = 'm',
    ...otherProps
  } = props
  const pathname = usePathname()
  return (
    <Link
      href={to}
      className={classNames(
        cls.AppLink,
        { [activeClassName]: pathname?.startsWith(to) },
        [cls[variant], cls[size], className]
      )}
      {...otherProps}
    >
      {children}
    </Link>
  )
})
