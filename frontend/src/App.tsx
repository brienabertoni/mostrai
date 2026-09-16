import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { IndicatorCard } from "./components/IndicatorCard";
import { IndicatorChart } from "./components/IndicatorChart";
import { IndicatorExplanation } from "./components/IndicatorExplanation";

import { getIndicators } from "./services/api";

import type { Indicator } from "./types/Indicator";

import "./App.css";

function App() {
  const [indicators, setIndicators] = useState<Indicator[]>([]);
  const [selectedIndicator, setSelectedIndicator] =
    useState<Indicator | null>(null);

  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadIndicators() {
      try {
        setLoading(true);

        const data = await getIndicators();

        setIndicators(data.indicators);
        setCity(data.city);
        setState(data.state);

        setSelectedIndicator(data.indicators[0]);
      } catch (error) {
        setError(
          "Não foi possível carregar os indicadores."
        );
      } finally {
        setLoading(false);
      }
    }

    loadIndicators();
  }, []);

  if (loading) {
    return (
      <main className="status">
        <p>Carregando indicadores...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="status">
        <p>{error}</p>

        <button
          onClick={() => window.location.reload()}
        >
          Tentar novamente
        </button>
      </main>
    );
  }

  return (
    <div className="app">
      <Header city={city} state={state} />

      <main className="container">
        <section className="hero">
          <span>Indicadores sociais</span>

          <h1>
            Entenda os dados
            <br />
            da sua cidade.
          </h1>

          <p>
            Informações públicas apresentadas de forma
            simples, visual e acessível.
          </p>
        </section>

        <section>
          <div className="section-heading">
            <h2>Indicadores</h2>

            <span>
              {city} - {state}
            </span>
          </div>

          <div className="indicator-grid">
            {indicators.map((indicator) => (
              <IndicatorCard
                key={indicator.id}
                indicator={indicator}
                selected={
                  selectedIndicator?.id === indicator.id
                }
                onClick={() =>
                  setSelectedIndicator(indicator)
                }
              />
            ))}
          </div>
        </section>

        {selectedIndicator && (
          <>
            <IndicatorChart
              indicator={selectedIndicator}
            />

            <IndicatorExplanation
              indicator={selectedIndicator}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;