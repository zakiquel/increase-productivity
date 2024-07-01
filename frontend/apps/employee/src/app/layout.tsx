'use client'
import { MainLayout } from '@repo/shared/layouts'
import cls from './MainLayout.module.scss'
import './index.scss'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={cls.body}>
				<MainLayout
					header={<Navbar />}
					children={children}
					sidebar={<Sidebar />}
				/>
			</body>
		</html>
	)
}
