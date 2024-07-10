import cls from './HistoryPage.module.scss'
import { memo } from 'react'
import { HistoryItem } from '@/entities/HistoryItem'
import items from '../models/data/tempData.json'

import { Page } from '@/widgets/Page'
import { PageSidebar } from '@/widgets/PagesSidebar/ui/PagesSidebar/PagesSidebar'
import { pathNames } from '@/shared/const/route'

const PageItems = pathNames.filter(
  (data) => data.value === 'История' || data.value === 'Товары'
)

const HistoryPage = () => {
  return (
    <Page className={cls.page}>
      <PageSidebar items={PageItems} />
      <div className={cls.History}>
        {items.map((item, index) => (
          <HistoryItem key={index} {...item} />
        ))}
      </div>
    </Page>
  )
}

export default memo(HistoryPage)
