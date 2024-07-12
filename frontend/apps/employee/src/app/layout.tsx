import { MainLayout } from '@repo/shared/layouts'
import '@repo/shared/styles'
import 'material-symbols'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="app">
        <MainLayout
          className="layout"
          header={<Navbar />}
          children={children}
          sidebar={<Sidebar />}
        />
      </body>
    </html>
  )
}
