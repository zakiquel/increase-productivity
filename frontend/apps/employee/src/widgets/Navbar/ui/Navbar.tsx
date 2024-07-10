import { memo } from 'react'
import tophr from '@/shared/assets/icons/top-hr.svg'

import cls from './Navbar.module.scss'

import { Icon } from '@repo/shared/ui'
import Link from 'next/link'
import { BalanceAndBreadcrumbs } from '@/widgets/BalanceAndBreadcrumbs'

export const Navbar = memo(() => {
  return (
    <header className={cls.Navbar_user}>
      <div className={cls.icon_wrapper}>
        <Link href={'/'}>
          <Icon Svg={tophr} width={88} height={24} className={cls.icon} />
        </Link>
      </div>
      <BalanceAndBreadcrumbs />
    </header>
  )
})
