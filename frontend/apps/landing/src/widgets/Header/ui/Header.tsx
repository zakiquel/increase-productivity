'use client';

import Image from 'next/image';

import logo from '@/shared/assets/images/redcat.staff.png';

import cls from './Header.module.scss';

export const AuthHeader = () => (
  <header className={cls.Header}>
    <div className={cls.container}>
      <Image src={logo} alt="logo" />
    </div>
  </header>
);
