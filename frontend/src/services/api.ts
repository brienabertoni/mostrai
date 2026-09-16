import type { Indicator } from "../types/Indicator";

const API_URL = "http://localhost:3000/api";

interface IndicatorsResponse {
  city: string;
  state: string;
  indicators: Indicator[];
}

export async function getIndicators(): Promise<IndicatorsResponse> {
  const response = await fetch(`${API_URL}/indicators`);

  if (!response.ok) {
    throw new Error("Não foi possível carregar os indicadores.");
  }

  return response.json();
}