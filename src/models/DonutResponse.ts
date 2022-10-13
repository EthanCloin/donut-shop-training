export interface DonutListResponse {
  count: number;
  results: Donut[];
}

export interface Donut {
  id: number;
  ref: string;
  photo: string;
  photo_attribution: string;
  name: string;
}

export interface DonutDetail extends Donut {
  calories: number;
  extras: string[];
}
