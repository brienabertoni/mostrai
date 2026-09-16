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

export const indicators: Indicator[] = [
  {
    id: 1,
    category: "Saúde",
    title: "Cobertura da atenção básica",
    value: 82,
    unit: "%",
    description:
      "Percentual estimado da população coberta por serviços de atenção básica.",
    source: "Dados públicos",
    history: [
      { year: 2021, value: 74 },
      { year: 2022, value: 77 },
      { year: 2023, value: 79 },
      { year: 2024, value: 82 },
    ],
  },

  {
    id: 2,
    category: "Educação",
    title: "Frequência escolar",
    value: 76,
    unit: "%",
    description:
      "Percentual de estudantes que frequentam regularmente a instituição de ensino.",
    source: "Dados públicos",
    history: [
      { year: 2021, value: 69 },
      { year: 2022, value: 71 },
      { year: 2023, value: 74 },
      { year: 2024, value: 76 },
    ],
  },

  {
    id: 3,
    category: "Saneamento",
    title: "Acesso ao saneamento",
    value: 91,
    unit: "%",
    description:
      "Percentual da população com acesso a serviços de saneamento.",
    source: "Dados públicos",
    history: [
      { year: 2021, value: 86 },
      { year: 2022, value: 88 },
      { year: 2023, value: 89 },
      { year: 2024, value: 91 },
    ],
  },
];