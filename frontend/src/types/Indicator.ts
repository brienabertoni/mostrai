export interface Indicator {
  id: number;
  category: string;
  title: string;
  value: number;
  unit: string;
  description: string;
  source: string;
  history: {
    year: number;
    value: number;
  }[];
}