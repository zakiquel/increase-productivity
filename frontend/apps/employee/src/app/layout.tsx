import { MainLayout } from '@repo/shared/layouts';
import '@repo/shared/styles';
import 'material-symbols';
import { ReactNode } from 'react';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="app">
        <MainLayout header={<Navbar />} sidebar={<Sidebar />}>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
