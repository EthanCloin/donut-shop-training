export interface DonutListResponse {
  count: number;
  results: Donut[];
}

export interface Donut {
  id: string;
  ref: string;
  photo: string;
  photo_attribution: string;
  name: string;
}

export interface DonutDetail extends Donut {
  calories: number;
  extras: string[];
}
