import { ReactNode } from 'react';

import { AuthHeader } from '@/widgets/Header';

import cls from './layout.module.scss';

import '@repo/shared/styles';
import 'material-symbols';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="app">
        <AuthHeader />
        <div className={cls.content}>{children}</div>
      </body>
    </html>
  );
}
