import type { Indicator } from "../types/Indicator";

interface IndicatorCardProps {
  indicator: Indicator;
  selected: boolean;
  onClick: () => void;
}

export function IndicatorCard({
  indicator,
  selected,
  onClick,
}: IndicatorCardProps) {
  return (
    <button
      className={`indicator-card ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <span className="category">
        {indicator.category}
      </span>

      <h2>{indicator.title}</h2>

      <strong>
        {indicator.value}
        {indicator.unit}
      </strong>
    </button>
  );
}