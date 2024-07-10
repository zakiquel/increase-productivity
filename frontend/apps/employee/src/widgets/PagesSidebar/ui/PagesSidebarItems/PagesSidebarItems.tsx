import { classNames } from '@repo/shared/lib'
import cls from './PagesSidebarItems.module.scss'
import { AppLink } from '@/shared/ui/AppLink'

interface IItem {
  text: string
  active?: boolean
  path: string
}

export const PagesSidebarItems = (props: IItem) => {
  const { text, active = false, path } = props
  return (
    <AppLink
      className={classNames(cls.item, {}, [active ? cls['active'] : undefined])}
      to={path}
      variant="sidebarItem"
      size="xxs"
    >
      {text}
    </AppLink>
  )
}
