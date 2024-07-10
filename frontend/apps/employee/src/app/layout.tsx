import { MainLayout } from '@repo/shared/layouts'
import cls from './MainLayout.module.scss'
import '@repo/shared/styles'
import 'material-symbols'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="app">
        <MainLayout
          className={cls.layout}
          header={<Navbar />}
          children={children}
          sidebar={<Sidebar />}
        />
      </body>
    </html>
  )
}
