export interface Dataset {
  label: string;
  data: number[];
  fill: boolean;
  borderColor?: string;
}

export interface Chart {
  title: string;
  labels: string[];
  datasets: Dataset[];
}
