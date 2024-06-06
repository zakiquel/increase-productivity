import React, { memo, useState } from 'react';

import { RegistrationModal } from '@/features/Registration';
import { Button } from '@/shared/ui/Button';

import cls from './MainPage.module.scss';

const MainPage = () => {
  const [isRegistration, setIsRegistration] = useState(false);

  return (
    <main className={cls.MainPage}>
      Лучший сервис для HR-специалиста!
      <Button variant='white' onClick={() => setIsRegistration(true)}>
        Зарегистрироваться
      </Button>
      <RegistrationModal
        isOpen={isRegistration}
        onClose={() => setIsRegistration(false)}
      />
    </main>
  );
};

export default memo(MainPage);
