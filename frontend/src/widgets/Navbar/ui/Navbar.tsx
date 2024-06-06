import { memo } from 'react';

import cls from './Navbar.module.scss';

import tophr from '@/shared/assets/icons/top-hr.svg';
import { Icon } from '@/shared/ui/Icon';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';

const links = [{ title: 'Возможности', link: '/' }, { title: 'Тарифы', link: '/' }];

export const Navbar = memo(() => (
  <header className={cls.Navbar}>
    <div className={cls.wrapper}>
      <Icon Svg={tophr} width={126} height={34} />
      <nav>
        <ul className={cls.links}>
          {links.map((item, index) => (
            <li key={index}><AppLink to={item.link}>{item.title}</AppLink></li>
          ))}
        </ul>
      </nav>
      <div className={cls.buttons}>
        <Button variant='clear'>Войти</Button>
        <Button variant='white'>Регистрация</Button>
      </div>
    </div>
  </header>
));
