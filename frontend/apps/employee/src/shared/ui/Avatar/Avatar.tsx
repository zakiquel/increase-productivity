import { CSSProperties, useMemo } from 'react'

import { AppImage } from '@repo/shared/ui'
import { Icon } from '@repo/shared/ui'

import UserIcon from '../../assets/icons/user-filled.svg'

import { classNames, Mods } from '@repo/shared/lib'

import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

export const Avatar = (props: AvatarProps) => {
  const { className, src, size = 100, alt } = props

  const mods: Mods = {}

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  )

  const errorFallback = <Icon width={size} height={size} Svg={UserIcon} />

  return (
    <AppImage
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
    />
  )
}
