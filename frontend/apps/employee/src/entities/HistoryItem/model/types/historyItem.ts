interface IStatus {
  time: string
  status: string
}

interface IHistoryItem {
  id: number
  title: string
  price: number
  img?: string
  statuses: IStatus[]
}
