import { classNames } from '@repo/shared/lib'
import cls from './Header.module.scss'
import { Breadcrumbs } from '@/entities/Breadcrumbs'

export const BalanceAndBreadcrumbs = () => {
  return (
    <div className={cls.header}>
      <Breadcrumbs />
      <span className={classNames(cls.balance, {}, [])}>Баланс: 100000</span>
    </div>
  )
}
