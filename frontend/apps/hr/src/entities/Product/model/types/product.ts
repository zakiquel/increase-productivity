export interface Product {
  id: number;
  title: string;
  price: number;
  img?: string;
  description: string;
}

export interface ProductRequest {
  id: number;
  name: string;
  date: string;
  theme: string;
  description: string;
  price: number;
  img?: string;
  tag: string;
}
