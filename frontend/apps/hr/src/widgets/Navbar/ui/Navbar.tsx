import { Button, Icon } from '@repo/shared/ui';
import { memo } from 'react';

import tophr from '@/shared/assets/icons/top-hr.svg';

import cls from './Navbar.module.scss';

export const Navbar = memo(() => (
  <header className={cls.Navbar}>
    <div className={cls.navbar_wrapper}>
      <Icon Svg={tophr} width={88} height={24} className={cls.navbar_logo} />
    </div>
    <div className={cls.navbar_wrapper}>
      <Button size="xs" variant="secondary" className={cls.navbar_button}>
        Валюта не выбрана
      </Button>
    </div>
  </header>
));
