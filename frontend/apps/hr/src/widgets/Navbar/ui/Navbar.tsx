import { AppLink , Button , Icon , Text } from "@repo/shared/ui";
import { memo, useState } from 'react';

import { AuthorizationModal } from '@/features/Authorization';
import { RegistrationModal } from '@/features/Registration';
import { AvatarDropdown } from "@/features/avatarDropdown";
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
        <div className={cls.wrapper}>
          <Icon Svg={tophr} width={75} height={20} />
          <div className={cls.profile}>
            <Text text="Иван" size="s"/>
            <AvatarDropdown />
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
    )
  return (
    <header className={cls.Navbar}>
      <div className={cls.wrapper}>
        <Icon Svg={tophr} width={75} height={20} />
         <nav>
          <ul className={cls.links}>
            {links.map((item, index) => (
              <li key={index}>
                <AppLink to={item.link}>
                  {item.title}
                </AppLink>
              </li>
            ))}
          </ul>
         </nav>
        <div className={cls.buttons}>
          <Button
            variant='ghost'
            onClick={() => setIsAuthorization(true)}
          >
            Войти
          </Button>
          <Button
            variant='secondary'
            onClick={() => setIsRegistration(true)}
          >
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
