import { AppLink , Button , Icon } from "@repo/shared/ui";
import { memo, useState } from 'react';

import { AuthorizationModal } from '@/features/Authorization';
import { RegistrationModal } from '@/features/Registration';
import tophr from '@/shared/assets/icons/top-hr.svg';

import cls from './Navbar.module.scss';

const links = [
  { title: 'Возможности', link: '/' },
  { title: 'Тарифы', link: '/' },
];

export const Navbar = memo(() => {
  const [isRegistration, setIsRegistration] = useState(false);
  const [isAuthorization, setIsAuthorization] = useState(false);
  const isAuth = true;
  if (isAuth)
    return (
      <header className={cls.Navbar}>
        <div className={cls.navbar_wrapper}>
          <Icon
            Svg={tophr}
            width={88}
            height={24}
            className={cls.navbar_logo}
          />
        </div>
        <div className={cls.navbar_wrapper}>
          <Button size="xs" variant="secondary" className={cls.navbar_button}>
            Валюта не выбрана
          </Button>
        </div>
      </header>
    );
  return (
    <header className={cls.Navbar}>
      <div className={cls.wrapper}>
        <Icon Svg={tophr} width={88} height={24} />
        <nav>
          <ul className={cls.links}>
            {links.map((item, index) => (
              <li key={index}>
                <AppLink to={item.link}>{item.title}</AppLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={cls.buttons}>
          <Button variant="ghost" onClick={() => setIsAuthorization(true)}>
            Войти
          </Button>
          <Button variant="secondary" onClick={() => setIsRegistration(true)}>
            Регистрация
          </Button>
        </div>
      </div>
      <AuthorizationModal
        isOpen={isAuthorization}
        onClose={() => setIsAuthorization(false)}
      />
      <RegistrationModal
        isOpen={isRegistration}
        onClose={() => setIsRegistration(false)}
      />
    </header>
  );
});
