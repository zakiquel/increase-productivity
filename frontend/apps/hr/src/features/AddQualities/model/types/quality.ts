export interface Quality {
  quality_id: number;
  quality_name: string;
}

export interface QualityScheme {
  value_id: number;
  value_name: string;
  qualities: Quality[];
}

export interface QualityPostRequest {
  value_id: number;
  employee_id: number;
  quality1: {
    id: number;
    mark: number;
  };
  quality2: {
    id: number;
    mark: number;
  };
  quality3: {
    id: number;
    mark: number;
  };
  quality4: {
    id: number;
    mark: number;
  };
  quality5: {
    id: number;
    mark: number;
  };
}
