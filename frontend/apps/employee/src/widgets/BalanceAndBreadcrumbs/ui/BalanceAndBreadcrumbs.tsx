import { classNames } from '@repo/shared/lib'

import { Breadcrumbs } from '@/entities/Breadcrumbs'

import cls from './Header.module.scss'

export const BalanceAndBreadcrumbs = () => (
    <div className={cls.header}>
      <Breadcrumbs />
      <span className={classNames(cls.balance, {}, [])}>Баланс: 100000</span>
    </div>
  )
