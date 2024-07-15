import { pathNames } from '@/shared/const/route'
import { Page } from '@/widgets/Page'
import { PageSidebar } from '@/widgets/PagesSidebar'

const PageItems = pathNames.filter(
  (data) => data.value === 'История' || data.value === 'Товары'
)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Page>
      <PageSidebar items={PageItems} />
      {children}
    </Page>
  )
}
