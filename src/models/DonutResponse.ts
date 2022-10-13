export interface DonutListResponse {
  count: number;
  results: Donut[];
}

export interface Donut {
  id: number;
  ref: string;
  photo: string;
  photo_attribution: string;
}

export interface DonutDetail extends Donut {
  name: string;
  calories: number;
  extras: string[];
}
