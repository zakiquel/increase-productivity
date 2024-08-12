import '@repo/shared/styles';
import 'material-symbols';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="app">{children}</body>
    </html>
  );
}
