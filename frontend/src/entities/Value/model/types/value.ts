export interface Quality {
  id: number;
  name: string;
}

export interface Value {
  id: number;
  name: string;
  qualities: Quality[];
}
