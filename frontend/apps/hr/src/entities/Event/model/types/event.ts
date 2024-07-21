export interface Event {
  id: number;
  img?: string;
  title?: string;
  date?: string;
  price?: number;
  tag: string;
  description: string;
}

export interface EventRequest {
  id: number;
  name: string;
  date: string;
  theme: string;
  description: string;
  price: number;
  img?: string;
  status: string;
}
