interface HeaderProps {
  city: string;
  state: string;
}

export function Header({ city, state }: HeaderProps) {
  return (
    <header className="header">
      <div>
        <p className="logo">Cidadão Data</p>

        <p className="tagline">
          Dados públicos de forma simples.
        </p>
      </div>

      <div className="location">
        📍 {city} - {state}
      </div>
    </header>
  );
}