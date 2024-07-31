export interface Event {
  id: number;
  name: string;
  event_date: string;
  reward: number;
  format?: string;
  imgSrc?: string;
  description?: string;
}

export interface EventRequest {
  id: number;
  name: string;
  date: string;
  theme: string;
  description: string;
  price: number;
  img?: string;
  tag: string;
}
