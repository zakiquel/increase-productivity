export interface Quality {
  id: number;
  name: string;
}

export interface Value {
  id?: number;
  name: string;
  edit?: boolean;
  qualities: Quality[];
}
