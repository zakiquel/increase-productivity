import { classNames } from '@repo/shared/lib';
import { Icon } from '@repo/shared/ui';
import { memo } from 'react';

import logo from '@/shared/assets/icons/redcat.staff.svg';

import cls from './Navbar.module.scss';

export const Navbar = memo(() => (
  <header className={cls.Navbar}>
    <div className={cls.navbar_wrapper}>
      <Icon Svg={logo} width={148} height={28} className={cls.navbar_logo} />
    </div>
    <div className={classNames(cls.navbar_wrapper, {}, [cls.wrap])}>
      <p>
        Валюта: <span>HR-коины</span>
      </p>
    </div>
  </header>
));
