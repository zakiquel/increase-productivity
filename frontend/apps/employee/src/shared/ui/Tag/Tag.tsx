import { classNames } from '@repo/shared/lib'
import { ReactNode } from 'react'

import cls from './Tag.module.scss'

export type TVariant = 'NEW' | 'WAITING' | 'REJECTED' | 'APPROVED'

const TagType = {
  NEW: 'new',
  WAITING: 'wait',
  REJECTED: 'refused',
  APPROVED: 'approved',
}

interface ITag {
  children: ReactNode
  className?: string
  TagVariant?: TVariant
}

export const Tag = ({ children, className, TagVariant = 'NEW' }: ITag) => (
    <span className={classNames(cls.tag, {}, [className, cls[TagType[TagVariant]]])}>
      {children}
    </span>
  )
