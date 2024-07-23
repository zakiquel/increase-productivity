interface IStatus {
  time: string;
  status: string;
}

export interface HistoryItem {
  id: number;
  title: string;
  price: number;
  img?: string;
  statuses: IStatus[];
}

export interface Product {
  id: number;
  title: string;
  price: number;
  img?: string;
  description: string;
}
