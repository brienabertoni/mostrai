import type { Indicator } from "../types/Indicator";

interface IndicatorExplanationProps {
  indicator: Indicator;
}

export function IndicatorExplanation({
  indicator,
}: IndicatorExplanationProps) {
  return (
    <section className="explanation">
      <span>💡 Entenda o indicador</span>

      <h2>
        O que significa esse número?
      </h2>

      <p>
        {indicator.description}
      </p>

      <small>
        Fonte: {indicator.source}
      </small>
    </section>
  );
}